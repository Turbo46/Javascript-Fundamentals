// const yogieWakeUp = new Promise((fulfill, reject) => {
//     const random = Math.random();//a number betwen 0 and 1
//     if(random < 0.8){
//         fulfill("dude i am up");
//     }else{
//         reject("Sorry buddy");
//     }
// });

// yogieWakeUp
// .then((msg) => {
//     console.log("Message recieved: ",msg);
//     console.log("thank goodness ");
// })
// .catch((errormsg) => {
//     console.log("Message recieved: ",errormsg);
//     console.log("i knew it");
// });
// const wakeUp = new Promise((fulfill) => {
//     return fulfill("Success");
// });

// wakeUp
// .then((msg) => {
//     setTimeout(()=>{
//         console.log(msg);
//     },5000);
// });
const yogieWakeUp = new Promise((fulfill, reject) => {
    const random = Math.random();//a number betwen 0 and 1
    if(random < 0.8){
        fulfill("dude i am up");
    }else{
        reject("Sorry buddy");
    }
});

async function respondToYogie(){
try{ 
const messageFromYogie = await yogieWakeUp;
console.log(messageFromYogie);
}catch(err){
    console.log(err);
};
}
await respondToYogie();
console.log("Done, We can start our trip");