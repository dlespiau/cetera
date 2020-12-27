function dist(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function map(x, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((x - istart) / (istop - istart));
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function degrees(radians) {
  return (radians * 180) / Math.PI;
}

module.exports = {
  dist,
  map,
  radians,
  degrees,
};
