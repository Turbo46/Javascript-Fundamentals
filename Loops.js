//for loop
for(let i=1;i<10;i++){
    console.log(i);
}
//while loop
let i = 20;
while(i>0){
    console.log(i);
    i--;
}
//do while
let j=0;
do{
    console.log("this do while",j);
    j++
}while(j<5)

function FizzBuzz(num){
    for (let i = 1; i <= num; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
        }
    }
FizzBuzz(20);

function Pyramid(n){
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
}
Pyramid(5);