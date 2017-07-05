//credits: Gene Kogan & THIS WORKS: https://codepen.io/jonathanSRP/pen/zzxgMR
// If using p5 Editor be sure to choose File > Import Library > p5.serialport.js from the P5 IDE main menu to load serial library

// Terminal command to install p5.serialserver:  sudo npm install -g p5.serialserver
// Terminal command to start server:  p5serial

var serial;   //use                         // variable to hold an instance of the serialport library
var options = {baudrate: 9600};  //use    // set baudrate to 9600; must match Arduino baudrate
var inData;                            // for incoming serial data

function setup(){

  serial = new p5.SerialPort(); //use
  serial.on('data', serialEvent); //use
  serial.on('error', serialError); //use

  serial.open("/dev/cu.usbmodem1421");   serial.clear(); //use
}

function serialEvent() { // use
  // read a byte from the serial port:
  var inByte = serial.read();
  console.log("inByte: " + inByte);
  inData = inByte;
}

function serialError(err) { //use
  console.log('Something went wrong with the serial port.');
  console.log(err);
}

function draw(){

  //put yer code here!
  
}
