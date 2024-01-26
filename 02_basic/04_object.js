// Singleton

// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "amarjeet123"
tinderUser.name = "Amarjeet"
tinderUser.age = 18
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//Object 1
const regularUser = {
    email: "Amarjeet123@gmail.com",
    //object 2
    fulltname: {
        //object 3
        userfullname: {
            firstname: "Aman",
            lastname: "Ghosh"
        }
    }
}

console.log(regularUser.fulltname.userfullname);

// console.log(regularUser.fulltname.userfullname.firstname);

// ++++++++++++ Merage two or more Objects ++++++++++++
const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {4: "a", 5: "b"}

// Using Object.assign():
// const obj3 = Object.assign( {}, obj1, obj2, obj4)
// console.log(obj3);

// ++++++++++++NOTES++++++++++++++
// target => {}
// Source => obj1, obj2, obj3


//Using Spread Syntax:
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);



// ++++Array of Objects ++++++
const users = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890"
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "9876543210"
    },
    {
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      phone: "4567891230"
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      phone: "7891234560"
    },
    {
      name: "Chris Wilson",
      email: "chriswilson@example.com",
      phone: "3216549870"
    },
    {
      name: "Sarah Thompson",
      email: "sarahthompson@example.com",
      phone: "6549873210"
    },
    {
      name: "David Anderson",
      email: "davidanderson@example.com",
      phone: "9873216540"
    },
    {
      name: "Amy Garcia",
      email: "amygarcia@example.com",
      phone: "6543219870"
    },
    {
      name: "Mark Lee",
      email: "marklee@example.com",
      phone: "3219876540"
    },
    {
      name: "Laura Hernandez",
      email: "laurahernandez@example.com",
      phone: "9876543210"
    }
  ]

  users[1].email
  console.log(tinderUser);

  console.log(Object.keys(tinderUser));
  console.log(Object.values(tinderUser));
  console.log(Object.entries(tinderUser));

  console.log(tinderUser.hasOwnProperty('isLoggedIn'));
