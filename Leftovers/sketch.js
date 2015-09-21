
var r =  0;
var thex, they;
var v;
var t;

function setup() {
createCanvas(400, 400);

  background(6);
  rectMode(CENTER);
  
  thex = random(0, width);
  they = random(0, height);
  
  noStroke();
  smooth();
  
  v = random(5, 15);
  t = random(0, TWO_PI);
}

function draw() {
  fill(0, 0, 0, 5);
  
  rect(width/2, height/2, width, height);

  fill(255);
  translate(mouseX, mouseY);
  rotate(r);
  rect(0, 0, 20, 20);
  r = r + 0.05;
  
  ellipse(thex, they, 10, 10);
  thex = thex+v*cos(t);
  they = they+v*sin(t);
  
  if(thex>width) t = PI - t;
  if(thex<0) t = PI -t;
  if(they>height) t = TWO_PI - t;
  if(they<0) t = TWO_PI - t;
}

function keyPressed() {

  if (key == " ") background(255);
    
}