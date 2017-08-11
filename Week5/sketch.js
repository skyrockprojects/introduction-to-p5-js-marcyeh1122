var x = 400;
var y = 400;
var direction = 1;
var directionY = 1;

function setup(){
  createCanvas(500,500);
    
}

function draw(){
    
    background("gray")
    fill("black");
    
    if(x == 500){
        direction = -1;
    }
    if(y == 0) {
        directionY = -1;
    }
    if(x == 0) {
        direction = 1;
    }
    if (y == 500) {
        directionY = 1;
    }
    
    x = x + direction;
    y = y - directionY;
    ellipse(x,y,50,50);
}
