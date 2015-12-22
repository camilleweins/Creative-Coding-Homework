var tongue;
var tonguespritesheet;
var tongue_animation;

function preload() {
tonguespritesheet = loadSpriteSheet("./data/tonguesprite-01.png", 171, 158, 6);  
tongue_animation = loadAnimation(tonguespritesheet);  
}

function setup() {
  createCanvas(800,600);
  tongue = createSprite(width/2, height/2, 171, 158);
  tongue.addAnimation("wiggle", tongue_animation);
  
  //tongue.addAnimation("initial", "./data/tongue-01.png");
  //tongue.addAnimation("wiggle", "./data/tongue-01.png", "./data/tongue-02.png", "./data/tongue-03.png", "./data/tongue-04.png", "./data/tongue-05.png", "./data/tongue-06.png");

  //tongue.onMouseOver = function() {
    //this.changeAnimation("wiggle");
  //}
  //tongue.onMouseOut=function(){
    //this.changeAnimation("initial");
  //}
}

function draw() {
  background(255,255,255);  
  drawSprites();
}