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
//    stroke(5);
    
    ellipse(x,y,r,r);
//  line(15, 25, 70, 490);
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