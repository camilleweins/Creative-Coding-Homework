var r =  0;


function setup() {
createCanvas(800, 600);

  background(6);
  rectMode(CENTER);
  
  
  noStroke();
  smooth();
  
}

function draw() {
  //text('Hello', 0, 0, 40, 40);
  //fill(random(0,255));
  
  fill(0, 0, 0, 5);
  
  text('Hello', width/2, height/2, width, height);
  textSize(36);

  fill(245);
  translate(mouseX, mouseY);
  rotate(r);
  text('Hello', 0, 0, 40, 40);
  textSize(48);
  r = r + 1.02;
  
}

function keyPressed() {

  if (key == " ") background(255);
    
}