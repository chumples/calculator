const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.buttons');
const display = document.querySelector('.display');


keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;

    if (e.target.matches('button')) {
};

    if (!action) {
    console.log('number key!')
};

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
};

if (action === 'decimal') {
    console.log('decimal key!')
};

if (action === 'clear') {
    console.log('clear key!')
};

if (action === 'calculate') {
    console.log('equal key!')
};

if (action === 'delete') {
    console.log('delete key!')
};

});

total = 0;

const add = function add(a, b) {
  total = a + b;
  return total;
};

const subtract = function(a, b) {
  total = a - b;
  return total;
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b, 1);
};

const divide = function(a, b) {
    total = a / b;
    return total;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const operate = function(operator, a, b) {
    a = Number(a);
    b = Number(b);

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