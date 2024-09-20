let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.tanish = function(){
    console.log(`Tanish is present in all objects`);  
}
Array.prototype.heyTanish = function(){
    console.log(`Tanish is present in all arrays`);  
}

heroPower.tanish()
myHeros.tanish()
myHeros.heyTanish()
// heroPower.heyTanish()

//INHERITANCE
const user = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "tanish   "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()
"chai ".truelength()
"tanish     ".truelength()