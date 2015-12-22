var tongue;
//var hips;
//var arms;
//var head;



function setup() {
  createCanvas(800, 400);
  tongue = createSprite(width/2, height/2);
  tongue.addAnimation("initial", "./data/winky1");
 // tongue.addAnimation("wiggle", "./data/winky1", "./data/winky2", "./data/winky3", "./data/winky4", "./data/winky5", "./data/winky6");

  //tongue.onMouseOver = function() {
  //  this.changeAnimation("wiggle");
 // }
 // tongue.onMouseOut=function(){
  //  this.changeAnimation("initial");
 // }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}