// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const arr3 = arr1;
// arr3.push(6);
// console.log("this is arr3 ",arr3);
// console.log("this is arr1 ",arr1);

// let str1 = "abc";
// let str2 = str1;
// str2 += "def";
// console.log("str1 ",str1);
// console.log("str2 ",str2);

// const emp = {name:"abc",destination:"SE"};
// const intern = {...emp,destination:"intern",sal:200};
// const sse = {...emp,sal:50000};
// console.log(emp);
// console.log(intern);
// console.log(sse);

const myConsoleLog = (a,b,...newParam) => {
    console.log(a);
    console.log(b);
    for (let i of newParam){
        console.log(i);
    }
}
myConsoleLog(1,2,3,4,5,6);