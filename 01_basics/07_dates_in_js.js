let myDate = new Date()
//date is an object

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.getHours());

//months start from 0 in js
let myCreatedDate = new Date(2023, 0, 11, 23, 42)
console.log(myCreatedDate.toLocaleString());

let anotherDate = new Date("11-13-2024")
console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); //returns the current time in milliseconds
console.log(myCreatedDate.getTime()); //returns the dates time in milliseconds


