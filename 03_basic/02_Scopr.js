// var c = 500
let a = 800
if (true) {
    let a = 10
    const b = 30
    var c = 50
    //console.log("INNER: ", a);

    function addnum() {

    }

}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Amarjeet"

    function two() {
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Amarjeet Ghosh"
    if (username == "Amarjeet Ghosh") {
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website);
}

//console.log(username);



// ++++++++++++++++++++ Intersting ++++++++++++++++++

addone(6)
function addone(num) {
    return num + 1
}



addTwo(6)
const addTwo = function(num) {
    return num + 3
}

