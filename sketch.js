// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #115: Snake Game Redux
// https://youtu.be/OMoVcohRgZA

let snake;
let rez = 20;
let food;

// grab width and height so we can use to randomize
// the food spot and to calculate the edges of map
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  
  // slows down the snake speed
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

// spawns the red food for snake in a random
// spot on the map
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

// Goes the desired direction that the player
// chooses the snake to go in
// canvas starts at top left with origin of (0,0)
// and goes down and right to move in a + direction
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

// draw the snake, its food and constantly check
// death conditions
function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    // know that snake ate and will need a newly spawned piece of food
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    // we know that its the snake's last days
    // should we ask it any last words?
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  // make a red square to represent a piece of food
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}