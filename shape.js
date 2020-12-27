class Shape {
  constructor() {
    this.vertices = [];
  }

  vertex(x, y) {
    this.vertices.push([x, y]);
  }
}

module.exports = {
  Shape,
};
