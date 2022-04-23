
class Ship {
  constructor() {
    this.xPos = 0;
    this.yPos = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.rotation = 0;
  }

  process() {
    this.xPos += this.xSpeed
    this.yPos += this.ySpeed
  }
}
let ship ;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
}

function draw() {
  process()
  background(204);
  fill(0, 0, 0)
  rect(ship.yPos, ship.xPos, 50, 50);
  console.log(ship.xSpeed, ship.ySpeed)
}

function process() {
  ship.process()


  if (keyIsDown(87) && ship.ySpeed > -50) { // w
    console.log("w")
    ship.xSpeed -= 1
  }
  if (keyIsDown(65) && ship.xSpeed > -50) { // a
    console.log("a")
    ship.ySpeed -= 1
  }
  if (keyIsDown(83) && ship.ySpeed < 50) { // s
    console.log("s")
    ship.xSpeed += 1
  }
  if (keyIsDown(68) && ship.xSpeed < 50) { // d
    console.log("d")
    ship.ySpeed += 1
  }
}


