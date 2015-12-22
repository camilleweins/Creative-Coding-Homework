var tongue;
var noisey;
var arm;
var hip;
var hand;
var shake;
var jig;
var bgm;

function preload() {
  noisey = loadSound("./data/fart.mp3");
  shake = loadSound("./data/shaking.mp3");
  jig = loadSound("./data/jiggle.mp3");
  bgm = loadSound("./data/mahmoud.mp3");
}

function setup() {
  createCanvas(800, 600);
  img = loadImage("./data/homunculus.jpg");
  bgm.play();
  bgm.loop();
  bgm.setVolume(.5);
  
  hand = createSprite(width/2, 340);
  hand.scale -=0.7;
  hand.addAnimation("twisty", "./data/handy-13.png");
  hand.addAnimation("turny", "./data/handy-07.png", "./data/handy-08.png", "./data/handy-09.png", "./data/handy-10.png", "./data/handy-11.png", "./data/handy-12.png", "./data/handy-13.png");
  
  hand.onMouseOver = function() {
    this.changeAnimation("turny");
    shake.play();
    shake.loop();
    shake.setVolume(.6);
    
  }
  hand.onMouseOut = function () {
    this.changeAnimation("twisty");
    shake.stop();
  }
  
  hip = createSprite(width/2, 310);
  hip.scale -=.76;
  hip.addAnimation("bring", "./data/hip-09.png");
  hip.addAnimation("around", "./data/hip-06.png","./data/hip-07.png", "./data/hip-08.png", "./data/hip-09.png", "./data/hip-10.png", "./data/hip-11.png", "./data/hip-12.png", "./data/hip-13.png");

  hip.onMouseOver = function () {
    this.changeAnimation("around");
    jig.play();
    jig.loop();
    jig.setVolume(.6);
  }
  hip.onMouseOut = function () {
    this.changeAnimation("bring");
    jig.stop();
  }
  
  tongue = createSprite(width/2, 180);
  tongue.scale -=0.7;
  tongue.addAnimation("start", "./data/winky-06.png");
  tongue.addAnimation("move", "./data/winky-06.png", "./data/winky-07.png", "./data/winky-08.png", "./data/winky-09.png", "./data/winky-10.png", "./data/winky-11.png");
  
  tongue.onMouseOver = function() {
    this.changeAnimation("move");
    noisey.play();
    noisey.loop();
    noisey.setVolume(.6);

  }
  tongue.onMouseOut = function () {
    this.changeAnimation("start");
    noisey.stop();
  }
}


function draw() {
  background(255,255,255);
  image(img, 0, 10, img.width/4, img.height/4);
  drawSprites();
}