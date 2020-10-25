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

  rect(width, height) {
    this.ctx.fillRect(-width / 2, -height / 2, width, height);
  }

  square(width) {
    this.rect(width, width);
  }

  setTranslation(x, y) {
    this.ctx.setTransform(1, 0, 0, 1, x, y);
  }
}

module.exports = {
  Draw,
};