//Arrow Functions and this keyword

// const add = (num1, num2) => {
//   return num1 + num2;
// };
// const add = (num1, num2) => (num1 + num2);
const add = (num1, num2) => ({ username: "Puskar" });

console.log(add(3, 4));
