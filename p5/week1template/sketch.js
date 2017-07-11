var radius = 50;

var x = 10;
var y = 10;

var direction = 1;
var direction_y = 1;

var diameter = 500;

var lineFromX = 10;
var lineFromY = 10;

var lineToX = 100;
var lineToY = 150;

var xvar = 0;

var leg1y = 250;
var leg2y = 250;
var leg3y = 250;
var leg4y = 250;

var amplitude = 10;

function setup() {
  //use this space for static drawing
  //這個空間是為靜止的畫

  createCanvas(500,500);
    
//    ellipse(250,250,diameter,diameter);
//    stroke(35,56,78);
//    fill("red");
    //rect(x,y,50,50);
//    line(lineFromX, lineFromY, lineToX, lineToY);
}


function draw() {
    background("black");
    //1. I want to sine curve at y = 350, hence I add 350 to it
    //2. I want the sine wave to vary between -20 to +20
    //3. I want to plot nearby points hence I divide by 10
    var y = 350 + 20 * sin(xvar/10);
//    line(xvar,350,xvar,y);
//    ellipse(xvar,y,5,5);
    xvar +=3;
    xvar = xvar%500;
    
    leg1y = 250 + amplitude * sin((160+xvar)/10)
    leg2y = 250 + amplitude * sin((210+xvar)/10)
    leg3y = 250 + amplitude * sin((260+xvar)/10)
    leg4y = 250 + amplitude * sin((310+xvar)/10)
    
    createElephant();
    
//    stroke(mouseX,mouseY,200);
//    
//    line(lineFromX, lineFromY, mouseX, mouseY);
  // use this space for animation
  // 這個空間是為動畫
//    background("lightgray");
//    if (x + 50 < 500) {
//        x = x + direction;
//    } 
//    
//    if (x + 50 == 500) {
//        direction = -1 * direction;
//        x = x - 1;
//    }
//    
//    if (x < 0) {
//        direction = direction * -1;
////        x = x + 1;
//    }
//    
////    we increment y only as long as the square is between the two walls
//    if(y + 50 < 500){
//        y = y + direction_y;
//    }
//    
//    if (y + 50 == 500) {
//        direction_y = direction_y * -1;
//        y = y - 1;
////        change y direction
//    }
//    
//    if (y <= 0) {
//        direction_y = direction_y * -1;
////        change y direction
//    }
//    
//    rect(x,y,50,50);
}


function createElephant(){
    stroke("white");
    
    
    rect(37,230,20,100);
    ellipse(50,200,100,80);
    rect(160,leg1y,20,100);
    rect(210,leg2y,20,100);
    rect(260,leg3y,20,100);
    rect(310,leg4y,20,100);
    ellipse(250,200,300,200);
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    amplitude--;
    console.log(amplitude);
  } else if (keyCode === UP_ARROW) {
    amplitude++;
      console.log(amplitude);
  }
}






