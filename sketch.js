var astronaut, astronautImage, alien, alienImage,meteor, meteorImage, ufo, ufoImage,robot,robotImage;  
 var bg, bgImage;
var ground;
var score =0, edges;
var ufoGroup, meteorGroup;
var bullet, bulletImage;
function preload(){
  astronautImage = loadAnimation("images/astronaut.png","images/astro2.png");
  alienImage = loadImage("images/alien.png");
  meteorImage = loadImage("images/meteor.png");
  ufoImage = loadImage("images/ufo.png");
  robotImage = loadImage("images/robot.png");
  bgImage = loadImage("images/download.jpg");
   bulletImage=loadImage("images/goldball.png")
}
function setup () {

  edges = createCanvas (1200,600);
bg=createSprite (600,0,1200,600);
bg.scale = 0.70
bg.velocityX=-4;
bg.addImage(bgImage);
ground=createSprite(600,580,1200,10);
// ground.velocityX=-4;
ground.visible = false;
astronaut= createSprite(100,450);
astronaut.addAnimation("astronaut",astronautImage);
astronaut.scale = 0.2
createEdgeSprites();
meteorGroup = new Group();
ufoGroup = new Group()

}
function draw () {
 background("black");
textSize(30);
fill(255);

text("Score: "+score, 400, 100);

if(keyDown("space")){
  astronaut.y = -10;
 
}
astronaut.y +=0.7; 
if(keyDown("right")){
  spawnBullets();
}

if(meteorGroup.isTouching(astronaut) || ufoGroup.isTouching(astronaut)){
  score= score+10;
  console.log(score);
  meteorGroup.destroyEach();
  ufoGroup.destroyEach();
}

if(bg.x<0){ 
bg.x=bg.width/2;
 }

spawnUfos();
spawnMeteors();

if(keyDown("right")){
  spawnMeteors();
  console.log("spawning meteors")
}

astronaut.collide(ground)


drawSprites();
}


function spawnBullets(){
if(frameCount%10==0){
  bullet = createSprite(200,50,20,20);
  bullet.addImage(bulletImage);
  bullet.velocityX = 5;
  bullet.scale = 0.2;
  bullet.y =astronaut.y
  bullet.x  = astronaut.x;

}
}

function spawnMeteors(){
  if (frameCount%60==0){
    var meteor = createSprite (1200,random(50,400));
    meteor.addImage(meteorImage);
    meteor.velocityX = -5;
    meteor.scale = 0.5
    meteorGroup.add(meteor)
    meteor.lifetime=300;
    
  }
}
function spawnUfos(){
  if (frameCount%60==0){
    var ufo = createSprite (1200,random(50,400));
    ufo.addImage(ufoImage);
    ufo.velocityX = -5;
    ufo.scale = 0.5;
    ufoGroup.add(ufo);
    ufo.lifetime=300;
  }
}
