// タカハトゲームのシミュレータ
const STEP = 65;
const R = 100;
const MAX_WAIT = 150;

let creature;

function setup() {
  createCanvas(windowWidth, windowHeight);
  creature = new Creature();
}

function draw() {
  background(200,90,150);
  creature.move();
  creature.draw();
}
