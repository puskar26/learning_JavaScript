// Initialization
const num = 5;
console.log(num);

//Another Method
const num1 = new Number(400);
console.log(num1);

//Number to String
const str = num1.toString();
console.log(str);
console.log(str.length);

//Fixed Numbers
console.log(num.toFixed(2));

//Roound off
const num2 = 1234.501;
console.log(num2.toPrecision(4));

//Separate by Commas
const num3 = 10003456;
console.log(num3.toLocaleString("en-IN"));
