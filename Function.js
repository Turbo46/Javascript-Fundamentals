// // function logHello(){
// //     console.log("Hello!!!")
// // }
// // logHello();

// // let a=10
// // let b=20
// // console.log(a,b);
// let anyFunc= () =>{
//     console.log("its another way of function")
// }
// anyFunc();

const exp = 3;
let mySal;
if(exp > 5){
    mySal = function(){
        console.log("give Srv 500 rs");
    }
}else{
    mySal = function(){
        console.log("give Srv 5000 rs");
    }
}

mySal();