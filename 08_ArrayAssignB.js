console.log(`===================Assignment - Array AssignB=========================`);
let arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`1. The Total Elements Available Are: ${arrayNumbers.length}`);
console.log(`2. The first & Last Element is :${arrayNumbers[0]}, ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`3. The Third Last Element is : ${arrayNumbers[arrayNumbers.length-3]}`);
let even = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2== 0)
    even.push(arrayNumbers[index]);   
}
console.log(`The Even Number is:${even}`);
let odd = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2!= 0)
    odd.push(arrayNumbers[index]);   
}
console.log(`The Odd Number is:${odd}`);
var sum =0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2==0) {
        console.log(`The even Positioned element is: ${element}`);
        sum = sum + element;
    }
}
console.log(`The Sum of the  all Even Positioned elements is :${sum}`);

var sum =0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2!=0) {
        console.log(`The Odd Positioned element is: ${element}`);
        sum = sum + element;
    }
}
console.log(`The Sum of the  all Odd Positioned elements is :${sum}`);
var sum = 0;
for (let index = 0; index <= arrayNumbers.length-1; index++) {
    const element = arrayNumbers[index];
        sum = sum + arrayNumbers[index];
    }
console.log(`The Sum of the Given Array is:${sum}`);
var multiply = "";
for (const element of arrayNumbers) {
    if (element % 5==0) {
        multiply += element + " ";
    }
}
console.log(`The Number which are multiple of 5 is:${multiply}`);
var result = arrayNumbers.includes(115);
console.log (`Is Number 115 Available in arrayNumbers : ${result}`);
var result = arrayNumbers.includes(23);
console.log(`Is Number 23 Available in arrayNumbers : ${result}`);
arrayNumbers.splice(3,0,55,66);
console.log(`The Numbers 55,66 is insert before index 3 is:[${arrayNumbers}]`);
var removedElements = arrayNumbers.splice(4, 3);
console.log(`After deleting 3 elements starting from index 4 is: [${arrayNumbers}]`);
console.log(`------------------------------------End---------------------------------------------`);