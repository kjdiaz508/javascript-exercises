const convertToCelsius = function(temp) {
  let c = (5/9) * (temp - 32);
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function(c) {
  let f = (9/5) * c + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
