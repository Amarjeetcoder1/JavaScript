function sayMyname () {
    // console.log("A");
    // console.log("B");
    // console.log("C");
    // console.log("D");
    // console.log("E");
    // console.log("F");
}

// sayMyname() // sayMyname => reference, () => execution/Argument

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumber(num1, num2) {

    // let result = num1 + num2
    // return result
    return num1 + num2
    
}

const result = addTwoNumber(3, 10)

// console.log("Result : ",result);

function loginUserMeaage(username = "Sam") {
    // if(username == undefined)
        if (!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMeaage());
//console.log(loginUserMeaage("Amarjeet"));

// +++++++++=Rest operator +++++++
function calculateCartPrice (val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 700, 100, 2000))


// ++++++++++Pass Object Using Function++++++++
const user = {
    username: "Amanjeet Ghosh",
    price: 199

}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

// handleObject(user) // calling the object to execute
handleObject({
    username: "sam",
    price: 899
})

// +++++++++++=Pass Array Using Function

const myNewArray = [200, 3000, 400]

function returnSecondvalue (anyvale) {
    return anyvale[1]
}

// console.log(returnSecondvalue(myNewArray));
// console.log(returnSecondvalue([300, 500, 900]));