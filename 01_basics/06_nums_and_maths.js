const score = 400
// console.log(score);

const balance = new Number(score)
// console.log(balance);

// console.log(balance.toString())

const num = 128.2792334

// console.log(num.toPrecision(5));
// console.log(num.toFixed(2));

const hundreds = 100000000

//displays commas according to US notation
// console.log(hundreds.toLocaleString());

//displays commas according to Indian notation
console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);


console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

console.log(Math.random());
//returns a random number between 0 and 1

//-----------------------------------
//generic formula
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min);

//if you want the lower limit to be included, then remove the +1 in the formula
