// Functions --> 2 ways

// Normal way
function sayName1(name) {       // must be function can't be const
    console.log('Hello ' + name);
}
sayName1('Arpit');

// ES6 way (arrow functions)
const sayName2 = (name) => {   // must be const can't be function
    console.log('Hello ' + name);
}
sayName2("AKJ");

// We can drop the ( ) in arrow function if there is only one parameter.
/*
const sayName2 = name => {
    console.log('Hello ' + name);
}
sayName2("AKJ");
*/

// If our function has only one statement which returns something we can also drop { }

const square = x => x * x; // same as const square = x => {return x * x;}

let sq = square(2);

// Javascript functions also support default values
function increment(x, inc = 1){ // default value of inc = 1
    return x + inc;
}
   let x = 5;
   x = increment(x, 2); // x = x + 2;
   x = increment(x);    // x = x + 1;
    console.log(x);
    const decrement = (x, dec = 1) => x - dec;
    x = decrement(x, 2); // x = x - 2;
    x = decrement(x);    // x = x - 1;
    console.log(x);
// Both are equally good with one major difference i.e. arrow function doesn't bind to "this".