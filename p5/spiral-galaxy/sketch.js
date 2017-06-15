var a,b;
var x,y;


var theta;
var lambda = 0.0001;
var r = 10;

function setup() {
    createCanvas(800, 600);
    background(0);
    //rectMode(CENTER);
    a = 1 + random(5);
    b = 12 + random(6);
    //ellipse(100,200, 50, 80);
    //fill(0);
    stroke(r,0,0);
}

function draw(){
    translate(width/2, height/2);
    theta = radians(frameCount);
    //rotate(theta);
    x = a * exp(b*frameCount*lambda)*cos(theta);
    y = a * exp(b*frameCount*lambda)*sin(theta)*0.5;
//    point(x,y);
    var r = sqrt(x^2 + y^2)
    for (var i = 0; i < 500; i++) {
        point(x + randomGaussian(x,30), y + randomGaussian(y,15))
    }
//    ellipse(x,y,5,5);
//    console.log(x,y);
}

function keyPressed(){
    r++;
    stroke(r,0,0);
}

























//-----------------


/*
function draw(){
    translate(width/2,height/2);
    if(isPrime(frameCount)){
        point(frameCount*cos(radians(frameCount))*0.005, frameCount*sin(radians(frameCount))*0.005);
        console.log(++count);
    }
}

function isPrime(num) {
  for(var i = 2; i < sqrt(num); i++)
    if(num % i === 0) return false;
  return num !== 1;
}


*/



//creating stairs using sigmoid function
/*function draw() {
    if(x < 1200){
        x = x + 0.8;
    }
    
    //step 1: define variables individually
//    y1 = 50*exp(x-100)/(1 + exp(x-100));
//    y2 = 50*exp(x-200)/(1 + exp(x-200));
//    y3 = 50*exp(x-300)/(1 + exp(x-300));
//    y4 = 50*exp(x-400)/(1 + exp(x-400));
//    y5 = 50*exp(x-500)/(1 + exp(x-500));
//    y6 = 50*exp(x-600)/(1 + exp(x-600));
//    
//  line(x, 400-(y1 + y2 + y3 + y4 + y5 + y6), 0, 0);
    
    //step 2: do it with arrays:
    var i = 0;
    var step = 70;
    var yVals = [];
    while(step*i <= 600) {
        i++;
        var temp = step*i;
        yVals.push(50*exp(x-temp)/(1 + exp(x-temp)));
    }
    var sum = yVals.reduce(add, 0);
    stroke(0);
    line(x, 400-sum, x/1.3,400-sum-100);
    
    stroke(200);
    line(x, 400-sum, x, 400);
}

function add(a, b) {
    return a + b;
}
*/