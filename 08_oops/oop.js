//OBJECT LITERAL: literally an object {}
const user = {
    username: "tanish",
    loginCount: 12,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log(`${this.username} has logged ${this.loginCount} times and is currently ${this.isLoggedIn == true? "logged in": "not logged in"}`);
        console.log(this);
        
    }
}

console.log(user.getUserDetails());

//empty
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

