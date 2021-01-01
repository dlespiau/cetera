const { Shape } = require("./shape");

function shapeLine(ctx, s, { closed = false } = {}) {
    const v = s.vertices;
    ctx.beginPath();
    ctx.moveTo(v[0][0], v[0][1]);
    for (let i = 1; i < v.length; i++) {
      ctx.lineTo(v[i][0], v[i][1]);
    }
    if (closed) {
      ctx.lineTo(v[0][0], v[0][1]);
    }
    ctx.stroke();
}

function shapePoint(ctx, s) {
    const v = s.vertices;
    const size = 8;
    for (let i = 0; i < v.length; i++) {
      ctx.fillRect(v[i][0]-size/2, v[i][1]-size/2, 8, 8);
    }
}

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
    this.rectAt(0, 0, width, height);
  }

  rectAt(x, y, width, height) {
    this.ctx.beginPath();
    this.ctx.rect(x - width / 2, y - height / 2, width, height);
    this.ctx.stroke();
  }

  fillRect(width, height) {
    this.fillRectAt(0, 0, width, height);
  }

  fillRectAt(x, y, width, height) {
    this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
  }

  square(width) {
    this.rectAt(0, 0, width, width);
  }

  fillSquare(width) {
    this.fillRectAt(0, 0, width, width);
  }

  fillSquareAt(x, y, width) {
    this.fillRectAt(x, y, width, width);
  }

  squareAt(x, y, width) {
    this.rectAt(x, y, width, width);
  }

  setTranslation(x, y) {
    this.ctx.setTransform(1, 0, 0, 1, x, y);
  }

  shape(s, { method = "line", closed = false } = {}) {
    const v = s.vertices;
    if (v.length < 2) {
      return;
    }
    switch(method) {
    case "line":
      shapeLine(this.ctx, s, { closed });
      break;
    case "point":
      shapePoint(this.ctx, s);
      break;
    default:
        throw `shape: unknown method "${method}"`;
    }
  }
}

module.exports = {
  Draw,
  Shape,
};
