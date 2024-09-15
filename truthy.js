// FALSY VALUES
// false, 0, -0, BigInt On, "", null, undefined, NaN

//TRUTHY VALUES
// "0", 'false', " ", [], {}, function(){}

let arr = [1]
//CHECK IF AN ARRAY IS EMPTY
if(arr.length === 0) console.log("Empty array");

let obj = {}
//CHECK IF AN OBJECT IS EMPTY
if(Object.keys(obj).length === 0) console.log("Object is empty");

// Nullish Coalescing Operator ( ?? ): null undefined
let val1;
// val1 = 5 ?? 10
val1 = undefined ?? 10

console.log(val1);


// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")

// for (let i = 1; i < 10; i++) {
//     const element = i;
//     if(element == 7) console.log("Thala for a reason");
//     else console.log(element);
    
    
    
// }