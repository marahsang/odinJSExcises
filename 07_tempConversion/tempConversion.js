function convertToCelsius(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fToCel.toFixed(1);
    return Number(message);
} 

function convertToFahrenheit(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cToFahr.toFixed(1);
    return Number(message);
}
console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
