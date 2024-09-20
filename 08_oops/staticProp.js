class user{
    constructor(username){
        this.username = username
    }

    //this function belongs to the class itself and not for its instances
    static logMe(){
        console.log(`Username is: ${this.username}`);        
    }
}

class teacher extends user{
    constructor(username, email){
        //goes to its parent class
        super(username)

        this.email = email
    }
}

const userOne = new user("tanish")
const chai = new teacher("hitesh", "hitesh@chai.com")

//not accessible to these
// console.log(userOne.logMe());
// console.log(chai.logMe());
