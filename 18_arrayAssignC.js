console.log('====================Assignment - Removing Duplicate Element & changing the Case of character========================');
console.log('------------------------Step - 1- Removing Duplicate Element in Array----------------------');
const arrayNum = [ 11, 3, 4, 11, 4, 7, 3];
 const arrayDup = [...new Set(arrayNum)];
console.log(arrayDup)
// let str = "How are you mate";
console.log('-----------Step - 2 - changing case of character------------------');
function alternateCase(str){
let result = '';
for (let index = 0; index < str.length; index++) {
    if (index % 2 === 0) {
        result += str[index].toUpperCase();
    } else {
        result += str[index].toLowerCase();
    }
}
    return result;
}
const str  = "How are you mate";
const Str = alternateCase(str)
console.log(`The Given Output is: ${Str}`);
console.log('------END--------');
