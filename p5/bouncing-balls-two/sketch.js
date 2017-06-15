//var x = 46;
//var y = 78;

var ballA;
var ballB;

//setting r = 100 doesn't work: why?
var r = 40;
var speedx = 5;
var speedy = 4;
var dirx = 1;
var diry = 1;

function setup() {
    createCanvas(800, 500);
    background(220);
    ballA = new Ball();
    ballB = new Ball();
    
//    ellipse(ballA.x,ballA.y,r,r);
//    ellipse(ballB.x,ballB.y,r,r);
}

function draw(){
    background(220);
    
    boundaryCheck(ballA);
    boundaryCheck(ballB);
    collisionCheck(ballA, ballB);
    
    ballA.move();
    ballB.move();
    
}


function Ball(){
//    this.x = r + random(300);
//    this.y = r + random(300);
    this.position = createVector(r + random(300), r + random(300));
    this.speed = random(10);
    this.dir = p5.Vector.random2D();
    
    this.move = function(){
        this.position.x = this.position.x+this.speed*this.dir.x;
        this.position.y = this.position.y+this.speed*this.dir.y;
    }
}

function boundaryCheck(ball){
    if (ball.position.x > 800-r | ball.position.x < 0 + r){
        ball.dir.x *= -1;
    }
    if (ball.position.y > 500-r | ball.position.y < 0 + r){
        ball.dir.y *= -1;
    }
    ellipse(ball.position.x,ball.position.y,r,r);
}

function collisionCheck(b1, b2){
    var dist = b1.position.dist(b2.position);
    if(dist <= 2*r){
        fill(100 + dist);
        ellipse(b1.position.x,b1.position.y,r,r);
        ellipse(b2.position.x,b2.position.y,r,r);
    } else {
        fill(255);
    }
}