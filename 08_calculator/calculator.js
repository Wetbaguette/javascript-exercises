const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let arrSum = 0;
  arr.forEach(num => {
    arrSum += num;
  });
  return arrSum;
};

const multiply = function(arr) {
  let multiplyArr = 1;
  arr.forEach(num => {
    multiplyArr *= num;
    });
    return multiplyArr;
};

const power = function(a, b) {
	let powerArr = 1;
  for (let i = 1; i <= b; i++) {
    powerArr *= a;
  }
  return powerArr;
};

const factorial = function(num) {
  fact = 1;
  for (let i = 1; i <= num;  i++) {
    fact *= i;
  }
	return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
