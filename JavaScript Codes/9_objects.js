// Objects --> JavaScript objects are similar to dictionaries or hash tables in other programming languages

let stud = {
    name: 'KekriCoder',
    age: 20,
    occupation: 'student'
}

// Accessing members of objects 2 methods 
console.log(stud.name);
console.log(stud['name']);

// We can also change these properties or add new
stud['occupation'] = 'programmer'; // chenging old
stud['hairColor'] = 'black'; // adding new
stud.name = "Arpit";  // can change this way also
stud.eyeColor = "Black"; // can add this way also
console.log(stud);

// Delete property
delete stud['eyeColor'];
delete stud.hairColor;
console.log(stud);

// For values we can use anything a number, string, bool, array, other objects and even functions.
let personalData = {
    name: 'KekriCoder',       // String value
    age: 21,                  // Integer value
    occupation: 'Programmer', // Again string
    run: function(){          // Function
    console.log('I am running');
    },
    hobbies: ['reading', 'listening music'], // array
    otherData: {                             // Object
    hairColor: 'black',
    height: 178,
    weight: 76
    }
   };
personalData.run();    // execute function
console.log(personalData['run']);
console.log(personalData.run);