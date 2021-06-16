total = 0;

const add = function(a, b) {
  total = a + b;
  return total;
};

const subtract = function(a, b) {
  total = a - b;
  return total;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function factorialize(a) {
  if(a === 0)
    return 1;
  else {
    return (a * factorialize(a - 1));
  }
};