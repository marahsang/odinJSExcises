const fibonacci = function(n) {
  let arr = [0, 1];

for (let i = 2; i < n + 1; i++) {
  arr.push(arr[i - 2] + arr[i -1])
 } 
 if(n < 0) {
  return "OOPS";
 }  else {
  return arr[n];
 }
}
console.log(fibonacci(-4));

// Do not edit below this line
module.exports = fibonacci;



