function easing(x) {
  return sqrt(1 - (x - 1) ** 1);
}

class Creature {
  constructor() {
    // 画面中央
    this.p = createVector(windowWidth / 2, windowHeight / 2);
    this.path = [];
    this.wait = [];
  }
  move() {
    if (this.path.length > 10) {
      // １フレーム移動
      this.p = this.path.shift();
      this.wait.push(this.p);
    } else if (this.wait.length > 10) {
      // その場で待つ
      this.wait.shift();
    } else {
      // STEPフレームの移動を決める
      const x = random(R, windowWidth - R);
      const y = random(R, windowHeight - R);
      const q = createVector(x, y);
      for (let i = 1; i <= STEP; i++) {
        const x = i / STEP;
        this.path.push(p5.Vector.lerp(this.p, q, easing(x)));
      }
    }
  }
  draw() {
    line(0, 0, mouseX, mouseY);
    for (const w of this.wait) {
      circle(w.x, w.y, 150);
    }
    circle(mouseX, mouseY, 100);
  }
}

