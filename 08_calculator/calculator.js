const add = function(a ,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = function(numbers) {
  let result = numbers[0];
  for (var i=1; i < numbers.length; i++) {
    result = result * numbers[i];
  }
  return result;

};

const power = function() {
	
};

const factorial = function() {
	
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
