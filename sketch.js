var B;
var P = [];
var timerStrokeDelay;
var timerPipeInsert;
let bird;
let back;
let platform = [] ;
let velocity = 4;

//var myVar = setInterval(keyPressed, 4000);

function preload()
{
  bird = loadImage("Images/Bird.png");
  back = loadImage("Images/Background.jpg");
  platformImg = loadImage("Images/Background line.png");
  pipe = loadImage("Images/Pipe.png");
//  pipeCeiling = loadImage("Images/pipeCeiling.png");
}

function setup()
{
  createCanvas(500, 600);
  colorMode(HSB, 255);
  timerStrokeDelay = 0;
  timerPipeInsert = 0;
  B = new Bird();
  P.push(new Pipe(velocity));
  platform.push(new Platform(0, velocity));
  platform.push(new Platform(width, velocity));

}

function draw()
{
//  background(135, 100, 255);
  image(back, 0, 0);

  for(let i = P.length-1 ; i >= 0; i--)
  {
    P[i].show();
    P[i].update();
    if(P[i].offscreen())
      P.splice(i,1);
    P[i].collides(B)
     if(P[i].collides(B))
      noLoop();

       console.log('HIT');
      //background(150, 255, 255);
  }
  for(i=0; i< platform.length; i++)
  {
    platform[i].outOfBounds();
    platform[i].update();
    platform[i].show();
  }


  if(millis()-timerPipeInsert > 1500)
  {
    P.push(new Pipe(velocity));
    timerPipeInsert = millis();
  }



  B.update();
  B.show();

}
function keyPressed()
{
  if(millis()-timerStrokeDelay  >= 100)
  {
    if(key == ' ')
      B.jump();
    //console.log(B.velocity);
    timerStrokeDelay = millis();
  }
}
