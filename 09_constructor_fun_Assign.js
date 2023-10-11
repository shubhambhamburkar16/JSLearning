console.log(`=========================Assignment - Constructor Function=============================`);
console.log(`------------Task 1-------------`);
function Bank (bankName, location, ifscCode, branchcode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchcode = branchcode;
        console.log(`Bank Details Are Mentioned As:=-- ${this.bankName}, ${this.location}, ${this.ifscCode}, ${this.branchcode}`);
    }
const yesBank = new Bank ("Yes Bank", 'Amravati', 'yes785634', 439867);
const sbiBank = new Bank ("SBI Bank", 'Akola', 'SBI0n98766', 896723);
const mahBank = new Bank ("Maharashtra Bank", 'Anjangaon Surji', 'Mh098766', 985673);
const axisBank = new Bank ("Axis Bank", 'Paratwada', 'AX763452', 684398);
console.log(`--------Task 2---------`);
Bank.prototype.openTime = '9 AM IST';
Bank.prototype.closeTime = '6 PM IST';
console.log(`The Opening Time of the SBI Bank is=> ${sbiBank.openTime} & Closing time is before =>${sbiBank.closeTime} `);
console.log(`The Branch Name is:- ${axisBank.bankName} & Visit Before the Closing the Branch :- ${axisBank.closeTime}`);
console.log(`The Branch Name is:- ${yesBank.bankName} & The Branch Code of the Bank is--${yesBank.branchCode} & The Opening Time of the Branch is-- ${yesBank.openTime}`);
console.log(`-----------------------------------END---------------------------------------`);