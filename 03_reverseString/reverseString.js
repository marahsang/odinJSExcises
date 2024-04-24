const reverseString = function(str) {
    const strRev = str.split('').reverse().join('');
    return strRev;
    };
    console.log(reverseString('hello there'));
// Do not edit below this line
module.exports = reverseString;
