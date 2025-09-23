let player1, player2, ball, gameover;
let line1, line4;

function preload(){
  player1Img = loadImage("player1.png")
  player2Img = loadImage("player2.png")
  ballImg = loadImage("ball.png")
  gameover = loadImage("player1.png")

}

function setup() {
  createCanvas(400, 400);

  // Players
  player1 = createSprite(30, 200, 20, 80);
  player1.shapeColor = "red";
  player1.addImage(player2Img)
  player1.scale = 0.3;

  player2 = createSprite(370, 200, 20, 80);
  player2.shapeColor = "blue";
  player2.addImage(player1Img)
  player2.scale = 0.3;

  // Boundaries for game over
  line1 = createSprite(2, 200, 7, 400);
  line1.visible = false;
  line4 = createSprite(398, 200, 7, 400);
  line4.visible = false;

  // Ball
  ball = createSprite(200, 200, 20, 20);
  ball.shapeColor = "white";
  ball.addImage(ballImg);
  ball.scale = 0.1;
}

function draw() {
  background("green");

  edges = createEdgeSprites();

  // Bounce players off top/bottom
  player1.bounceOff(edges);
  player2.bounceOff(edges);

  // Bounce ball off top/bottom
  ball.bounceOff(edges);

  // Ball vs players
  ball.bounceOff(player1);
  ball.bounceOff(player2);

  // Player 1 controls (W/S)
  if (keyDown("w")) player1.y -= 5.5;
  if (keyDown("s")) player1.y += 5.5;

  // Player 2 controls (Arrow Up/Down)
  if (keyDown(UP_ARROW)) player2.y -= 5.5;
  if (keyDown(DOWN_ARROW)) player2.y += 5.5;

  // Start ball with SPACE
  if (keyWentDown("space") && ball.velocityX === 0) {
    ball.velocityX = 5.5;
    ball.velocityY = 4.3;
  }

  if(ball.isTouching(player1)){
       ball.velocityX *= 2; // 10% faster
    ball.velocityY *= 2;
  }

  if(ball.isTouching(player2)){
       ball.velocityX *= -2; // 10% faster
    ball.velocityY *= -2;
  }
  // Game over condition
  if (ball.isTouching(line1) || ball.isTouching(line4)) {
    ball.velocityX = 0;
    ball.velocityY = 0;
    ball.position.x = 200;
    ball.position.y = 200;
    textSize(32);
    fill("yellow");
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
  }

  drawSprites();
}