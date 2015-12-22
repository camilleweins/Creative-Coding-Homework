var word;

function setup() {
  createCanvas(800,600);
  word = createSprite(width/2, height/2, 50, 50);

  //textSize(32);
  //text("Head", width/2, height/2);
  //textAlign(CENTER);
  //word = newString("Head");
  word.addAnimation("start", "./data/winky-06.png");
  word.addAnimation("move", "./data/winky-06.png", "./data/winky-07.png", "./data/winky-08.png", "./data/winky-09.png", "./data/winky-10.png", "./data/winky-11.png");
  word.onMouseOver = function() {
    this.changeAnimation("move");
  }
  word.onMouseOut = function() {
    this.changeAnimation("start");
  }
  
}

function draw() {
    background(255,255,255);
    //for(var i=0; i<allSprites.length; i++)

  //if(keyIsDown("UP_ARROW"))
    //getAnimation("toe");
    
  drawSprites();

}