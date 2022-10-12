const ftoc = function(fahrenheit) {
  let fToC = (fahrenheit - 32) * (5 / 9);
  let fToCRounded = Math.round(fToC * 10) / 10;
  return fToCRounded;
};

const ctof = function(celsius) {
  let cToF = (celsius * (9 / 5)) + 32;
  let cToFRounded = Math.round(cToF * 10) / 10;
  return cToFRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
