//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// gets immediately invoked
// IIFEs isolate variables and functions within their own scope,
// preventing naming conflicts and unintended side effects.


//named IIFE
(function connect(){
    console.log(`Database connected`);
})();


( (name) => {
    console.log(`DB connected with ${name}`);
})("tanish")