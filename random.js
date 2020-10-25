var seeded = require("seed-random");
var SimplexNoise = require("simplex-noise");

class Seeded {
  constructor(seed) {
    this.rng = seeded(seed);
    this.noise = new SimplexNoise(this.rng);
  }

  float() {
    return this.rng();
  }

  boolean() {
    return this.rng() > 0.5;
  }

  range(a, b) {
    return this.rng() * (b - a) + a;
  }

  rangeInt(a, b, skip = []) {
    do {
      const candidate = Math.floor(this.rng() * (b - a + 1) + a);
      if (skip.indexOf(candidate) == -1) {
        return candidate;
      }
    } while (1);
  }

  noise1D(x, frequency, amplitude) {
    if (!isFinite(x)) {
      throw new TypeError("x component for noise() must be finite");
    }

    frequency = frequency ?? 1;
    amplitude = amplitude ?? 1;
    return amplitude * this.noise.noise2D(x * frequency, 0);
  }

  noise2D(x, y, frequency, amplitude) {
    if (!isFinite(x)) {
      throw new TypeError("x component for noise() must be finite");
    }
    if (!isFinite(y)) {
      throw new TypeError("y component for noise() must be finite");
    }

    frequency = frequency ?? 1;
    amplitude = amplitude ?? 1;
    return amplitude * this.noise.noise2D(x * frequency, y * frequency);
  }

  noise3D(x, y, z, frequency, amplitude) {
    if (!isFinite(x)) {
      throw new TypeError("x component for noise() must be finite");
    }
    if (!isFinite(y)) {
      throw new TypeError("y component for noise() must be finite");
    }
    if (!isFinite(z)) {
      throw new TypeError("z component for noise() must be finite");
    }

    frequency = frequency ?? 1;
    amplitude = amplitude ?? 1;
    return (
      amplitude *
      noiseGenerator.noise3D(x * frequency, y * frequency, z * frequency)
    );
  }

  noise4D(x, y, z, w, frequency, amplitude) {
    if (!isFinite(x)) {
      throw new TypeError("x component for noise() must be finite");
    }
    if (!isFinite(y)) {
      throw new TypeError("y component for noise() must be finite");
    }
    if (!isFinite(z)) {
      throw new TypeError("z component for noise() must be finite");
    }
    if (!isFinite(w)) {
      throw new TypeError("w component for noise() must be finite");
    }

    frequency = frequency ?? 1;
    amplitude = amplitude ?? 1;
    return (
      amplitude *
      noiseGenerator.noise4D(
        x * frequency,
        y * frequency,
        z * frequency,
        w * frequency
      )
    );
  }
}

module.exports = {
  Seeded,
};
