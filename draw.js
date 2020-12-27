const { Shape } = require("./shape");

class Draw {
  constructor(context, width, height) {
    this.ctx = context;
    this.width = width;
    this.height = height;
  }

  background(color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  line(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }

  rect(width, height) {
    this.ctx.beginPath();
    this.ctx.rect(-width / 2, -height / 2, width, height);
    this.ctx.stroke();
  }

  fillRect(width, height) {
    this.ctx.fillRect(-width / 2, -height / 2, width, height);
  }

  square(width) {
    this.rect(width, width);
  }

  setTranslation(x, y) {
    this.ctx.setTransform(1, 0, 0, 1, x, y);
  }

  shape(s, { closed = false } = {}) {
    const v = s.vertices;
    if (v.length < 2) {
      return;
    }
    this.ctx.beginPath();
    this.ctx.moveTo(v[0][0], v[0][1]);
    for (let i = 1; i < v.length; i++) {
      this.ctx.lineTo(v[i][0], v[i][1]);
    }
    if (closed) {
      this.ctx.lineTo(v[0][0], v[0][1]);
    }
    this.ctx.stroke();
  }
}

module.exports = {
  Draw,
  Shape,
};
