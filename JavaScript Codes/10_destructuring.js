// Destructuring --> Destructuring allows us to assign the properties of an array or object to variables.
//  This is similar to tuple unpacking in python.

// Arrays
let fruit = ['banana', 'orange', 'mango'];
// let fruit1 = arr[0];
// let fruit2 = arr[1];
// let fruit3 = arr[2];
// Above assignments can be simplified using array destructuring
let [fruit1, fruit2, fruit3] = fruit;
console.log(fruit1, fruit2, fruit3);

let [fruit11, fruit31] = fruit; // can also skip some element
console.log(fruit11, fruit31);


// We can use "..." to capture trailing elements
let arra = [1, 4, 5, 7, 1, 6];
// trailing capture
let [head, ...tail] = arra;
console.log(head, tail); // prints 1 [4, 5, 7, 1, 6]

// Destructuring can also be nested
let ar = [0, [1, 2]];
let [X, [Y, Z]] = ar;
console.log(X, [Y, Z]);

// Similar to arrays, objects can also be destructure with a similar syntax.
let person2 = {
    name2: 'AKJ',
    age2: 20,
    occupation2: 'Programmer'
   };
let {name2, age2} = person2;
console.log(name2, age2);

let {name2:personName, age2: personAge} = person2; // Changing variable name
console.log(personName, personAge);

// We can use default value here is that member is missing in given object
let header = {
    ip: '192.0.2.1',
    port: 443
};
let {ipv = 'IPv4', ip, port} = header;
console.log(ipv, ip, port);

// Similar to destructuring arrays object destructuring can also be nested
let data = {
    isValid: true,
    length: 5,
    arr: ['Hi', 'There', 'This', 'Is', 'Dummy', 'Data']
};
let {length, arr: [first, ...rest]} = data;
console.log(length, first, rest);

// Destructuring is useful when you want access only certain parts of passed objects to a function.
function analyseData({isValid = false, arr}){
    console.log(isValid, arr);
   }
analyseData(data);