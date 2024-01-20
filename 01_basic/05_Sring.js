const name = "Aman"
const repoCount = 50

// console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Amarjeet-hc-com')


console.log(gameName[0]);
console.log(gameName.__proto__);

//"Method in String" can be access by ".FunctionMethod"

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newGameName = gameName.substring(0, 4)
console.log(newGameName);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);


const newName = "      shivam     "
console.log(newName);
console.log(newName.trim());

const url = "https://google.com/amarjeet%20ghosh"

console.log(url.replace('%20', '-'));

console.log(url.includes('google'));

console.log(gameName.split('-'));

