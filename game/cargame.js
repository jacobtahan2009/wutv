
let carX = 180;
let carY = 170;
let speed = 5;

let obstacleX = 100;
let obstacleY = -80;
let obstacleSpeed = 3;

let gameOver = false;

function setup() {
  createCanvas(400, 250);
  noCursor();
}

function draw() {
  background(50);

  fill(70);
  noStroke();
  rect(50, 0, 300, 250);

  fill(255);
  rect(195, 0, 10, 40);
  rect(195, 80, 10, 40);
  rect(195, 160, 10, 40);

  if (gameOver == false) {

    if (keyIsDown(LEFT_ARROW)) {
      carX -= speed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      carX += speed;
    }

    carX = constrain(carX, 55, 305);

    obstacleY += obstacleSpeed;

    if (obstacleY > 250) {
      obstacleY = -80;
      obstacleX = random(60, 300);
    }

    if (
      carX < obstacleX + 40 &&
      carX + 40 > obstacleX &&
      carY < obstacleY + 60 &&
      carY + 60 > obstacleY
    ) {
      gameOver = true;
    }
  }

  drawCar(carX, carY);
  drawObstacle();

  if (gameOver == true) {
    fill(255, 0, 0);
    textSize(35);
    text("GAME OVER", 75, 115);

    fill(255);
    textSize(16);
    text("Tryck SPACE för att starta om", 85, 150);
  }
}

function keyPressed() {
  if (gameOver == true && key == ' ') {
    carX = 180;
    carY = 170;

    obstacleX = 100;
    obstacleY = -80;

    gameOver = false;
  }
}

function drawCar(x, y) {
  fill(255, 0, 0);
  noStroke();
  rect(x, y, 40, 60);
}

function drawObstacle() {
  fill(0, 0, 255);
  noStroke();
  rect(obstacleX, obstacleY, 40, 60);
}




  

  

  
  