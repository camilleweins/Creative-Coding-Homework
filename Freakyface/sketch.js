var tongue;
//var tonguespritesheet;
//var tongue_animation;

//var hand;
//var handspritesheet;
//var hand_animation;

function preload() {
//tonguespritesheet = loadSpriteSheet("./data/tonguesprite-01.png", 371, 458, 6);  
//tongue_animation = loadAnimation(tonguespritesheet);

//handspritesheet = loadSpriteSheet("./data.handspritesheet-03.png", 171,158, 9);
//hand_animation = loadAnimation(handspritesheet);

}

function setup() {
  createCanvas(800,600);
  tongue = createSprite(width/2, height/2);
  //tongue.addAnimation("wiggle", tongue_animation);
  
  //hand = createSprite(width/8, height/8);
  //hand.addAnimation("shake", hand_animation);
  
  tongue.addAnimation("initial", "./data/tongue-01.png");
  tongue.addAnimation("wiggle", "./data/tongue-01.png", "./data/tongue-02.png", "./data/tongue-03.png", "./data/tongue-04.png", "./data/tongue-05.png", "./data/tongue-06.png");

  tongue.onMouseOver = function() {
    this.changeAnimation("wiggle");
  }
  tongue.onMouseOut=function(){
    this.changeAnimation("initial");
  }
}

function draw() {
  background(255,255,255);  
  
  //if(keydown(DOWN_ARROW));
  drawSprites();
}