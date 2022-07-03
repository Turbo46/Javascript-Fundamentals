import { sortByLevel } from "./util.js";

const starters = [
  {
    name: "Bulbasaur",
    level: 10,
  },
  {
    name: "Charmander",
    level: 8,
  },
  {
    name: "Squirtle",
    level: 12,
  },
];

// 1. Create a file called util.js
// 2. In util.js, export a function called sortByLevel
// 3. Sort the starters array in the ascending order of their level.
sortByLevel(starters);