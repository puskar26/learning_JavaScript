//Dates
// It is an object
let myDate = new Date();
// console.log(myDate);

//Little Readable date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

// Self Created Date
let createdDate = new Date(2020, 1, 12);
// console.log(createdDate.toDateString());
//Another way
let createdDate2 = new Date("2005-05-09");
// console.log(createdDate2.toDateString());

// Milliseconds
let timeStamp = Date.now();
console.log(timeStamp);
let myTimeStamp = createdDate.getTime();
console.log(myTimeStamp);
