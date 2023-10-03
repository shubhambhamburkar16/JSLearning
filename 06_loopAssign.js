console.log(`==================Assignment - Control Flow=================`);
var str = "I am very good IT Developer";
var count = 0;
var vowelsCap = "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`1. Total number of vowels are: ${count}`);
console.log(`--------------------------------------------------------------------------------------`);
var sum = 1;
for (let index = 1; index <= 5 ; index++) {
   var  sum = sum + index * index * index;
    
}
console.log(`2. The Sum of the Cube Numbers is: ${sum}`);
console.log(`-----------------------------------------------------------------------------------------`);
function oddPositionedChars(str1){
for (let index = 0; index < str1.length-1; index++) {
    if (index%2!=0 && str1.charAt(index)!=" ") {
        console.log(str1.charAt(index));
    }
    
}
}
console.log(`--------3.1 OddPositioned Character present in given string is=---------`);
oddPositionedChars("Hard work always pays back");
console.log(`---------3.2 OddPositioned Character present in given string is=-------------`);
oddPositionedChars("Soon I will be UI IT Champ");
