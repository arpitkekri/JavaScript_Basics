// switch ... case  --> same as c/c++

let myChar = 'c';
switch(myChar) {
    case "a": console.log("This is A");
    break;

    case `b`: console.log("This is B");
    break;

    case 'c': console.log("This is C");
    break;

    default: console.log('Some other character');
    break; 
}