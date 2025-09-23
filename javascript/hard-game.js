let win, player, enemy1, enemy2, enemy3, enemy4;
let l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12;
let count = 0;

function setup() {
  createCanvas(400, 400);

  win = createSprite(350, 170, 50, 35);
  win.shapeColor = "skyblue";

  l1 = createSprite(200, 80, 250, 5);
  l2 = createSprite(325, 115, 5, 70);
  l3 = createSprite(350, 150, 50, 5);
  l4 = createSprite(375, 170, 5, 40);
  l5 = createSprite(350, 190, 50, 5);
  l6 = createSprite(325, 225, 5, 70);
  l7 = createSprite(200, 260, 250, 5);
  l8 = createSprite(75, 225, 5, 70);
  l9 = createSprite(50, 190, 50, 5);
  l10 = createSprite(25, 170, 5, 40);
  l11 = createSprite(50, 150, 50, 5);
  l12 = createSprite(75, 115, 5, 70);

  player = createSprite(55, 170, 15, 15);
  player.shapeColor = "green";

  enemy1 = createSprite(130, 230, 15, 15);
  enemy1.shapeColor = "red";
  enemy1.velocityY = 8;

  enemy2 = createSprite(170, 95, 15, 15);
  enemy2.shapeColor = "red";
  enemy2.velocityY = -8;

  enemy3 = createSprite(215, 230, 15, 15);
  enemy3.shapeColor = "red";
  enemy3.velocityY = 8;

  enemy4 = createSprite(265, 95, 15, 15);
  enemy4.shapeColor = "red";
  enemy4.velocityY = -8;
}