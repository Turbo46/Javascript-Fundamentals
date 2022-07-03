export function runMyFunction(fn){
         fn(3);
 }

// const printHello = function(){
//     console.log("Hello");
// };

// const printNumberSquare = function(number){
//     console.log(number**2);
// }

// // runMyFunction(printNumberSquare);

// const printPow = function (pow){ // creating a function thats take power
//     const outputFunc = function (base) // this is a function that take base and raise base to power and console. log it
//     {
//         console.log(base**pow);
//     }
//     return outputFunc;  
// }

// export const power2 = printPow(2);

// power2(2);
// power2(3);
// power2(4);

let printMultiplication = (number1) => 
    (number2) => {
        console.log("Multiplication result: ",number2 * number1);
    };

export const triple = printMultiplication(3);
triple(7);