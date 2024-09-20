function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    //"this" belongs to fn createUser which is passed to setUsername
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const me = new createUser("tanish", "tanish@meta.ai", "123")
console.log(me);
