let badGuy;
let playerLeft;
let playerRight;
let playerDown;
let playerUp;
let projectile;

function preload() {
  badGuy = loadImage("assets/bad_guy.png");
  playerLeft = loadImage("assets/left_player.png");
  playerRight = loadImage("assets/right_player.png");
  playerDown = loadImage("assets/down_player.png");
  playerUp = loadImage("assets/up_player.png");
  projectile = loadImage("assets/projectile_player.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);

}

function draw() {

}
