// Variable Hoisting -> only valid for var not for let
// In Javascript all variable and function declarations float to the the top of the program

console.log(x1);  // print undefined not error
var x1 = 5;

/* Above code is equivalent to 
var x1;
console.log(x1);
x1 = 5;
*/


// **************Printing**********
// We can pass multiple variable to print
let name = `Arpit Kumar Jain`;
// let name = "Arpit Kumar Jain"; will also work
// let name = 'Arpit Kumar Jain'; will also work
// ` ` or ' ' or " " all 3 types can be use for strings
let Age = 21;
console.log(name, Age);

let student = {
    name: "Arpit Kumar Jain",
    age: 21,
    occupation: "Programmer/coder and learner"
   };
   console.log(`Hello, I am ${student.name} and I am a ${student.occupation}`);