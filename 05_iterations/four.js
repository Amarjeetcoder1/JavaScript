// for of

// ["", "", ""]
// [{}, {}, {}]

// syntax:-
// for (const iterator of object) {
    
// }
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello World!"

for (const geet of greeting) {
    if (geet == " ") {
       console.log("Space dected");
        break;
    }
   // console.log(`Each char is ${geet}`);
}

// Maps iterator
// Maps:- Unique and no maintain the sequence

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);

//Loop on Maps

for (const [key, value] of map) {
   // console.log(key, ':-',value);
}


//Objects iterator

const myObject = {
    'game1': "BGMI",
    'game2': "CSGO",
    'game3': "Valorant",
    'game4': "COC"
}

// for (const [key, value] of myObject) {
//     console.log((key, ':-', value));
// }