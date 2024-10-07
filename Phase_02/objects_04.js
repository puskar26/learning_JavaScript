//Singleton Object
const obj1 = new Object();
// console.log(obj1);

// Concatenate objects
const obj2 = { 1: "a", 2: "b" };
const obj3 = { 3: "c", 4: "d" };
const obj4 = { ...obj2, ...obj3 };
console.log("A ", obj4);
const obj5 = Object.assign({}, obj2, obj3);
console.log("B ", obj5);
