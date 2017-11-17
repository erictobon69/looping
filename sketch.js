function setup() {
  createCanvas(500,400);
}

function draw() {
  var x = 50;
var count = 0;
  background(0);
  fill(250);
while(count<3){
  ellipse(x, height/2, 40, 40);
  x+=50;
  count+=1;
}
}