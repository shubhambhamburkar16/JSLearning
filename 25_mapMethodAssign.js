console.log(`================Assignment 1 - Map Method=================`);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`---------------Given Array is: [${arrayNumbers}] ---------------`);
const arrayAdd = arrayNumbers.map( (currentValue)=> {
    return currentValue + 10;
} );
console.log(`After Adding 10 into Each element the Result is : ${arrayAdd}`);
const arrayCube = arrayNumbers.map( (currentValue)=> {
    return currentValue*currentValue*currentValue;
} );
console.log(`The Cube of the Each Array Element is : ${arrayCube}`);
const arrayIndex = arrayNumbers.map( (index)=> {
    return index;
} );
console.log(`The Index Value is: ${arrayIndex}`);
console.log(`-----------------END------------------`);