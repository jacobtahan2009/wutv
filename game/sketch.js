
let catX = 100;
let catY = 100;
let catSize = 50;
let catSpeed = 4;

let playerMouseX = 200;
let playerMouseY = 200;
let mouseSize = 30;

let gameState = "START";

function setup() {
  createCanvas(400, 250);
  noCursor();
}

function draw() {
  background(220);

  if (gameState === "START") {
    fill(0);
    textAlign(CENTER);
    textSize(32);
    text("KATTEN och MUSEN", width / 2, 115);
    textSize(16);
    text("Tryck på SPACE för att starta", width / 2, 180);

  } else if (gameState === "PLAY") {
    if (keyIsDown(LEFT_ARROW)) {
      catX = catX - catSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      catX = catX + catSpeed;
    }
    if (keyIsDown(UP_ARROW)) {
      catY = catY - catSpeed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      catY = catY + catSpeed;
    }

    catX = constrain(catX, catSize / 2, width - catSize / 2);
    catY = constrain(catY, catSize / 2, height - catSize / 2);

    playerMouseX = constrain(mouseX, mouseSize / 2, width - mouseSize / 2);
    playerMouseY = constrain(mouseY, mouseSize / 2, height - mouseSize / 2);

    let d = dist(catX, catY, playerMouseX, playerMouseY);
    if (d < (catSize / 2 + mouseSize / 2)) {
      gameState = "GAMEOVER";
    }

    fill('brown');
    triangle(catX - 20, catY - 15, catX - 25, catY - 35, catX - 5, catY - 25);
    triangle(catX + 20, catY - 15, catX + 25, catY - 35, catX + 5, catY - 25);

    fill('brown');
    circle(catX, catY, catSize);

    fill('white');
    circle(catX - 10, catY - 5, 9);
    circle(catX + 10, catY - 5, 9);

    fill('blue');
    circle(playerMouseX, playerMouseY, mouseSize);

  } else if (gameState === "GAMEOVER") {
    fill(0);
    textAlign(CENTER);
    textSize(28);
    text("KATTEN FÅNGADE MUSEN!", width / 2, 115);
    textSize(16);
    text("Klicka med musen för att spela igen", width / 2, 170);
  }
}

function keyPressed() {
  if (keyCode === 32 && gameState === "START") {
    gameState = "PLAY";
  }
}

function mousePressed() {
  if (gameState === "GAMEOVER") {
    catX = 100;
    catY = 100;
    gameState = "PLAY";
  }
}
