const starters = [
  {
    name: "Bulbasaur",
    level: 5,
  },
  {
    name: "Charmander",
    level: 8,
  },
  {
    name: "Squirtle",
    level: 6,
  },
];
let pokemonLvUpTo6 = function (starters){
  if (starters.level >= 6) {
      return starters.name;
  }
}
console.log(starters.filter(pokemonLvUpTo6));