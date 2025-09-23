var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;

var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("./../images/ground2.png");
  
  cloudImage = loadImage("./../images/cloud.png");
  
  obstacle1 = loadImage("./../images/obstacle1.png");
  obstacle2 = loadImage("./../images/obstacle2.png");
  obstacle3 = loadImage("./../images/obstacle3.png");
  obstacle4 = loadImage("./../images/obstacle4.png");
  obstacle5 = loadImage("./../images/obstacle5.png");
  obstacle6 = loadImage("./../images/obstacle6.png");
  
   restartImg = loadImage("./../images/restart.png")
  gameOverImg = loadImage("./../images/gameOver.png")
  

}