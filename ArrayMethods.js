// const bohemianRhapsody = ["Is","this", "the", "real", "life?","is", "this", "just", "fantasy"];
// console.log("type of array",typeof(bohemianRhapsody));
// const lyrics = bohemianRhapsody.toString();
// console.log("lyrics:- ",lyrics);
// const join = bohemianRhapsody.join("@");
// console.log("join:- ",join);
// console.log(bohemianRhapsody);
// bohemianRhapsody.pop();
// console.log(bohemianRhapsody);
// bohemianRhapsody.push("mamaaaa uwu");
// console.log(bohemianRhapsody);
// bohemianRhapsody.shift();
// console.log(bohemianRhapsody);
// bohemianRhapsody.unshift("caught");
// console.log(bohemianRhapsody);

// const arr1= [1,2,3,4,5];
// const arr2= [6,7,8,9,10];
// spread using ...
// const res =[...arr1,...arr2];
// const res = arr1.concat(arr2,arr1);
// console.log(res);
// console.log(arr1.slice(1,3));
// console.log(arr1.splice(1,3,"Gilbert"));
// console.log(arr1);

// let sarr=['a','z','c',"e","d"]
// sarr.sort();
// console.log(sarr)

// const starters = [
//     {name:"orange",price:500},
//     {name:"apple",price:200},
//     {name:"kiwi",price:1000},
//     {name:"papaya",price:20},
//     {name:"banana",price:80},
//     {name:"salak",price:230},
//     {name:"gomu",price:500000}
// ]
// starters.sort(function(a, b) {
//     return parseFloat(a.price) - parseFloat(b.price);
// });
// console.log(starters);
// starters.sort(function(a, b) {
//     return parseFloat(b.price) - parseFloat(a.price);
// });
// console.log(starters);

// let num=[40,100,1,5,25,10];
// const mul3 = elem => console.log(elem*3);
// num.forEach(mul3);
// const mul3 = function (value,index,arr){
//     console.log(index,value+3,arr);
// }
// let arr = [1,2,3,4,5];
// for (let i=0;i<arr.length;i++){
//     console.log("Simple for",arr[i]);
// }
// for(let elem of arr){
//     console.log("from for of",elem);
// }
// let arr = ["adjfhkl","b","c","d","e","z"];
// let arr2 = [...arr].reverse();
// for (let elem of arr2){
//     console.log(elem);
// }
// console.log(arr);
// console.log(arr2);
// let arr = ["a","b","c","d","e","z"];
// for (let index in arr){
//     console.log(index,arr[index]);
// }
// const mapFunc = function (elem){
//     elem.toUpperCase()
// }
// const outputArray = arr.map(mapFunc);
// console.log(outputArray);
// let arr = [2,3,4,5,6,7,8,9,10];
// const mapFunc = function(elem){
//     if (elem%2==0){
//         return "even";
//     }else{
//         return "odd";
//     }
// }
// const outputArray = arr.map(mapFunc);
// console.log(outputArray);
// console.log(mapFunc("a"));
// const filterFunc = function (elem){
//     if(elem%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const filterOutput = arr.filter();
let arr = [12,26,18,22,25,,21,21,22,32,24];
const findFunc = function(elem){
    if(elem>=18){
        return true;
    }
}
//some is like OR
//every is like AND

console.log(arr.findIndex(findFunc));