const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
	let result = a - b;
  return result;
};

const sum = function(array) {
	let result = 0;
  array.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(a, b) {
	let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
	let result = 1;
  for (let i = 1; i < a+1; i++) {
    result *= i;
  }
  return result;
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
