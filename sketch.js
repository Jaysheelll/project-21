
var skyImg, sky;
var cloudImg, cloud, cloudsGroup;
var climberImg, climber, climbersGroup;
var fairy, fairyImg;
var gameState = "play"


function preload(){
  skyImg = loadImage("bg.png");
  cloudImg = loadImage("cloud.png");
  fairyImg = loadImage("fairy_standing.png");
}

function setup() {
  createCanvas(600,600);
  sky = createSprite(300,300);
  sky.addImage("sky",skyImg);
  sky.velocityY = 1;
  
  cloudsGroup = new Group();
  
  fairy = createSprite(200,200,50,50);
  fairy.scale = 0.3;
  fairy.addImage("fairy", fairyImg);
 


  fairy.setCollider("rectangle",0,0,fairy.width,fairy.height);
}


function draw() {
  background(255);
 if(sky.y > 0){
      sky.y = 300
    } 
  
  if (gameState === "play") {


    if(keyDown("left_arrow")){
        fairy.x = fairy.x - 3;

    }
    if(keyDown("right_arrow")){
  
          fairy.x = fairy.x + 3;

    }
    if(keyDown("space")){
  
         fairy.velocityY = -10;
  

    }
  
  fairy.velocityY = fairy.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling sky
    
if (sky.y > 400)
{
sky.y = 300;
}



      spawnClouds();

  

     if(cloudsGroup.isTouching(fairy)){
      fairy.velocityY = 0;
    }
    if(fairy.y > 600){
      fairy.destroy();
      gameState = "end";
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnClouds()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var cloud = createSprite(200, -50);

    //add the random function
cloud.x = Math.round(random(120,400));

        
    cloud.addImage(cloudImg);
    cloud.scale=0.1; 
    cloud.velocityY = 1;

    //change the depth of the fairy and cloud
    
     
fairy.depth = cloud.depth;
    fairy.depth =1;
    
    //assign lifetime for the cloud and invisible block

    cloud.lifetime = 800;

    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are cloud and invisible block
    
     cloudsGroup.add(cloud);
     
  }
}