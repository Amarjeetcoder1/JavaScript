// common array use in ForEach
// [{} {} {}]
const coding = ["js", "rubby", "java","python","cpp"]

coding.forEach( function (iteam) {
    //console.log(iteam);
} )

coding.forEach( (iteam) => {
    //console.log(iteam);
} )

function printMe(iteam) {
   // console.log(iteam);
}

//Here we are using function name as parameter or reference
//coding.forEach(printMe)

coding.forEach( (iteam, index, arr)=> {
   // console.log('Index: ' + index + ' Value: ' + iteam);
})

// [{}, {}, {}]
//Iterate over array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },

]

myCoding.forEach( (iteam) =>{
   // console.log(iteam.languageName);
} )


