var x = 0;
var y = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
	if (keyIsDown(LEFT_ARROW)) {
		x -= 1.5;
	}
 	if (keyIsDown(RIGHT_ARROW)) {
		x += 1.5;
	}
	if (keyIsDown(DOWN_ARROW)) {
		y += 1.5;
	}
	if (keyIsDown(UP_ARROW)) {
		y -= 1.5;
	}
	fill(0, 255, 255);
  ellipse(x, y, 10, 10);
}
