//Destructuring Objects
const id = {
  name: "Pushkar Niraula",
  age: 20,
  email: "p@gmail.com",
};
console.log(id.email);
const { email: e } = id;
// console.log(email);
console.log(e);
