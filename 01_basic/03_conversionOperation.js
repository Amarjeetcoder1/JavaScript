// let score = "39abc";  // print NaN on Console 
// let score = null;     // print 0 on Console
// let score = undefined; // print NaN on Console
// let score = true; // print 1 on Console
let score = "Amarjeet";
console.log(typeof(score));

let valueInNumber = Number(score) //type conversion form string to interger
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33qbc" => NaN
//  true => 1; false => 0;

let isLoggedIn = 1 

let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof(bolleanIsLoggedIn));
console.log(bolleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false
// "Aman" => true

let someNumber = 55

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

// 55 => typeof string
// 55 => 55 jo kii ek strung value hai 