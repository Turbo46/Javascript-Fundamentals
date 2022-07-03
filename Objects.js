const bulbasaur= {
    number: 1,
    level:5,
    type: "grass",
    secondaryType: "Poison",
    moves: [
        {firstMove:"Vine Whip",types: "Grass"},
        {secondMove:"Razor Leaf",types:"Poison"},
    ],
    levelUp(count = 1){
        this.level += count;
    }
};
const nama="Charmander";
const charmander = {}
const squirtle = {}
const trainer = "Ash";

console.log(nama.toUpperCase());
console.log(nama);
// bulbasaur.moves.secondMove="Sludge Bomb";
bulbasaur.levelUp(3);
console.log(`Bulbasaur has types ${bulbasaur.type} and ${bulbasaur.secondaryType}.`);
console.log(bulbasaur.moves[0].firstMove);
console.log(bulbasaur.level);

const starters = [bulbasaur,charmander,squirtle,trainer,7593,true,null,NaN,Infinity];
console.log(starters.length);