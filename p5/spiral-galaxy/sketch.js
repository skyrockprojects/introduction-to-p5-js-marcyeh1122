var a,b;
var x,y;


var theta;
var lambda = 0.0001;
var r = 10;

function setup() {
    createCanvas(800, 600);
    background(0);
    a = 1 + random(5);
    b = 12 + random(6);
    stroke(r,0,0);
}

function draw(){
    translate(width/2, height/2);
    theta = radians(frameCount);
    x = a * exp(b*frameCount*lambda)*cos(theta);
    y = a * exp(b*frameCount*lambda)*sin(theta)*0.5;
    var r = sqrt(x^2 + y^2)
    for (var i = 0; i < 500; i++) {
        point(x + randomGaussian(x,30), y + randomGaussian(y,15))
    }
}

function keyPressed(){
    r++;
    stroke(r,0,0);
}