console.log(`================Assignment - Array======================`);
let arrayN = [22, 11, 44, 55, 77, 33];
console.log(`The Given Array is : ${arrayN}`);
console.log(`--------------------Find Even Positioned Value------------------------`);
let arrayNumbers = [22, 11, 44, 55, 77, 33];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2==0) {
        console.log(`The even Positioned value is: ${element}`);
    }
}
console.log(`=================================================================`);
console.log(`----------------------------Sum of An Array----------------------------------`);
let  sum = 0;
for (let index = 0; index<=arrayNumbers.length-1; index++) {
    const element = arrayNumbers[index];
    sum = sum + arrayNumbers[index];
}
console.log(`The Sum of the Given Array is : ${sum}`);
console.log(`---------------------------End-------------------------------------`);

