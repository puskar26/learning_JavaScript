//Filter
const nums = [0, -2, 3, 4, -4, 56, 43, -53];
const newNums = nums.filter((item) => item > 0);
// console.log(newNums);

//If used curly braces , we have to return the condition
// const newNums = nums.filter((item) =>{
//   return item > 0
// });

// Filter Real world type example
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//Science genre books
const filter1 = books.filter((book) => book.genre === "Science");
// console.log(filter1);

//Books published after 2000
const filter2 = books.filter((book) => book.publish > 2000);
// console.log(filter2);

//Books published after 1995 and history
const filter3 = books.filter(
  (book) => book.publish > 1995 && book.genre === "History"
);
console.log(filter3);
