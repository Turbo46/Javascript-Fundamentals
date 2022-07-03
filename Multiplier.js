let printMultiplication = (number1) => 
    (number2) => {
        console.log("Multiplication result: ",number2 * number1);
    };

const triple = printMultiplication(3);
triple(7);