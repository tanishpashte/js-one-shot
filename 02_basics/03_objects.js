//Singleton ?
//Object.create

//creating a symbol
const mySym = Symbol("key1")

//Object literals
const JsUser = {
    //bydefault the system considers the key as a string
    firstName: "Tanish",
    [mySym]: "mykey1",
    age: 18,
    email: "tanish@google.com",
    isLoggedIn: false
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["firstName"])
// console.log(JsUser[mySym])

//if we want to lock the values
// Object.freeze(JsUser)

//this doesn't give an error, but the changes are not applied
// JsUser['email'] = "tanish@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello JS User! ${this.firstName}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

