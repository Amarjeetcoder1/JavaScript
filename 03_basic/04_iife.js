// Immediately Invoked Function Expressionsb ( )
//Syntax:-

// (function(){
//     //...
// })();




(function chai() {
    // named IIFE
    console.log("DB CONNECTED");
}) ();

// chai()

// () => The first one is use for Function Defination
// () => The second one is use for execution

(() => {
    // Simple IIFE
    console.log("DB TWO CONNECTED");
})();

const user = ( (name) => (
    console.log(`DB THREE CONNECTED ${name}`)
)) ("Amarjeet")



