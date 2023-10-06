
console.log(`===========================Assignment - Array AssignA====================================`);
let arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`1. The Given Array is : [${arrayFruits}]`);
console.log(`2. The First Element is : ${arrayFruits[0]}, The last Element is:${arrayFruits[arrayFruits.length-1]}`);
arrayFruits.unshift('Papaya');
console.log(`3. The Element Add before the Element Banana is : ${"Papaya"}`);
var arrayFruit = ["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
const splicedElements = arrayFruits.splice('Mango')
console.log(`4. The Remove element is : ${"Mango"}`);

var arrayFruit = ["Papaya", "Banana", " Orange", "Apple", "Water Melon"];
arrayFruit.push('Pineapple');
console.log(`5. The Element Add in the Last Position is : ${"Pineapple"}`);
arrayFruit.splice(4,0,'Dragon Fruit');
console.log(`6. Insert the Element Before element water melon is  : ${"Dragon Fruit"}`);
arrayFruit.splice(2,1,'Kiwi');
console.log(`7. Replace the 'Orange' element with  is:${"Kiwi"}`);
const arrayElements = arrayFruit.slice(1, 4);
console.log(`8. Elements Starting from index 1 to 4 is :${arrayElements}`);
const arrayLastElements = arrayFruit.slice(arrayFruit.length-3);
console.log(`9. Elements Starting from index 1 to 4 is :${arrayLastElements}`);
console.log(`10. The given array after the result is: [${arrayFruit}]`);
console.log(`----------------------------------------End---------------------------------------------`);