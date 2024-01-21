let myDate = new Date() //Here we are creating one objects
console.log(myDate.toDateString());  //Sun Jan 21 2024
console.log(myDate.toISOString());  //2024-01-21T08:25:39.732Z
console.log(myDate.toJSON()); //same as above
console.log(myDate.toLocaleDateString()); // 1/21/2024
console.log(myDate.toLocaleString()); //  1/21/2024, 8:28:15 AM
console.log(typeof(myDate));  //Object 


// let newCreatedDate = new Date()
// let newCreatedDate = new Date(2024, 0, 21)
//let newCreatedDate = new Date(2024, 0, 21, 23, 5, 3)
// let newCreatedDate = new Date("2024-01-21")
let newCreatedDate = new Date("01-21-2024")

// console.log(newCreatedDate.toLocaleString());
// console.log(newCreatedDate.toDateString());

let myTimeStamp =  Date.now()

// console.log(myTimeStamp);
// console.log(newCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getTime());

// console.log(`${newDate.getDay()} and the Time is ${newDate.getTime()}` );

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'Asia/Kolkata'
})
console.log(newDate);