console.log(`==================Assignment - Arrow Function======================`);
console.log(`--------No Argument and No Return Value-----------`);
let arrowFunction =  () => {
 console.log(`"Good Morning, Today is Thursday"`);
}
arrowFunction();
console.log(`----------------with 3 argument and no return value-------------`);
let arrowFun1 = (num1, num2, num3=1) => {
    console.log(`Multiplication of the Given  Number is: ${num1 * num2 * num3}`);
}
arrowFun1(5, 5, 2);
arrowFun1(10, 4);
console.log(`-------------------With 5 Arguments and Return Value -------------------------`);
let arrowFun2 = (v1, v2, v3, v4, v5) => {
    console.log(`The Addition of the Given Number is:${v1 + v2 + v3 + v4 + v5}`);
}
arrowFun2(100, 100, 200, 349, 756);
let arrowFun3 = (str1, str2, str3, str4, str5) => {
    console.log(`The Addition of the Given String is : ${str1 + str2 + str3 + str4 + str5}`);
}
arrowFun3("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`--------------------------END----------------------------------`);
