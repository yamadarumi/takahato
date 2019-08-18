// タカハトゲームのシミュレータ
const STEP = 65;
const R = 100;
const MAX_WAIT = 150;

let plants = new Plants();

function setup() {
  createCanvas(windowWidth, windowHeight);
  const p = createVector(windowWidth, windowHeight).div(2); // 画面中央
  const plant = new Plant(p);
  plants.add(plant);
}

function draw() {
  background(200,90,150);
  creature.move();
  creature.draw();
}
