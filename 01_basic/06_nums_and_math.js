const score = 500
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   // Mainly use in ecommerce website


const otherNum = 123.8966
console.log(otherNum.toPrecision(4));

const hundreads = 10000000
console.log(hundreads.toLocaleString('en-IN')); // Very imp

const date = new Date(Date.UTC(2024, 2, 21, 8, 0, 0))
console.log(date.toLocaleString());


// +++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //Only convert Neagative to Positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.9));
console.log(Math.min(4, 6, 4, 9));
console.log(Math.max(4, 6, 8, 9));

// +++++++++++++++++  NOTES  +++++++++++++++++++
// Math.abs(-7) => convert negative number to positive
// Math.round(4.8) => Take the round off value like 5
// Math.ceil(4.5)  => take the ceil value to 5
// Math.floor(4.5)  => take the floor value to 4
// Math.min(4,7,8)  => Take the min value is 4
// Math.max(4,7,8)  => Take the max value is 8

console.log(Math.random()); //value range B/W 0 to 1
console.log((Math.random()*10) + 1);

// +++++++++++++++++  NOTES  +++++++++++++++++++
// Math.random() Take the random number from 0 to 1
// Math.random() * 10 => shift one value to left
// (Math.random()*10) + 1) =. Min value should b 1 in left side before point


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);