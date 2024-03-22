//data types are mainly categorized into : Primitive and Non-primitive

//Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// JS is a dynamically typed language: we don't have to specify the data type of the variable

const id = Symbol('1123')
const anotherId = Symbol('1123')
//here id and anotherId are not same
console.log(id == anotherId);

const bigNumber = 3682733469183417982312343238479 
console.log(bigNumber); //gets displayed in scientific notation
console.log(typeof bigNumber);

const bigNumber2 = 3682733469183417982312343238479n
console.log(bigNumber2); //displays the number as it is
console.log(typeof bigNumber2);

//Reference (Non primitive)
// Array, Objects, Functions

const heroes = ["shaktimaan", "naagraj", "doga"];

let myObj = {
    name: "tanish",
    age: 19,
}

console.log(typeof heroes);
console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello Tanish");
}

console.log(typeof myFunction);

//------------------------------------------------------------------------
//Stack -> primitive (we get a copy)
//Heap -> Non-primitive (we get a reference to the original value)

// The variable is stored in the stack, and its value is stored in the heap, and the variable stores the reference to the value in the heap

