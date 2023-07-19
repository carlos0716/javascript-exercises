const ftoc = function(f) {
  let celsius = (f - 32) * (5/9);
  let roundedResult = celsius.toFixed(1);
  let finalResult = Number(roundedResult);
  return finalResult;
};

const ctof = function(c) {
  let fahrenheit = (c * (9/5) + 32);
  let roundedResult = fahrenheit.toFixed(1);
  let finalResult = Number(roundedResult);
  return finalResult
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
