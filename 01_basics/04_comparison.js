// == (equality check) and >=, <= (comparisons) work differently
//comparisons convert null to a number, treating it as 0

//strict check: checks if the data type and the value both are same
console.log(2 == "2"); //true
console.log(2 === "2"); //false