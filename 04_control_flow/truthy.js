const userEmail = []

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
}

// falsy value 

// false, 0, -0, BigInt, 0n, "", undeifend, NaN

// Truthy Vales
// true , "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}




//nullish coalescing operator (??): null 
//Mainly use to handle the errors

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? "Null or Undefined"
// val1 = "" ?? "Null or Undefined"
// val1 = 25 ?? "Null or Undefined"
val1 = null ?? 10 ?? 13


console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"): console.log("More than 80");

