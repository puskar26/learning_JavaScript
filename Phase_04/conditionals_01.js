// const temp = 50;
// if (temp > 30) {
//   console.log("It's hot.");
// }

//Switch Case

const a = 1;
switch (a) {
  case 1:
    console.log("Today is Sunday.");
    break;
  case 2:
    console.log("Today is Monday.");
    break;
  case 3:
    console.log("Today is Tuesday.");
    break;
  case 4:
    console.log("Today is Wednesday.");
    break;
  case 5:
    console.log("Today is Thursday.");
    break;
  case 6:
    console.log("Today is Friday.");
    break;
  case 7:
    console.log("Today is Saturday.");
    break;
  default:
    console.log("Invalid");
}

//Nullish coalescing operator
let num;
num = undefined ?? 10;
console.log(num);

//Ternary Operator
// condition ? result1 : result 2
let b = 3;
a < b ? console.log("A is less") : console.log("B is less");
