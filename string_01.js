//String Methods
// Declaration
const myName = "Pushkar";
const name = new String("Pushkar");
console.log(myName);

// Length of string
console.log(myName.length);

// String to uppercase
console.log(myName.toUpperCase());

// Make a substring
const name3 = "PushkarNiraula";
console.log(name3.substring(0, 7));

//Slice a part of a string
// string.slice(StartIndex , EndIndex)
const name4 = "PushkarNiraula";
console.log(name4.slice(7));

//Remove Unnecessary whitespaces
const name2 = "  Pushkar  ";
console.log(name2.trim());

// Replace something
// string.replace(What to replace, What to replace it with)
const url = "www.pushkarniraula.com.np/pushkar%20niraula";
console.log(url.replace("%20", "-"));

// To find whether a string includes something or not
console.log(name2.includes("Pushkar"));

//Split a string
// string,split(separator, limit)
const gameName = "Pushkar-02-Niraula";
console.log(gameName.split("-"));
