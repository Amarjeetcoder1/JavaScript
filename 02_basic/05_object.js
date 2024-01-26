//  Objects destructuring

// +++++++++++Syntax of Object Destructring +++++++++++
//const { property1: variable1, property2: variable2 } = object;

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course


const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// // React Syntax Destructring of object
// const navbar = ({company}) => {

// }

// navbar(company = "Amarjeet")

const person = {
    firstname: "Amarjeet",
    lastName:  "Ghosh",
    currentAge: 28
};

const {firstname,lastName, currentAge: age = 18} = person

console.log(firstname); //Amarjeet
console.log(age);  // 28


// +++++++++++++++/* JSON-encoded object: ++++++++++++

// {
//     "name": "W3Docs",
//     "coursename": "JS in Hindi",
//     "price": "free"

// }

