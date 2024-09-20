class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);        
    }
}

//inheritance
class teacher extends user{
    constructor(username, email, password){
        //goes to its parent class
        super(username)

        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course has been added by ${this.username}`);
    }
}

const chai = new teacher("hitesh", "hitesh@chai.com", "123abc")
chai.addCourse()
chai.logMe()
console.log(chai instanceof teacher);

