const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman" ]
//takes dc heroes array as a single element
//and creates array within an array 

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) ;

// instead use CONCAT to merge arrays
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

//PREFERRED METHOD:  SPREAD OPERATOR
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//returns array with all subelements as separate elements 
//parameter passed is the depth of how much nesting we want to analyse
const real_another_array = another_array. flat(Infinity)
console. log(real_another_array);

//CHECK IF ARRAY
console.log(Array.isArray("tanish"));

//CONVERT TO ARRAY
console.log(Array.from("tanish"));

//special case
console.log(Array.from({name: "tanish"}))
//returns am empty array, since this is not able to convert successfully
//we need to mention for what we need to make the array (keys, values)

let score1 = 100
let score2 = 200
let score3 = 300
console. log(Array. of (score1, score2, score3));