//Absolute value
const num = -5;
console.log(Math.abs(num));

//Round off
const num1 = 3.54;
const num2 = 3.44;
console.log(Math.round(num1));
console.log(Math.ceil(num2)); //Top Value
console.log(Math.floor(num1)); // lower value

//Maximun and Minimum value
const num3 = [12, 34, 56, 63, 47, 74];
console.log(Math.max(...num3));
console.log(Math.min(...num3));

//Generating random numbers
console.log(Math.random());
// Random numbers between two values
const max = 50;
const min = 10;
console.log(Math.floor(Math.random() * (max - min) + 1) + min);
