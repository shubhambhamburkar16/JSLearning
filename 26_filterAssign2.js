console.log(`================Assignment 2 - Filter Method=================`)
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const arrayNum = arrayNumbers.filter( (currentValue )=> {
    return currentValue > 50;
} );
console.log(`1. The Given Number is Greater than 50 is: ${arrayNum}`);

const arrayNum1 = arrayNumbers.filter( (currentValue )=> {
    return currentValue % 2 == 0; 
} );
console.log(`2. The Even Number in the Given array is: ${arrayNum1}`);
const arrayNum2 = arrayNumbers.filter( (currentValue )=> {
    return currentValue % 2 !== 0; 
} );
console.log(`3. The Odd Number in the Given array is: ${arrayNum2}`);
const arrayNum3 = arrayNumbers.filter( (currentValue )=> {
    return currentValue % 5 == 0; 
} );
console.log(`4. The Given Number is the Multiple of 5 is: ${arrayNum3}`);
const arrayNum4 = arrayNumbers.filter( (currentValue )=> {
    return currentValue>=20 && currentValue<=50; 
} );
console.log(`5. The Given Number between 20 & 50  is: ${arrayNum4}`);
console.log(`---------------------------END-------------------------------`);
