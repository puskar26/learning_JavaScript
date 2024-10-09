// Higher order loops -- Array specific loops
// For of loop
for (const iterator of object) {
  //body
}
// const arr = [1, 2, 3, 4, 5];
// for (const val of arr) {
//   console.log(val);
// }
const arr = "Pushkar";
for (const word of arr) {
  console.log(word);
}

// for of in map
const newMap = new Map();
newMap.set("name", "Pushkar");
newMap.set("age", "20");
newMap.set("email", "p@gmail.com");
// for (const [key, value] of newMap) {
//   console.log(`${key} : ${value}`);
// }

const newObject = {
  name: "Pushkar",
  age: 20,
  email: "p@gmail.com",
};
// for (const key of newObject) {
//   console.log(`${key}`);
// } Doesnt work
