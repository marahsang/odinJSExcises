const repeatString = function(str, times) {
let result = '';
for(let i = 0; i < times; i++) {
    result += str;
}
    return result;
};
console.log(repeatString('', 10));
// Do not edit below this line
module.exports = repeatString;
