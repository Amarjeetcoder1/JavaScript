// let score = "39abc";  // print NaN on Console 
// let score = null;     // print 0 on Console
// let score = undefined; // print NaN on Console
// let score = true; // print 1 on Console

let score = "Amarjeet";
// console.log(typeof(score));

let valueInNumber = Number(score) //type conversion form string to interger
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//***** NOTES *********/
// "33" => 33
// "33qbc" => NaN
//  true => 1; false => 0;

let isLoggedIn = 1 

let bolleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof(bolleanIsLoggedIn));
// console.log(bolleanIsLoggedIn);

//***** NOTES *********/
// 1 => true; 0 => false;
// "" => false
// "Aman" => true

let someNumber = 55

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber));

//***** NOTES *********/
// 55 => typeof string
// 55 => 55 jo kii ek strung value hai 

// ***********************  Operations  **************************//

let value = 3
let negValue = -value

// console.log(negValue);

let str1 = "Hello"
let str2 = " Amarjeet"

let str3 = str1 + str2
// console.log(str3);

// console.log( "1" + 2);
// console.log( 1 + "2");
// console.log( "1" + 2 + 2);
// console.log( 1 + 2 + "2" );

let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter);
