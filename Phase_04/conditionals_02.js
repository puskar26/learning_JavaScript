//Truthy and Falsy value
const userName = null;
if (userName) {
  console.log(`Hello ${userName}`);
} else {
  console.log("Enter valid username");
}

//Falsy Values
// 1. False
// 2. 0
// 3. -0
// 4. BigInt 0n
// 5. ""
// 6. null
// 7. NaN

//Rest all are truthy values
// 1. "0"
// 2. 'false' or "false"
// 3. " " or ' '
// 4. []
// 5. {}
// 6. function(){}

// To check empty array
if (Array.length === 0) {
  console.log("Array is empty");
}

// To check empty object
if (Object.keys(Object).length === 0) {
  console.log("Empty object");
}
