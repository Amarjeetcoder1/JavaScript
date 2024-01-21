//  Array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Tonny Stark","Iron man","Saktiman"]

const myArr2 = new Array(1,2,3,4,5,6)

console.log(myArr[3]);

//Array methods

myArr.push(6)  //To add new value in the array at the end of array
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //Add new value my shift rest value
// myArr.shift() // Remove first value of array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myHeros.join() //The join() method returns an array as a string.


// console.log(myArr);
// console.log(newArr); 

// +++++ slice and splice ++++

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C", myArr);

// Notes: Slice : not change the original array
//        Splice : It change the orignail array



