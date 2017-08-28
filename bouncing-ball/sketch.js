var x = 46;
var y = 78;

//setting r = 100 doesn't work: why?
var r = 40;
var speedx = 5;
var speedy = 4;
var dirx = 1;
var diry = 1;

function setup() {
  createCanvas(800, 500);
    background(220);
    
    ellipse(x,y,r,r);
}

function draw(){
    background(220);
    x = x+speedx*dirx;
    y = y+speedy*diry;
//    r = 40+10*sin(x*0.03);
    
    if (x > 800-r | x < 0 + r){
        dirx = dirx * -1;
    }
    if (y > 500-r | y < 0 + r){
        diry = diry * -1;
    }
    
    fill(x%100,y%100,(x+y)%100);
    
    ellipse(x,y,r,r);
    
}