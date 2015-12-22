var tongue;
//var hips;
//var arms;
//var head;



function setup() {
  createCanvas(800, 800);
  tongue = createSprite(width/2, height/2);

  tongue.addAnimation("initial", "./data/winky-06.png");
  tongue.addAnimation("wiggle", "./data/winky-06.png", "./data/winky-07.png", "./data/winky-08.png", "./data/winky-09.png", "./data/winky-10.png", "./data/winky-11.png");

  tongue.onMouseOver = function() {
    this.changeAnimation("wiggle");
  }
  tongue.onMouseOut=function(){
    this.changeAnimation("initial");
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}