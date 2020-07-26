// Datatypes -> mainly 6 types


// 1. Number => This includes all integers and floating point numbers
let num1 = 5;
let num2 = 10.45;

// 2. Boolean
let boolVar1 = true;
let boolVar2 = false;

// 3. String
let str1 = "This is a string";
let str2 = 'This is another string'; // Both " " and ' ' are acceptable for strings.

// 4. Array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["str1", "str2", "str3"];
console.log(arr1);
console.log(arr1[1]); // 0 indexed

// 5. Objects
let person = {
 name: "Arpit Kumar Jain",
 age: 21,
 occupation: "Programmer/coder and learner"
};
console.log(person);
console.log("Name : "+ person.name);
console.log("Age : "+ person.age);

// Undefined and Null
var a;
console.log(a); // undefined
var b = null;
console.log(b); // null -> empty or non-existent value.