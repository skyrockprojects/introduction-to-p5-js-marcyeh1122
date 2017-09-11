function setup(){
  createCanvas(500,500);

  for(var i = 0; i < 9; i=i+1)
  {
    for (var j = 0; j < 9; j++){
      if ((i+j)%2 == 1){
        fill("black")
      } else {
        fill("white")
      }
      rect(50*i,50*j,50,50);
    }

  }


}

function draw(){



}
