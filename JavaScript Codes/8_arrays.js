// Arrays

// JavaScript Arrays are dynamically resized. This means we don't have to specify the size when declaring.

let arr = ['banana', 'orange', 'mango'];
console.log(arr[2]); // prints mango
arr[1] = 'grapes';  // changes orange to grapes

// Inserting more elements
let fruits = ['banana', 'orange', 'mango'];
fruits.push('grapes'); // Inserts grapes at the end of array
fruits.unshift('strawberry') // Insert strawberry at the beginning of array
fruits.pop(); // Removes from the end
fruits.shift(); // Removes from beginning

// Unlike most other languages, JavaScript does throw out of bounds error (undefined) when we try to access
// element at index greater than or equal to length of array
console.log(fruits[10]); // prints undefined
fruits[10] = 'grapes'; // works fine
console.log(fruits);
// Fruits[10] = 'grapes' extends the array to size 11 and set indices from 3 to 9 undefined and 10 as 'grapes'.

// Array Methods --> tons of methods
fruits.push('pomegranate');
console.log(fruits.length); // length of array

// concatenation of 2 arrays
let moreFruits = ['grapes', 'strawberry'];
fruits = fruits.concat(moreFruits);
console.log(fruits);

// Slicing of a array
let slice = fruits.slice(1, 5); // 1 is inclusive and 5 is exclusive
console.log(slice);
console.log(fruits.slice(3));   // print after 3 elements in the array
// remove starting 3 elements and then print rest of the array

// Sorting
let numbers = [5, 7, 1, 2, 8];
numbers.sort();
console.log(numbers);        // prints [1, 2, 5, 7, 8];

// Reverse
numbers.reverse();
console.log(numbers);        // prints [8, 7, 5, 2, 1];