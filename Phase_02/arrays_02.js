//Joining two arrays
//Concatenation --> Returns new Array
const myHeroes1 = ["Hulk", "THor"];
const myHeroes2 = ["Deadpool", "Wolverine"];
// console.log(myHeroes1.concat(myHeroes2));

//Spread Operator--> ...
const myNewHeroes = [...myHeroes1, ...myHeroes2];
// console.log(myNewHeroes);

// Nd array to 1d array
const newArray = [1, 2, [3, 4, 5], 6, [7, [8, 9]], 10];
// console.log(newArray);
const flatArray = newArray.flat(Infinity);
// console.log(flatArray);

//Convert Values to array
// console.log(Array.from("Pushkar"));
// console.log(Array.from("123534"));

//Convert multiple
const score1 = 432;
const score2 = 3984;
const score3 = 784;
console.log(Array.of(score1, score2, score3));
