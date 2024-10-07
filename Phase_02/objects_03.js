//Declaration
const sym = Symbol("yo");
const supHeroes = {
  name: "Superman",
  [sym]: "yo_symbol",
  powers: ["flying", "Laser-beam"],
  weakness: "Cryptonite",
};
// console.log(supHeroes);
// console.log(supHeroes["name"]);
// console.log(supHeroes.powers[1]);
// console.log(supHeroes[sym]);

//To prevent changes in object
supHeroes.user = "Puskar";
// Object.freeze(supHeroes);
// supHeroes.user = "Niraula";
// console.log(supHeroes);
supHeroes.work = function () {
  console.log("Save Earth");
};
supHeroes.intro = function (name) {
  console.log(`Hello ${this.name}`);
};
console.log(supHeroes.work);
console.log(supHeroes.intro);
