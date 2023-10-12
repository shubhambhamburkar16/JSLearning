 console.log(`====================Assignment - Object, Array Freeze, and merge file============================`);
 let personalDetails = {
     firstName: "Shubham",
     lastName: "Bhamburkar",
     graduation: "B.Sc - Computer Science",
     City: "Anjangaon Surji",
     technicalSkill: 'HTML, CSS, Javascript'
};
let collegeDetails = {
    collegeName: "Maharma Jyotiba Fule College of Science",
    city: "Bhatkuli",
    totalDepartments: 8,
    university: "SGBAU - Amravati"
};
Object.assign(personalDetails, collegeDetails)
console.log(`The Result After the Merging two object is:---`);
console.table(personalDetails);
console.log(`================Creating a New Array of Friends & Iterate it==================`);
let arrayOfFriends = ["Bhavesh", "Pavan", "Swaraj", "Abhi"];
Object.freeze(arrayOfFriends);
for (const iterator of arrayOfFriends) {
    console.log(iterator);
};
console.log(`=======Reverse word Technology=======`);
 let company = "Codemind Technology";
 let reverse = "";
 for (let index = company.length-1; index >= 0; index--) {
    let char = company.charAt(index);
    if (char == ' '){
        break;
    } else {
        reverse = reverse + char;
    
 }
 }
 console.log(`The Output of word 'Technology' in Reverse Form is ${reverse}`);
 console.log(`--------------------------------END-----------------------------------------`);