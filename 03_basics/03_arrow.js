const user = {
    username: "tanish",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()

//this comes to be empty in NODE
//this returns WINDOW in BROWSER
// console.log(this);

// function chai(){
//     let username = "tanish"

//     //this returns undefined as it can be used in the context of object
//     console.log(this.username);
// }

//arrow functions
const chai = () => {
    let username = "tanish"

    //this still returns undefined
    // console.log(this.username);

    //empty 
    console.log(this);    
}

// chai()

//EXPLICIT RETURN
// const add = (num1, num2) => {
//     return num1 + num2
// } 

//IMPLICIT RETURN
const add = (num1, num2) => num1 + num2

console.log(add(3,4));


