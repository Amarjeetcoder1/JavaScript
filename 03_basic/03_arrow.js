const user = {
    username: "Amarjeet",
    price: 999,

    welcomeMessage: function() {
    //This key word is use for refers or access the current conntext like username, price within the scope 
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"   // Here we change the context mean's value
// user.welcomeMessage()
// console.log(this);

//++++++++++++++++++++++++++++++++++++++


// function chai () {
//     let username = "Aman"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "Aman"
//     console.log(this.username);
// }
// chai()


// Decleration of function in Two Types:
//1
function Userlogined() {
    const username = "Hitesh"
    // console.log(username)
}
Userlogined()

//2
const NewUserlogined = function () {
    const username = "Aman sinha"
    // console.log(username);
}
NewUserlogined()


//+++++++++++++++ Arrow Function ++++++
// Syntax:-
const chai = () => {
    let username = "Aman"
   // console.log(this);
}
chai()

// First way to declear Arrow Function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// NOTE:- Curly braces ma rap kiya than use return key word

//Second way to declear Arrow Function
const addTwo = (num1, num2) =>  (num1 + num2)

// NOTE:- Parentheses braces ma rap kiya than don't use return key word


console.log(addTwo(2,8));

// Declear an object in Arrow function
//const addTwo = (num1, num2) =>  ({username: "Amarjeet"})


// Simple Example

// 

