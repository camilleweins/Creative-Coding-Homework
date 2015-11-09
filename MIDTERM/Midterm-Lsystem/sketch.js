// TURTLE STUFF:
var x, y; // the current position of the turtle
var saveX, saveY, saveAngle;
var currentangle = 0; // which way the turtle is pointing
var step = 13; // how much the turtle moves with each 'F'
var angle = 27;
//var angle = 30;

// LINDENMAYER STUFF (L-SYSTEMS)
var thestring = 'F';
//var thestring = 'A'; // "axiom" or start of the string
var numloops = 5; // how many iterations of the L-system to pre-compute
var therules = []; // array for rules
therules[0] = ['F','C0FF[C1-F++F][C2+F--F]C3++F--F'];
//therules[0] = ['F', 'C0FFFF++++FF-C1-FFFFFF+F+[C2+FFFFFFF-F]]]'];
//therules[0] = ['A', '-BF+AFA+FB-']; // first rule
//therules[1] = ['Y','-FX-Y'];
//therules[1] = ['X', 'C0FFFFFF-[C2[X]+C3X]+FFFC1F[C3+FX]-XF'];
//therules[1] = ['X', '+[F-[F]-FF+']; // second rule

//var thestring = '+F-+[F-F+-[F-+F]F-F-+[+F+-F]-+F+]';

var whereinstring = 0; // where in the L-system are we drawing right now?

// THIS RUNS WHEN WE HIT GO
function setup()
{
  createCanvas(800, 600); // this is the size of the window
  background(0,0,0,255); // background to white
  stroke(255); // draw in black
  
  x = width/2;
  y = height/2;
  
  // COMPUTE THE L-SYSTEM
  for(var i = 0;i<numloops;i++) {
   thestring = lindenmayer(thestring); // do the stuff to make the string
  }
  //console.log(thestring); // comment this out if it's slowing you down
  
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



// this is a custom function that draws turtle commands

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
  //for (var i = 0; i < this.todo.length; i++)
  push();  
    //{
    if(k=='F') // draw forward
    {
    //translate(width/2, height);
    //stroke(255);
    //line(0,0,len,0);
   // translate(len,0);
    
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    //line(0, 0, step*cos(radians(currentangle)), step*sin(radians(currentangle))); // connect the old and the new
    line(x,y,x1,y1);
    //translate(angle,0);
    // update the turtle's position:
    x = x1;
    y = y1;
    
    if(x>width) x = 0;
    if(x<0) x = width;
    if(y>height) y = 0;
    if(y<0) y = height;
    
  }
  
  //push();
  //translate(0, y);
  
  else if(k=='+')
  {
   rotate(currentangle+=angle);
   //currentangle+=angle; // turn left
   
  }
  else if(k=='-')
  {
   rotate(currentangle-=angle);
   //currentangle-=angle; // turn right 
   
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
   
//pop();
  
}
