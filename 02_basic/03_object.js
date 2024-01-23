// Singleton
// object.create


// Objects literals

const mySym = Symbol("Key1")


//Creating Objects
const JsUser = {
    name: "Amarjeet",
    "fullName" : "Amarjeet Ghosh",
    [mySym]: "mykey1",
    age: 18,
    location: "Bhubaneswar",
    email: "amarjeetghosh50@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


//Accessing Object Properties
console.log(JsUser.email);
console.log(JsUser["email"]);  // Always use this to acces the function
console.log(JsUser["age"]);
console.log(JsUser["fullName"]);
console.log(typeof(JsUser[mySym]));
console.log(JsUser[mySym]);

//To Change the key value
JsUser.email = "amarjeetghosh19@gmail.com"
// console.log(JsUser["email"]);

//To lock the Key values
// Object.freeze(JsUser)
JsUser.email = "shivamghosh19@gmail.com"
// console.log(JsUser);


//++++++++++++Function++++++++++++


JsUser.greeting = function() {
    console.log("Hello JsUser");
}

//To reference same object 'This' is always use
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());