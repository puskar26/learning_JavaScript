//Declaration
const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
// console.log(myArray[2]);
const myHeroes = ["Captain America", "Iron-Man", "Hulk", "Thor"];
// console.log(myHeroes);
const arr1 = new Array(1, 2, 3, 20, 54);
// console.log(arr1);

//Properties and Methods
// console.log(myArray.length); //To find length

//Array to string
//Array.join('What to join the elements with')
// console.log(myHeroes.join("--"));

//Slice --> Returns Shallow copy
//Array.slice(start_index , end_index)
// console.log(myHeroes.slice(1));
// console.log(myHeroes.slice(1, 2));
// console.log(myHeroes.slice(-2));
// console.log(myHeroes.slice(-2, 1));
// console.log(myHeroes.slice(2, -1));
// console.log(myHeroes.slice(-2, -1));

//Splice -->Returns deep Copy
console.log(arr1.splice(2));
console.log(arr1);

//To find index of element
// console.log(myArray.indexOf(4));
// console.log(myHeroes.indexOf("Hulk"));

//To add elements to last of array
myArray.push(8, 10, 12);
// console.log(myArray);
myArray.pop(); //Removes last element of Array
// console.log(myArray);

//unshift --> Adds a element to 0th index
myHeroes.unshift("Deadpool");
// console.log(myHeroes);

//shift--> Removes first element
myHeroes.shift();
// console.log(myHeroes);

//includes --> Checks if something is present in an array
// console.log(myHeroes.includes("Deadpool"));
// console.log(myHeroes.includes("Hulk"));
