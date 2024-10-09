// for each loop
// array.forEach(element => {
// body
// });

const arr = ["JavaScript", "c++", "Python", "Ruby", "Swift"];
//First Method
// arr.forEach(function (item) {
//   console.log(item);
// });

//Second Method
// arr.forEach((item) => {
//   console.log(item);
// });

//Third Method
function printArray(item) {
  console.log(item);
}
// arr.forEach(printArray);

//Array of objects
const arr1 = [
  {
    name: "JavaScript",
    fileName: "js",
  },
  {
    name: "Python",
    fileName: "py",
  },
  {
    name: "c++",
    fileName: "cpp",
  },
];

arr1.forEach((item) => {
  console.log(`${item.name} : ${item.fileName}`);
});
