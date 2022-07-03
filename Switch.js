function FizzBuzz(num){
for (var x = 0; x <= num; x++) {
    switch (true) {
      case (x % 5 === 0 && x % 3 === 0):
          console.log("FizzBuzz");
          break;
      case x % 3 === 0:
          console.log("Fizz");
          break;
      case x % 5 === 0:
          console.log("Buzz");
          break;
      default:
          console.log(x);
          break;
    }
  }
}
FizzBuzz(20);

function days(day){
switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
    day = "Thursday";
      break;
    case 5:
    day = "Friday";
      break;
    case 6:
    day = "Saturday";
    case 7:
    day = "Sunday";
    break;
    default:
    day = "Not Valid Number";
    break;
  }
  console.log(day);
}
days(1);

let n =78;
switch(n){
    case 5:
    case 15:
    case 78:
        console.log("looks like 5");
        break;
    case 3:
    case 9:
    case 18:
        console.log("looks like 3");
        break;
    case 2:
    case 8:
    case 12:
        console.log("looks like 2");
    default:
        console.log("i don't know");
}