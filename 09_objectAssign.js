let professor = {
    Name: 'Prof. Vishal Wankhade',
    CollegeName: 'Mahatma jyotiba fule College',
    Qualification: "Msc Physics Pg.Net",
    Age: 28,
    Subject:'physics',
};
console.log(professor);
console.log(`====== Nested Object =======`);
 const prof = {
    Name: 'Prof. Vishal Wankhade',
    CollegeName: 'Mahatma jyotiba fule College',
    Qualification: "Msc Physics Pg.Net",
    Age: 28,
    Subject:'physics',
    degrees:{
        engineering:'CSC',
        PHD:'Adv Computing', 
        PgNetset: '1st Rank'
    },
    certificates: ["Hacker Rank Participation", "Certificates in IFE course", "Certificates in Adv Programming"]
};
console.log(prof);
console.log(`Adding property in object`);
prof.TotalExperience = "14 Years";
console.log(prof);
console.log(`========= Modified existing property in the above array engineering: cse --> ITE ===========`);
prof.degrees.engineering = "ITE"
console.log(prof);
console.log(`========= Pushed one another certificate in the array at the end 'Oracle Certified'===========`);
prof.certificates.push("Oracle Certified");
console.log(prof);
let lastElement = prof.certificates[prof.certificates.length-1];
console.log(`The last element of array certificate is: "${lastElement}".`);
console.log(`========= logged the whole object ===========`);
console.log(prof)
console.log(`========= Traversed certificates array using forOf loop ===========`);
for (const key  of prof.certificates) {
    console.log(key);
}

