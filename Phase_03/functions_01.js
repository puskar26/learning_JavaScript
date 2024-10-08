//Functions
function greet(name) {
  console.log(`Hello ${name}.`);
}
// greet("Pushkar");
// greet(7);
// greet(true);

//Rest and Spread operator
// ... -> Rest Operator
function display(...number) {
  return number;
}
// console.log(display(2, 3000, 40, 5));

//Functions with objects
function displayObject(anyobject) {
  console.log(`Hello ${anyobject.name}. You are ${anyobject.age} years old.`);
}
const info = {
  name: "Pushkar",
  age: 20,
};
displayObject(info);
