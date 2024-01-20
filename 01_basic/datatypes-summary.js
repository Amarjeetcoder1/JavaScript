// Data Types are categorised mainly in two ways:
// 1 Primitive

// Primative Data types are also called CALL BY VALUE, it's means it take the copied valued from the memory not thr original value.
// 7 types: String, Number, Boolean, Null, Undefinrd, BigInt, Symbol

const score = 100;
const scoreValue = 102.0;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// const id = Symbol ('1321')
const anotherId = Symbol ('1321')

console.log(id == anotherId);




//2. Reference (Non primitive)

//Array, Objects, Functions
// All this Non-Primative have typeof: 'Object or fun object'

const heros = ["Shaktiman", "naagraj", "doga"];
// console.log(heros);

let users = {
    "name": "Amy Garcia",
    "email": "amygarcia@example.com",
    "phone": "6543219870"
  }

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof(outsideTemp));


// https://262.ecma-international.org/5.1/#sec-11.4.3

//   Data Types:                            Typeof:                       
                        
// 1. let a = 10         =>                'number'
// 2. let ab = "Amar"    =>                'string'
// 3. const isLoggedIn = false;  =>         'boolean'
// 4. const outsideTemp = null;             'Object'
// 5. const id = Symbol ('1321') =>          'symbol'
// 6. const bigNumber = 131313131231n  =>    'bigInt'

// 7. let arr1 = ["Aman", "Raj", "Rohan",]  => 'Object'
// 8. let Fun1 = function(){               =>   'Object'
// }
// 9. cont Daily = {
//     // Statement                      =>     'Object'
// }


