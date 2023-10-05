console.log(`============Assignment - Count Character===========`);
function countCharA(arg1){
    console.log(`The Character present in the given string== ${arg1}`);
var str1 =arg1;
var count = 0;
    for (let index = 0; index < str1.length-1; index++) {
        var char = str1.charAt(index);
        if (char=='A' || char=='a') {
            count = count + 1;
        }
    }
    console.log(`Total Number of Character 'A' & 'a' present in Given String : ${count}`) ;
}
countCharA('I AM Learning Javascript, The Language of internet');
console.log(`---------------------------------------------------------------------------------------------------`);
countCharA('My favourite movie is LAggAn');
console.log(`---------------------------------End--------------------------------`);





