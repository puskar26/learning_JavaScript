//Map
const num = [1, 2, 3, 4, 5, 6, 7];
const newNums = num.map((val) => val + 10);
// console.log(newNums);

//Chaining
const num2 = num
  .map((val) => val * 10)
  .map((val) => val + 10)
  .filter((val) => val > 40);
console.log(num2);
