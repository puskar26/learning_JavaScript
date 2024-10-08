// IIFE --> Immidiately Invoked Function Expression
// (function definition)(Execution)
(function greet() {
  //named IIFE
  console.log("Hello World!");
})();
// Used ; to explicitly end the syntax
((name) => {
  //Unnamed and parameterized IIFE
  console.log(`Hello ${name}`);
})("Pushkar");
