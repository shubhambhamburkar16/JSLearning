console.log(`================================Assignment - Ternary Operator==============================`);
console.log(`--------------------Step 1-----------------------------`);
console.log(`********************Male Marriage Eligibility Function***********************8`);
function maleMarriageEligibility(gender, age, boyName){
var result = gender=='Male' && age >= 21 
? `Hey ${boyName} you are eligible for Marriage, congrats!`
: `Sorry ${boyName} you are not eligible for Marriage, try next time`;
return result;
}
var result = maleMarriageEligibility("Male", 25, "BillGates");
console.log(`1.1`, result);
var result = maleMarriageEligibility("Male", 17, "Stew Jobs")
console.log(`1.2`, result);
console.log(`-------------------Step 2------------------------`);
console.log(`***********************Female Marriage Eligibility Function*************************************`);
function femaleMarriageEligibility(gender, age, girlName){
    var result = gender=='Female' && age >=18 
    ? `Hey ${girlName} you are eligible for Marriage, congrats!`
    : `Sorry ${girlName} you are not eligible for Marriage, try next time`;
    return result;
    }
    var result = maleMarriageEligibility("Female", 16, "Jenifer");
    console.log(`2.1`, result);
    var result = maleMarriageEligibility("Female", 27, "Malinda Gates")o
    console.log(`2.2`, result);
    console.log(`*******************End*******************`);
