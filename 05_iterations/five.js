const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//for of loop will not work on object

for (const key in myObject) {

        //console.log(`${key} sortcut is for ${myObject[key]}`);
    
}

const programing = ['js', 'py', 'rb', 'js', 'cpp']

for (const key in programing) {
    //console.log(programing[key]);
}


const language = ['js', 'py', 'rb', 'js', 'cpp']
for (const key of language) {
    //console.log(key);
}

// Maps in for in
// const map = new Map()
// map.set('IN', "India")
// map.set('USA',"United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//    console.log(key);
// }


// ++++++++++++++++NOTES+++++++++++++++

// 1."For of" loop use in
//     Use in Map
//     Use in Array
//     But not use for Objects

// 2."For in" loop
//     Use in Object
//     Can also Use in Array
//     But not use for Maps