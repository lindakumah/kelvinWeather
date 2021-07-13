const kelvin = 293;

// Converting Kelvin to Celcius
const celsius = kelvin - 273;

//Calculating Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Floor value of Fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degress Fahrenheit`);

let newton = celsius*(33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degress Newton.`);