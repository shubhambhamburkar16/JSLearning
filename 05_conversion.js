console.log(`=========================Assignment==========================`);
console.log(`-----------------------Implict Conversion to String----------------------`);
var result = '3' + 2;
console.log(`1. The "number 2" converts into string and string '3' perform concatanation with its that's why result of  '3' + 2; is: ${result}`);

var result = '3' + true;
console.log(`2. The "boolean true"   converts into string and string '3' perform concatanation with its that's why result of '3' + true; is: ${result}`);


var result = '3' + undefined;
console.log(`3. The  "value undefined" converts into string and string '3' perform concatanation with its that's why result of '3' + undefined; is: ${result}`);

var result = '3' + null;
console.log(`4. The "null value"   converts into string and string '3' perform concatanation with its that's why result of '3' + null; is: ${result}`);
console.log(`----------------------Implict Boolean conversion to Number---------------------------`);
var result = '4' -  true;
console.log(`1. if The operator - is used  in boolean data type then true value is 1 then  result of '4' - true; is: ${result}`);

var result = 4 + true;
console.log(`2. if The operator + is used  in boolean data type then true  value is 1  then  result of 4 + true  is: ${result}`);

var result = 4  +  false;
console.log(`3. if The operator + is used  in boolean data type then false value is 0 then  result of 4 + false is: ${result}`);
console.log(`=========================Implict String conversion to Number==================================`);
var result = '4' - '2';
console.log(`1.if the - operator used in string conversion then the  result of '4' - '2'; is: ${result}`);

var result = '4' - 2;
console.log(`2. if the - operator is used in this string conversion then result of '4' - 2; is: ${result}`);

var result = '4' * 2;
console.log(`3. If the * operator is used in this string conversion then result of '4' * 2; is: ${result}`);

var result = '4' / 2;
console.log(`4. If the / operator is used in this string conversion then result of '4' / 2; is: ${result}`);

console.log(`=======Undefined used with the number, boolean or null given NaN=======`);
var result = 4 + undefined;
console.log(`1. Arithmetic Operation of undefined with the Number then result  4 + undefined is: ${result}`);

var result = 4 - undefined;
console.log(`2. Arithmetic Operation of undefined with the Number then result  4 - undefined is: ${result}`);

var result = true + undefined;
console.log(`3. Arithmetic Operation of undefined with the Boolean then result true  + undefined is: ${result}`);

var result = null + undefined;
console.log(`4. Arithmetic Operation of undefined with the Null then result  null + undefined is: ${result}`);
console.log(`---------------------------------------------------------------------------------------------------------------`);

console.log(`**************Explict Conversion String to Number*****************`);

var result = Number('324');
console.log(`1. The Explict Conversion String into Number then the result of Number('324') is: ${result} `);

var result = Number('324e-1');
console.log(`2. The Explict Conversion String into Number then the result of Number('324e-1') is: ${result} `);
console.log(`*************Boolean to Number*************8`);
var result = Number(true);
console.log(`1. The Explict Conversion String into Number then the result of Number(true) is: ${result} `);

var result = Number(false);
console.log(`2. The Explict Conversion String into Number then the result of Number(false) is: ${result} `);

console.log(`**************Invalid String to Number return NaN******************`);

var result = Number('hello');
console.log(`1. if a string is a invalid number, then the result will be :${result} `);

var result = Number(undefined);
console.log(`2. if a string is a invalid number, then the result will be :${result} `);

var result = Number(NaN);
console.log(`3. if a string is a invalid number, then the result will be :${result} `);
console.log(`----------------------------------------End---------------------------------------------`);