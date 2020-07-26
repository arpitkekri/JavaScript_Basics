// Conditional Statements
// same as c/c++
let age = 12;
if(age < 12) {
 console.log("You are under 12");
}
else if(age <= 18){
 console.log('You are between 12 and 18');
}
else{
 console.log(`You are above 18`);
}

// Comparison Operators
/*
x < y         x > y
x <= y        x >= y
x == y -> checks if two values are same after doing implicit conversion if required.
x === y // Yes we have ===
x != y
x !== y
*/
// On the other hand x === y checks if two values are same and their type is also same.
// This will be clear in following example.
if('2' == 2) {           // True
    console.log("'2' == 2");
}

if('2' === 2) {          // False
    console.log("'2' === 2")
}

if('2' != 2) {          // False
    console.log("'2' != 2");
}

if('2' !== 2) {         // True
    console.log("'2' !== 2")
}