// ++++++++++++++++++ Memory Allocation ++++++++++++++++++

// Stack :(Primitive take copied vale), 
// Heap :(Non-Primitive take references)

let myYoutubename = "Amarjeet Coder"

let anothername = myYoutubename
anothername = "Visal coder"

console.log(myYoutubename);
console.log(anothername);

let userOne =  {
    "name": "Amy Garcia",
      "email": "amygarcia@example.com",
      "phone": "6543219870",
      "upi" : "7903516296ybl"
}

let userTwo = userOne

userTwo.email = "amarjeet19@gmail.com"

console.log(userOne);
console.log(userTwo);


