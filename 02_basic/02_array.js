const marvel_heros = ["Thor","Ironman","SpiderMan"]
const dc_heroes = ["Superman", "flash", "batman"]
const indian_heroes = ["Saktiman", "Krrish", "Devi"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros);
// console.log(marvel_heros[3] [1]);

// const allHeros = marvel_heros.concat(dc_heroes)
// console.log(allHeros);
//Expected output: Array [ 'Thor', 'Ironman', 'SpiderMan', 'Superman', 'flash', 'batman' ]

// +++++Notes+++
//Arrays and/or values to concatenate into a new array
//The concat method creates a new array

//spread operators can be used for arrays
const all_new_heroes = [...indian_heroes, ...marvel_heros, ...dc_heroes]
console.log(all_new_heroes);

const anoter_array = [1, 2, 3, [4, 5, 6,], 7, [8, 9,[10, 11]]]
const real_another_array = anoter_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Amarjeet"));
console.log(Array.from("Amarjeet"));

console.log(Array.from({name: "Amarjeet"}));  //intresting
//We have to tell the key or the value



// Conert string or number to an array
let score1 = '100';
let score2 = '1000';
let score3 = '10000';
let score4 = '1000000';

console.log(Array.of(score1,score2,score3,score4));
// console.log(Array.from(score1,score2,score3,score4));
console.log(Array.isArray(score1,score2,score3,score4));