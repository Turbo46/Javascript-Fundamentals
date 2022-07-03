// let str = "str";
// let str1 = "hana";
// console.log(str);
// console.log(str1);

// let nama = "John";
// let message =`heloo ${nama}`;
// console.log(message);  

//String operation
//imutable cant be changed

const hero = "The Falcon and the winter soldier";
console.log(hero.toLocaleLowerCase());
// console.log(hero.concat("and the winter soldier"));
console.log(hero.length);
console.log(hero);
console.log(hero.split(" "));

const words = hero.split(" ");
console.log(words.join("_"))

console.log(hero.endsWith("he"));

console.log(hero.includes("and"));

console.log(hero.repeat(3));

function pyramid(levels){
    for (let i = levels; i>0; i--) {
        console.log("*".repeat(i));
    }
}
pyramid(5);

console.log(hero.slice(4,10));
console.log(hero.trim());

function nama1(nama){
console.log(nama.replace("Hello my name is","Hi"));
}
nama1("Hello my name is Gilbert");