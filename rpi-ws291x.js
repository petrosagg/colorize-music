var ws281x = require('rpi-ws281x-native');

module.exports = function setColor(color) {
  var NUM_LEDS = 60,
  pixelData = new Uint32Array(NUM_LEDS);

  ws281x.init(NUM_LEDS);

  for(var i = 0; i < NUM_LEDS; i++) {
      pixelData[i] = color;
  }
  ws281x.render(pixelData);
}
