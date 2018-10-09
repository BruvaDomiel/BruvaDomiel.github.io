let yoda;
let sadyoda;
let img;

function preload() {
  yoda = loadImage("assets/Yoda.jpg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  image(yoda, 0, 0);
}

function draw() {

}

function makeSad(sourceImage) {
  img = createImage(sourceImage.width, sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();

  for (let x = 0; x < img.width; x++) {
    for(let y = 0; y < img.height; y++); {
      let thisPixel = sourceImage.get(x, y);

        let r = red(thisPixel);
        let g = green(thisPixel);
        let b = blue(thisPixel);

        let average = (r + g + b) / 3;

        let newPixel = color(average, average, average);


        img.set(x, y, newPixel);
      }
    }
  }
  img.updatePixles();
  return img;
