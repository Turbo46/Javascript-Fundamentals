let sortByLevel = (a,b)=>{
    return a.level-b.level
};

export const starter = [
    {
    name:"Bulbassur",
    level: 10
},
    {
     name:"Charmender",
    level: 8
},
    {
     name:"Bulbassur",
    level: 12
},
]

export let starSort = starter.sort(sortByLevel);

const fruits = {
    orange:{price:100,quantity:2},
    apple:{price:100,quantity:5},
    kiwi:{price:500,quantity:10},
    pineaplle:{price:300,quantity:1},
    papaya:{price:50,quantity:1}

}

export const callFruit = function(fruit){
    let totalPrice = 0
    if(fruit === "orange"){
        const orangeFunc = function(glass){
            if(glass>0){
                totalPrice = fruits.orange.price*fruits.orange.quantity*glass
                console.log(`the price of ${glass} ${fruit} juice will be ${totalPrice}`);
            }else{
                console.log("glass cannot minus");
            }
            
        }
        return orangeFunc;
    }
    else if(fruit === "apple"){
        const appleFunc = function(glass){
            if(glass>0){
                totalPrice = fruits.apple.price*fruits.apple.quantity*glass
                console.log(`the price of ${glass} ${fruit} juice will be ${totalPrice}`);
            }else{
                console.log("glass cannot minus");
            }
        }
        return appleFunc;
    }
    else if(fruit === "kiwi"){
        const kiwiFunc = function(glass){
            if(glass>0){
                totalPrice = fruits.kiwi.price*fruits.kiwi.quantity*glass
                console.log(`the price of ${glass} ${fruit} juice will be ${totalPrice}`);
            }else{
                console.log("glass cannot minus");
            }
        }
        return kiwiFunc;
    }
    else if(fruit === "pineaplle"){
        const pineaplleFunc = function(glass){
            if(glass>0){
                totalPrice = fruits.pineaplle.price*fruits.pineaplle.quantity*glass
                console.log(`the price of ${glass} ${fruit} juice will be ${totalPrice}`);
            }else{
                console.log("glass cannot minus");
            }
        }
        return pineaplleFunc;
    }
    else if(fruit === "papaya"){
        const papayaFunc = function(glass){
            if(glass>0){
                totalPrice = fruits.papaya.price*fruits.papaya.quantity*glass
                console.log(`the price of ${glass} ${fruit} juice will be ${totalPrice}`);
            }else{
                console.log("glass cannot minus");
            }
        }
        return papayaFunc;
    }
    else{
        const errorFucn = function(glass){
            console.log("Not in a list");
        }
        return errorFucn;
    }
   
    }

