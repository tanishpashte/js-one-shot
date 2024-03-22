const name = "Tanish"
const repoCount = 10

// console.log(name + repoCount);
//this method is outdated

console.log(`hello my name is ${name} and the repo count is ${repoCount}`)

//another method to declare a string
const newName = new String("Tanish Pashte");
//you get string methods to use with it 
//also then the string can be treated as an array

console.log(newName.__proto__);

console.log(newName.length);

console.log(newName.charAt(2));

console.log(newName.indexOf('a'));
//returns the index of the first occurence

console.log(newName.trim());