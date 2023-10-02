console.log(`==========================Assignment 2 - For Loop=======================================`);
console.log(`1.WAP to print Number from 5 to 15 by incrementing 1`);
for (let index = 5; index <=15; index++) {
    console.log(index);
    
}
console.log(`2.WAP to print Numbers from 50 to 40 by decrementing by 1`);
for (let index = 50; index>=40; index--) {
    console.log(index);
    
}
console.log(`3.WAP to find first 15 odd numbers`);
for (let index = 1; index<=30; index=index+2) {
    console.log(index);
    
}
console.log(`4.WAP to print first 10 Even Number`);
for (let index = 2; index<=20; index=index+2) {
    console.log(index);
    
}
console.log(`5.WAP to print table of 5`);
for (let index = 5; index<=50; index=index+5) {
    console.log(index);
    
}
console.log(`6. WAP to print table of 10`);
for (let index = 10; index<=100; index=index+10) {
    console.log(index);
    
}
console.log(`7. WAP to print table of 10  in Reverse order`);
var result = "";
for (let index = 100; index>=10; index=index-10) {
    result = result + index + " ";
    
}
console.log(result);