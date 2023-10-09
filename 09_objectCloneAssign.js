console.log(`=====================Assignment - Object Clone========================`);
console.log(`---------Creating the Object bankSbi--------`);
let bankSbi = {
    BranchSBI: 'Anjangaon Surji SBI',
    BranchManager: 'Kishor Mankar',
    CallUs: 980034442344,
    IFScCode: 'SBIno088223',
}
console.log(`-------Creating the object bankLocation--------`);
let bankLocation = {
    Street: 'Daryapur  Road',
    City: 'Anjangaon Surji',
    Pin: 444705,
}
console.log(`-----------------After the Clonning Step 1 & 2 then Result is-------------------------`);
const bankClone = Object.assign({}, bankSbi, bankLocation)
console.log(bankClone);
console.table(bankClone);

console.log(`Creating the Object rateOfInterest`);
let rateOfInterest = {
    homeLoanInterest: '15 %',
    personalLoanInterest: '10 %',
    dueInterest: '1.5 %',

}
console.log(`--------------After the Merging Object into  new Object is: sbiDetails------------------`);
Object.assign(bankSbi, bankLocation, rateOfInterest);
console.table(bankSbi);
console.log(`Traversing of an object...`);
for (const key in bankSbi) {
   console.log(key, bankSbi[key]);
}
