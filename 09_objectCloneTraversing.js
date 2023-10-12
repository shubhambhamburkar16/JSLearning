console.log(`=====================Assignment - Object Clone========================`);
console.log(`---------Creating the Object bankSbi--------`);
let bankSbi = {
    branchSBI: 'Amravati SBI',
    branchManager: 'Pallavi Raut',
    callUs: 980034442344,
    ifscCode: 'SBIno088223',
}
console.log(`-------Creating the object bankLocation--------`);
let bankLocation = {
    street: 'Gopal Nagar',
    city: 'Amravati',
    pinCode: 233775,
};
let bankClone = Object.assign({}, bankSbi, bankLocation);
console.log(`The Clonning Method is operated by Object.assign:--`);
console.table(bankClone);
console.log(`The Clonning Method is operated by Spread Operator:---`);
  bankSbi = { ...bankLocation};
console.log(bankSbi);
let rateOfInterest = {
    homeLoanIntrest: '10 %',
    personalLoanInterest: '20 %',
    dueInterest: '3.5 %'
}
 let sbiDetails = Object.assign(bankSbi, bankLocation, rateOfInterest);
 console.log(`The Result After Merging is stored in sbiDetails :--`,sbiDetails);
 console.table(sbiDetails);
 console.log(`Traversing the Merged Object is=>`);
 for (const key in sbiDetails) {
    console.log(`${key}:- ${sbiDetails[key]}`);
 }
const bank = Object.assign(bankSbi, bankLocation, rateOfInterest);
console.log(bank);
console.log(`----------------------------------END-------------------------------------------`);