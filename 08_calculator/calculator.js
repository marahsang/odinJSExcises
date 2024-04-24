const add = function(a, b) {
  return a + b;
};
console.log(add(0, 0));
const subtract = function(a, b) {
  return a - b;
};
console.log(subtract(2, 5));

const sum = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}; 
console.log(sum(10));

const multiply = function(arr) {
  let multiply = 1;
for(let i = 0; i < arr.length; i++) {
  multiply *= arr[i];
  }
return multiply;
}
console.log(multiply([2, 4]));

const power = function(a, b) {
  return Math.pow(a, b);
};
console.log(power(3, 4));

const factorial = function(num) {
  let factorialNum = 1;
  for(let i = 1; i <= num; i++) {
    factorialNum *= i;
  }
  return factorialNum
}
console.log(factorial(3));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};