console.log("============Assignment 02: file 03_Assign01.js=============");
console.log("----------Task 1------------");
console.log("========Functions with no arguments and no return type==========");
function profession() {
  console.log("skills: I am a angular Developer");
  console.log("skills: I am a React Developer");
}
profession();

console.log("--------Task 2--------");
function secondFunct() {
  console.log(
    "====Second Function with no argument and no return type========"
  );
}
secondFunct();
console.log("=============Personal Details =================");
function personalDetails(firstName, lastName, collegeName) {
  console.log("Hii I am a:", firstName);
  console.log("My Surname is:", lastName);
  console.log("My College Name is:", collegeName);
}
personalDetails(
  "Shubham",
  "Bhamburkar",
  "Mahatma Jyotiba Fule Science College Bhatkuli"
);
console.log("------------Task 3--------------");
console.log(
  "==================Function with args and no return values==============="
);
function swapValues(valueOne, valueTwo) {
  console.log("value before swap ====>", valueOne, valueTwo);
  var num = valueOne;
  valueOne = valueTwo;
  valueTwo = num;
  console.log("value after swap =====>", valueOne, valueTwo);
}

swapValues("Shiv", "Parvati");
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("-----------Task 4------------");
console.log("=============Addition function =====================");
function addThreeValues(val1, val2, val3) {
  var result = val1 + val2 + val3;
  return result;
}

var addNum = addThreeValues(10.23, 600, 40);
console.log("Addition of three values 10.23, 600, 40 is", addNum);
var grettings = addThreeValues("Hello,  ", "Good ", "Morning!  ");
console.log(grettings);
console.log("*********End***********");
