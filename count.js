console.log(`============Assignment - Count Character===========`);
var str1 ="I Am Learning Javascript, The Language of internet";
var count = 0;
    for (let index = 0; index < str1.length-1; index++) {
        var char = str1.charAt(index);
        if (char=='A' || char=='a') {
            count = count + 1;
        }
        
    }

console.log(`The Given String is : ${str1}`);
console.log(`Total Number of Character 'A' & 'a' present in Given String : ${count}`) ;
console.log(`---------------------------------------------------------------------------------------------------`);
var str2 ="My favourite movie is LAggAn";
var count = 0;
 
    for (let index = 0; index < str2.length-1; index++) {
        var char = str2.charAt(index);
        if (char=='A' || char=='a') {
            count = count + 1;
        }
        
    }
console.log(`The Given String is : ${str2}`);
console.log(`Total Number of Character 'A' & 'a' present in Given String : ${count}`) ;





