console.log(`==========Assignment 1 - Reduce Method=========`);
const array_Numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`-----------Given Array is : [${array_Numbers}]-------------`);
 const add = array_Numbers.reduce ((currentValue, index) => {
    return currentValue + index;
 }, 0);
console.log(`---------The Sum of All the Numbers using Reduce Method is : ${add}------------------------`);
const multiply = array_Numbers.filter ( (index)=> {
    return index % 5 == 0;
})
const sum = multiply.reduce((currentValue, index) => {
    return currentValue + index;
})
console.log(`The Given Number is Multiple of 5 is : ${multiply}& Sum Of the Given Number is: ${sum}`);
console.log(`------------------------END-----------------------------`);
