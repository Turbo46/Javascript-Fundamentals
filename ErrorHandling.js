function normalize(string){
    try{
        return string.trim().toLowerCase().replace(".","");
    }catch(error){
        if (error.message === "string.trim is not a function"){
            console.log("Please pass a string");
        }else{
            console.log("No idea");
        }
    }
}
const raw= "I could do this ALL DAY.";
const normalized = normalize(53784);
console.log(normalized);