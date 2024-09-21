class user{
    constructor(email, password){
        this.email = email
    }

    get password(){
        // console.log("You don't have access to this");
        return "You don't have access to the password"
        
    }

    set password(password){
        this.password = password
    }
}

const tanish = new user("tanish@meta.ai", "rtyft")
console.log(tanish.password);
