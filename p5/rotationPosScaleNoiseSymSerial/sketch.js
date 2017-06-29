//credits: Gene Kogan & THIS WORKS: https://codepen.io/jonathanSRP/pen/zzxgMR
// If using p5 Editor be sure to choose File > Import Library > p5.serialport.js from the P5 IDE main menu to load serial library

// Terminal command to install p5.serialserver:  npm install p5.serialserver
// Terminal command to start server:  node ~/node_modules/p5.serialserver/startserver.js

var serial;                            // variable to hold an instance of the serialport library
var options = {baudrate: 9600};      // set baudrate to 9600; must match Arduino baudrate
var inData;                            // for incoming serial data
var inDataNorm;
var inDataSlope;
var dataSmoov;

var direction;
var x;
var startred;
var startblue;
var startgreen;
// var y;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  
  serial = new p5.SerialPort(); 
  serial.on('data', serialEvent); 
  serial.on('error', serialError); 

  serial.open("/dev/cu.usbmodem1411");   serial.clear();
  rectMode(CENTER);
  fill(300, 50);
  stroke(255, 10);
  x = 0;
  dataSmoov = 0;
  direction = 1;
  startred = Math.abs(random(0, 255));
  startgreen = Math.abs(random(0, 255));
  startblue = Math.abs(random(0, 255));  
}

function serialEvent() {
  // read a byte from the serial port:
  var inByte = serial.read();
  //console.log("inByte: " + inByte);
  inData = inByte;
}

function serialError(err) {
  console.log('Something went wrong with the serial port.');
  console.log(err);
}

function draw(){
	var fullcount = 255;
	var updown = count(fullcount);
	if (Number.isFinite(inData)){  					//protects from NaN when loading port
		dataSmoov = lerp(dataSmoov, inData, 0.05);
	} else{
		dataSmoov = 50;
	}
	//console.log(inData + " " +dataSmoov);
	inDataNorm = map(dataSmoov, 0, 50, 0, 1);
	inDataSlope = Math.pow(inDataNorm, 2);
	background(startred - updown, startgreen - updown, startblue - updown, map(inDataSlope, 0, 1, 1, 255));

	var ang1 = TWO_PI * noise(0.01*frameCount + 10); //note: changed noise ampl in p5 lib to 0.75 from 0.5	
	var ang2 = TWO_PI * noise(0.01*frameCount + 20);
	var ang3 = TWO_PI * noise(0.01*frameCount + 30);
	var rx = 60 * noise(0.01*frameCount + 40);
	var tx = 200 * noise(0.01*frameCount + 50);
	var size1 = 150 * noise(0.01*frameCount + 60);
	var size2 = 100 * noise(0.01*frameCount + 70);
	//print(frameCount);

	translate(windowWidth*0.5, windowHeight*0.5);
	for (var i = 0; i < 8; i++) {
		var trans = 120 - size1
		push();
		rotate(ang1 + TWO_PI * i / 8);
		translate(tx, 0);
		if (trans <=0){
			strokeWeight(Math.abs(trans));
		}
		//print(trans);
		fill(0, 255, 255-i*30, trans); //guestimate at having adjustable depth sim by transparency - great effect when totally transparent
		rect(0, 0, size1, size1, rx*1.2, rx*1.2, rx*1.2, rx*1.2);
		for (var j = 0; j < 6; j++) {
			var trans2 = 95 - size2
			push();
			rotate(ang2 + TWO_PI * j / 6);
			scale(ang2 * j * 0.1);
			rotate(ang3);
			if (inData){
        		translate(map(dataSmoov, 0, 50, 0, windowWidth), map(dataSmoov, 0, 50, 0, windowHeight));
        	} 
       
			if (trans2 <=0){
				strokeWeight(Math.abs(trans2));
			}
			fill(255-i*30, 255, 0, trans2); 
			rect(rx, 0, size2, size2, ang3*ang2, ang3*ang2, ang3*ang2, ang3*ang2);
			pop();
		}		
		translate()
		pop();
	}
	function count(y) {
	    x += direction*0.05;
	    //x = Math.round(x);
	    direction *= (((Math.ceil(x) % y) == 0) ? -1 : 1); // like "if" statement with inverse condition check included
	    return x;
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


