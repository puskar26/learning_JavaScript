//Iterating Objects
//Forin loop
const newObject = {
  name: "JavaScript",
  type: "Programming Language",
  use: "Web-Dev",
};
for (const key in newObject) {
  console.log(`${key}`);
}
// for values
for (const key in newObject) {
  console.log(`${key} : ${newObject[key]}`);
}
