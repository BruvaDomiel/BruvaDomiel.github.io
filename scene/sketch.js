



let dvd;
let x, y;
let dx, dy;


function preload() {
  dvd = loadImage("assets/dvd logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2 - dvd.width / 2;
  y = height/2 - dvd.height / 2;
  dx = random(3, 8);
  dy = random(3, 8);
}

function draw() {
  moveDVD();
  displayDVD();


}

function moveDVD() {

  x += dx;
  y += dy;
}

function displayDVD() {
  background(80);
  image(dvd, x, y);
}
