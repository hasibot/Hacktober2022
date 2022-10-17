let grass;
let track;
let ground;
let car;
let grassImage;
let tileWidth = 50;
let tileHeight = 50;
let carSpeed = 1;
let carAngle = 90;
let carRotate = -90;
let carX = 100;
let carY = 500;

function preload() {
  ground = loadStrings('track.txt');
  grassImg = loadImage('green.jpeg');
  trackImg = loadImage('grey.jpeg');
  carImg = loadImage('car2.png');
}

function setup() {
	createCanvas(800, 800);

	grass = new Group();
    grass.layer = 0;
    grass.collider = 'static';
	grass.w = tileWidth;
	grass.h = tileHeight;
	grass.tile = '0';
    grass.addImage(grassImg);

    track = new Group();
    track.layer = 0;
    track.collider = 'none';
	track.w = tileWidth;
	track.h = tileHeight;
	track.tile = '1';
    track.addImage(trackImg);
  
    start = new Group();
    start.layer = 0;
    start.collider = 'none';
	start.w = tileWidth;
	start.h = tileHeight;
    start.shapeColor = 'yellow';
	start.tile = '2';

	new Tiles(
		ground,
		50,
		50,
		tileWidth,
		tileHeight
	);
    
    car = new Sprite(carImg, carX, carY);
    car.layer = 1;
    car.rotation = 90;
    car.overlap(grass, () => gameOver());
}

function draw() {
   if (kb.pressing('d')) {
    car.rotation += 2;
    car.direction += 2;
  }
  if (kb.pressing('a')) {
    car.rotation -= 2;
    car.direction -= 2;
  }
  if (kb.pressing('s')) {
    car.speed = 1;
  }
}

function gameOver() {
  car.x = carX;
  car.y = carY;
  car.speed = 0;
  console.log("gover")
}
