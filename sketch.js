//create the variables
var ground, groundImage;
var balloonB, balloonG, balloonR, balloonP
var balloonBImage, balloonGImage, balloonRImage, balloonPImage
var bow, bowImage
var arrow, arrowImage
var balloonSelect
var score = 0

function preload(){
 //load your images here 
 groundImage = loadImage("background0.png");
 balloonBImage= loadImage("blue_balloon0.png")
 balloonGImage= loadImage("green_balloon0.png")
 balloonRImage= loadImage("red_balloon0.png")
 balloonPImage= loadImage("pink_balloon0.png")
 bowImage= loadImage("bow0.png")
 arrowImage= loadImage("arrow0.png")
}

function setup() 
{
  createCanvas(600,400);
  
  //add code here
  //create ground
  ground = createSprite(200, -200, 400, 20);
  ground.addImage("ground", groundImage);
  ground.velocityX= -2
  ground.scale= 3
  
  //create bow
  bow = createSprite(580, 200, 20, 20)
  bow.addImage("bow", bowImage)
}

function draw() 
{

  //add code here
  //background
   background("white");
  //balloon random spawn
  balloonSelect=Math.round(random(1,4));
  balloonYSelect=random(1,300)
  if(frameCount%80===0) 
  {
    if (balloonSelect === 1)
      {
        balloonb();
      }
    else if (balloonSelect === 2)
      {
        balloong();
      }
    else if (balloonSelect === 3)
      {
        balloonr();
      }
    else if (balloonSelect === 4)
      {
        balloonp()
      }
  }
  //make bow move
  bow.y = World.mouseY;
  
  //ground resetting
  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }
  
  arrowMake ()
  
  drawSprites();
  
  textSize=20
  text("Score : "+score, 270, 30)
}

function arrowMake ()
{
  if (keyWentDown("space"))
  {
    arrow=createSprite(bow.x, bow.y, 30, 10)
    arrow.velocityX= -10
    arrow.addImage(arrowImage)
    arrow.lifetime=70
    arrow.scale=0.3
  }
}

function balloonb()
{
  balloonB = createSprite(20, balloonYSelect, 57, 57)
  balloonB.addImage("blue", balloonBImage);
  balloonB.scale = 0.09
  balloonB.velocityX=3
  balloonB.lifetime=225
}

function balloong()
{
  balloonG = createSprite(20, balloonYSelect, 57, 57)
  balloonG.addImage("green", balloonGImage);
  balloonG.scale = 0.08
  balloonG.velocityX=3
  balloonG.lifetime=225
}

function balloonr()
{
  balloonR = createSprite(20, balloonYSelect, 57, 57)
  balloonR.addImage("red", balloonRImage);
  balloonR.scale = 0.08
  balloonR.velocityX=3
  balloonR.lifetime=225
}

function balloonp()
{
  balloonP = createSprite(20, balloonYSelect, 57, 57)
  balloonP.addImage("pink", balloonPImage);
  balloonP.velocityX=3
  balloonP.lifetime=225
}