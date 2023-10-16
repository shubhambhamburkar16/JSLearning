console.log(`Assignment - Set Of Objects`);
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
console.log(`Adding all Objects elements in a Set`);
const setOfBankList = new Set();
setOfBankList.add(axis_bank);
setOfBankList.add(sbi_bank);
setOfBankList.add(icici_bank);
setOfBankList.add(kotak_bank);
setOfBankList.add(hdfc_bank);
setOfBankList.add(punjab_bank);
console.log(`Traversing the Set using for of loop`);
for (const element of setOfBankList) {
    console.log(element);
}
console.log(`The Bank Name & Its Location is Mentioned Below:-`);
console.log(`The Bank Name is == ${axis_bank.bank_name} & Its Location is:-${axis_bank.location} `);
console.log(`The Bank Name is == ${sbi_bank.bank_name} & Its Location is:-${sbi_bank.location} `);
console.log(`The Bank Name is == ${icici_bank.bank_name} & Its Location is:-${icici_bank.location} `);
console.log(`The Bank Name is == ${kotak_bank.bank_name} & Its Location is:-${kotak_bank.location} `);
console.log(`The Bank Name is == ${hdfc_bank.bank_name} & Its Location is:-${hdfc_bank.location} `);
console.log(`The Bank Name is == ${punjab_bank.bank_name} & Its Location is:-${punjab_bank.location} `);
console.log(`------------------------------------------END--------------------------------------------------------`);