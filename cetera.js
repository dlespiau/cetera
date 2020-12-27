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
  map,
  radians,
  degrees,
};
