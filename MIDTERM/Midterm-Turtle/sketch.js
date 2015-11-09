// TURTLE GRAPHICS
// https://en.wikipedia.org/wiki/Turtle_graphics
// 
// this p5 sketch does a simple implementation of Seymour Papert's
// 'turtle graphics' package for LOGO.  using key commands, you can
// drive a turtle as it draws on the screen.
// 
// your tasks:
// (1) _
// have it set vertex points for shapes.
// (2) expand the turtle's vocabulary so it understands more 
// symbols than +, -, and F.  for example, a standard turtle
// typically will use lowercase 'f' for a move that *doesn't*
// draw (e.g. to leave a space).  it will also allow for branching
// symbols such as '[' and ']' so that the turtle can go on an
// expedition and 'teleport' back when a branch closes.  a simple
// thought would be to have the 'C' key change the turtle's drawing
// color.
// (3) find a way to make the turtle draw *automatically*, using
// the same system.  see the next sketch for an example of how that
// might be done.  :)

var x, y; // the current position of the turtle
//var currentangle = ;
var currentangle = 0; // which way the turtle is pointing
var step = 15; // how much the turtle moves with each 'F'
//var angle = 55;
var angle = 25; // how much the turtle turns with a '-' or '+'

// LINDENMAYER STUFF (L-SYSTEMS)
var thestring = 'FX';
var numloops = 5; // how many iterations of the L-system to pre-compute
var therules = []; // array for rules
therules[0] = ['F', 'C0FF-[C1-F+F]+[C2+F-F]'];
therules[1] = ['X', 'C0FF+[C1+F]+[C3-F]'];

var whereinstring = 0; // where in the L-system are we drawing right now?

// THIS RUNS WHEN WE HIT GO
function setup()
{
  createCanvas(800, 600); // this is the size of the window
  background(255); // background to white
  stroke(0, 0, 0, 255); // draw in black
  
  // start the x and y position at lower-left corner
  x = width/2;
  y = height/2;
  
  // COMPUTE THE L-SYSTEM
  for(var i = 0;i<numloops;i++) {
    thestring = lindenmayer(thestring); // do the stuff to make the string
  }
  console.log(thestring); // comment this out if it's slowing you down
  
}

// DO THIS EVERY FRAME
function draw()
{
  
  // draw the current character in the string:
  drawIt(thestring.charAt(whereinstring)); 
  
  // increment the point for where we're reading the string.
  // wrap around at the end.
  whereinstring++;
  if(whereinstring>thestring.length-1) whereinstring = 0;

}

// interpret an L-system
function lindenmayer(s)
{
  var outputstring = ''; // start a blank output string
  
  // go through the string, doing rewriting as we go
  
  // iterate through 'therules' looking for symbol matches:
  for(var i=0;i<s.length;i++) // every symbol in 's'
  {
    var ismatch = 0; // by default, no match
    for(var j = 0;j<therules.length;j++) // every rule in 'therules'
    {
      if(s.charAt(i)==therules[j][0]) // MATCH!
      {
        outputstring+=therules[j][1]; // write substitution
        ismatch = 1; // we have a match, so don't copy over symbol
        break; // get outta this for() loop
      }
    }
    // if nothing matches in 'therules' array, just copy the symbol over.
    if(ismatch===0) outputstring+= s.charAt(i); 
  }
  
  return(outputstring); // send out the modified string
}

// this is a custom function that draws turtle commands
function drawIt(k)
{
  if(k=='F') // draw forward
  {
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    line(x, y, x1, y1); // connect the old and the new
    // update the turtle's position:
    x = x1;
    y = y1;
    
    if(x>width) x = 0;
    if(x<0) x = width;
    if(y>height) y = 0;
    if(y<0) y = height;
  }
  else if(k=='+')
  {
   currentangle+=angle; // turn left
  }
  else if(k=='-')
  {
   currentangle-=angle; // turn right   
  }
  else if(k=='[')
  {
    //push();
    //rotate(currentangle+=angle);
    saveX = x;
    saveY = y;
    saveAngle = currentangle;
    
  }
  else if(k==']')
  {
    //pop();
    //rotate(currentangle-=angle);
    x = saveX;
    y = saveY;
    //saveAngle = -currentangle;
    currentangle = saveAngle;
    
  }
   
  // pick a gaussian (D&D) distribution for the radius:
  var radius = 0;
  radius+= random(0, 15);
  radius = radius/3;
  
  // draw the stuff:
  fill(48, 132, 245, alpha); // interior fill color
  ellipse(x, y, radius, radius); // circle that chases the mouse

}