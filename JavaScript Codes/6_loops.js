// Loops --> 5 types 

let animals = ['Cow', 'Tiger', 'Penguin', 'Zebra'];

// 1. C/c++ style for loop
for(let i = 0; i < animals.length; ++i){
    console.log(animals[i]);
   }
// 2. for..in loop --> like python
for(let i in animals) {       // This loops over all indices of array
    console.log(animals[i]);
    }
// 3. for..of loop
for(let animal of animals){    // This loops over all elements of array
    console.log(animal);
   }
// 4. while loop
let j = 0;
while(j < animals.length) {
    console.log(animals[j]);
    ++j;
   }
// 5. do while loop
let k = 0;
do {
console.log(animals[k]);
++k;
} while(k < animals.length);