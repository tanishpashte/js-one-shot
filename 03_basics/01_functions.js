// here it is parameters
function addTwoNum(num1, num2){
    return num1+num2
}

//here arguments
sum = addTwoNum(3, 5)
// console.log(sum);

function loginUserMessage(username = "User"){
    // if(!username){
    //     console.log("Please enter a valid username")
    //     return 
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tanish"))
console.log(loginUserMessage())

// REST OPERATOR
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 300, 2000))