console.log(`Assignment - Map Of Objects`);
class Bank  {
    constructor (bank_name, location, account_no, ifsc, interest_rate){
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate;
}
};
let axis_bank = {
    bank_name: 'Axis Bank',
    location:  'Amravati',
    account_no: 987634126754,
    ifsc:  'AXS9823567',
    interest_rate: '15 %'
};
let sbi_bank = {
    bank_name: 'SBI Bank',
    location: 'Akola',
    account_no: 76854765423,
    ifsc: 'SBI9234567',
    interest_rate: '12 %'
};
let icici_bank = {
    bank_name: 'ICICI Bank',
    location:  'Yavatmal',
    account_no:  8765340987,
    ifsc:  'ICI4587567',
    interest_rate:  '18%'
};
let kotak_bank = {
    bank_name: 'Kotak Bank',
    location: 'Pune',
    account_no: 8905673421,
    ifsc:  'KT9056437',
    interest_rate:  '20 %'
};
let hdfc_bank = {
    bank_name:  'HDFC Bank',
    location:  'Mumbai',
    account_no:  9763452312,
    ifsc:  'HD75459802',
    interest_rate:  '17 %'
};
let punjab_bank = {
    bank_name: 'Punjab Bank',
    location:  'Delhi',
    account_no:  7689093454,
    ifsc:  'PN45679804',
    interest_rate:  '11 %'
};
const map = new Map();
map.set(axis_bank.account_no,axis_bank);
map.set(sbi_bank.account_no,sbi_bank);
map.set(icici_bank.account_no,icici_bank);
map.set(kotak_bank.account_no,kotak_bank);
map.set(hdfc_bank.account_no,hdfc_bank);
map.set(punjab_bank.account_no,punjab_bank);
const totalKeys = map.keys();

for (const key of totalKeys) {


}
console.log(`Bank Name is == ${axis_bank.bank_name}, Account No :- ${axis_bank.account_no} & Interest Of Rate of the Bank is--${axis_bank.interest_rate}`);
console.log(`Bank Name is == ${sbi_bank.bank_name}, Account No :- ${sbi_bank.account_no} & Interest Of Rate of the Bank is--${sbi_bank.interest_rate}`);
console.log(`Bank Name is == ${icici_bank.bank_name}, Account No :- ${icici_bank.account_no} & Interest Of Rate of the Bank is--${icici_bank.interest_rate}`);
console.log(`Bank Name is == ${kotak_bank.bank_name}, Account No :- ${kotak_bank.account_no} & Interest Of Rate of the Bank is--${kotak_bank.interest_rate}`);
console.log(`Bank Name is == ${hdfc_bank.bank_name}, Account No :- ${hdfc_bank.account_no} & Interest Of Rate of the Bank is--${hdfc_bank.interest_rate}`);
console.log(`Bank Name is == ${punjab_bank.bank_name}, Account No :- ${punjab_bank.account_no} & Interest Of Rate of the Bank is--${punjab_bank.interest_rate}`);
console.log(`-------------------------------------------END--------------------------------------------------------`);
