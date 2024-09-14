//this is a singleton object
const tinderUser = new Object() 

//this is not
// const tinderUser = {}

tinderUser.id = "28dh2"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "tanish",
        lastname: "pashte"
    }
}

//that question mark check if there exists a property named fullname
// console.log(regularUser.fullname?.firstname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = { obj1, obj2 } 
//same problem like arrays, occurs above, object in objec

//the first parameter is our target, and the rest are sources
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

//if we don't include the {}, obj1 will be considered the target
//and all the remaining objects will be added to obj1

//PREFERRED OPERATOR
//SPREAD OPERATOR !!
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

// console.log(tinderUser);

//returns arrays
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//check if an object has a particular property
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//--------------------------------------------------------
//Object Destructuring

const course = {
    courseName: "python with tanish",
    price: 999,
    instructorName: "tanish"
}

//destructuring
const {instructorName: teacher} = course
console.log(teacher);

