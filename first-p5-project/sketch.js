/*
function setup(){
    createCanvas(800, 600);
    background(255,13,255);
    
    stroke(255);
    fill(100);
    ellipse(200,200,100);
    ellipse(500,200,100);

    stroke(255)
    fill(0)
    rect(300, 400, 100, 50)
}
*/

var radius,r;

function setup(){
createCanvas(500, 500);
backround(255);
radius = 0 ;
r=600
}

function draw(){
    radius++;//radius increasing by 1
    fill(155,208,38);//color
    if (radius<200);{//if the radius is less than 200
    ellipse(250, 250, radius);//the circle will increase in size
}
else if(radius>=300){
background(255)
ellipse(150,150,r-radius)
if (radius>=600){
    radius=0
}
}