const promiseOne = new Promise(function(resolve, reject){
    //DO AN ASYNC TASK
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 3000)
})
promiseOne.then(function(){
    console.log("Promise 1 fulfilled!");
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true
        if (!error) {
            resolve("no error")
        }else{
            reject("error hai bhai")
        }
    }, 5000)
})

// promiseTwo
// .then(function(response){
//     console.log(response, "\ntask completed successfully :)");
// })
// .catch(function(error){
//     console.log(error, "\ntask failed successfully :(")
// })
// .finally(function(){
//     console.log("task khatam");  
// })

async function consumePromiseTwo(){
    try {
        const response = await promiseTwo
        console.log(response)
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseTwo()

// async function getUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);        
//     } catch (error) {
//         console.log("Error: ", error)
//     }
// }

// getUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json()
})
.then((response) => console.log(response))
.catch((error)=> console.log("Error: ", error))