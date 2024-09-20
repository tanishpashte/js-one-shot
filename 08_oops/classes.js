class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}123`
    }

    capitalizeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new user("tanish", "tanish@meta.ai", "qwerty")
console.log(userOne.encryptPassword());
console.log(userOne.capitalizeUsername());

//behind the scene
function createUser(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

createUser.prototype.encryptPassword = function(){
    return `${this.password}123`
}

createUser.prototype.capitalizeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new user("hitesh", "hitesh@chai.com", "jsoneshot")
console.log(userTwo.encryptPassword());
console.log(userTwo.capitalizeUsername());