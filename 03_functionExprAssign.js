console.log(`============Assignment 1===============`);
var square = function(value){
    return value * value;
}
console.log(`1.square of all values are:-`);
var result = square(5);
console.log(`Square of 5 is ${result}`);
var result = square(6);
console.log(`Square of 6 is ${result}`);
var result = square(6);
var result = square(25);
console.log(`Square of 25 is ${result}`);
var result = square(100);
console.log(`Square of 100 is ${result}`);
var result = square(67.89);
console.log(`Square of 67.89 is ${result}`);
var result = square(59);
console.log(`Square of 59 is ${result}`);

console.log(`2.Type of the Square function is:`, typeof square);
var areaOfRectangle = function(length, width){
    return length * width;
}
var result = 499 * 917;
console.log(`3. Area of Rectangle is: ${result}`);
console.log(`4. The SwapValues Result Are:-`);
var swapValues = function(value1, value2){
    var value1 = 'Mahi';
    var value2 = 'Raina';
    console.log(`Before Swap=>`, value1, value2);
    var temp = value1;
    var value1 = value2;
    var value2 = temp;
    console.log(`After Swap=>`, value1, value2);

    var value1 = 55;
    var value2 = 77;
    console.log(`Before Swap=>`, value1, value2);
    var temp = value1;
    var value1 = value2;
    var value2 = temp;
    console.log(`After Swap=>`, value1, value2);
    
}
swapValues();
console.log(`5. String`);
var string = function (charAt){
     var str = "JS the most popular language of internet";
    totalLength = str.length;
    console.log(`A. Total Character available in the string is:`, str.length); 
    var charAt6 = str.charAt(6);
    console.log(`B.Character at index 6 is: " "`, charAt6);
    var charAt11 = str.charAt(11);
    console.log(`C. Character at index 11 is: " "`, charAt11);
    var lastChar = str.charAt(str.length-1);
    console.log(`D. Last Character of the string is:`, lastChar);
    var firstchar = str.charAt(0);
    console.log(`E. The Very First character is:`, firstchar);
    var thirdLastChar = str.charAt(str.length-3);
    console.log(`F. Last Character of the string is:`, thirdLastChar);
    var totalWords = str.split(" ");
    var result = square(totalWords.length);
    console.log(`G. Total number of words in the given string is "7" & its square is:`, result);
}
string();
console.log(`********************End**************************`);