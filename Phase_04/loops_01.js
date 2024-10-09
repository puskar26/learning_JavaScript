//Loops
// for (let i = 0; i < 10; i++) {
//  console.log(i, "\n");
// }
const myArray = ["Hulk", "Thor", "Iron-man"];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

//break and continue
//break --> Skips the whole loop after it.
//continue --> Skips the current iteration

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    console.log("3 Detected, I can't allow next condition.");
    break;
  }
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    console.log("3 Detected but I'll let you slide this time");
    continue;
  }
  console.log(i);
}

// while -- do while
while (condition) {
  //Loop body
}

do {
  //body
} while (condition);
