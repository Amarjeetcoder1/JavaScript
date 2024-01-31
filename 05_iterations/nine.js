// Reduce Method

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function(acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 3)

// const myTotal = myNum.reduce( (acc, curr) => (acc + curr), 0)
// //console.log(`acc : ${acc} and currval : ${currval}`);

// console.log(myTotal);




const shoppingCart = [
    {
        iteamName: "js course",
        price: 2999
    },
    {
        iteamName: "Python course",
        price: 999
    },
    {
        iteamName: "mobile dev course",
        price: 4999
    },
    {
        iteamName: "Data Science course",
        price: 11999
    },
    {
        iteamName: "DSA course",
        price: 2999
    }
]

const priceToPay = shoppingCart.reduce( (acc, iteam) => (acc + iteam.price), 0)

console.log(priceToPay);




































// console.log(myTotal);
const council = [

    { id: 2100, name: 'President Jacqueline' },
  
    { id: 2114, name: 'Vice-president James' },
  
    { id: 3016, name: 'House-captain Otis' },
  
    { id: 4818, name: 'Prefect Finneas' }
  
  ]

 
//  council.forEach( (iteam) =>{
//     console.log(iteam.id);
//  } )

//const myTotal = council.map( (iteam) => {
//     return iteam.id
// })

//console.log(myTotal);


