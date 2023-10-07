// Object creation using object literals
let person = {
    name: "Jenny",
    age: 22,
    isMarried: true, 
 };
 console.log(typeof person);
 console.log(person);
 


console.log(`Update property in object`);
person.age = 20;
console.log(person);

console.log(`Delete property from an object`);
delete person.age;
console.log(person);
let persons = {
   name: "Jenny",
   age: 22,
   isMarried: true, 
   show:function(){
    console.log(`Hi Hello, How are you ?`);
   }
};
console.log(typeof persons);
console.log(persons);

// Property access
//1. Dot Notation
let personaName = person.name;
console.log(`Person name is: ${personaName}`);

console.log(`Person age is: ${person.age}`);

//1. [] Notation
 nameOfPerson = person["name"]
console.log(`Person name is: ${nameOfPerson}`);

console.log(`Adding property in object`);
person.city = "Pune";
console.log(persons);
//console.table(person);

console.log(`Update property in object`);
person.age = 20;
console.log(persons);

console.log(`Delete property from an object`);
delete person.age;
console.log(persons);

console.log(`Adding method in an object`);
persons.show();
persons.display=function(){
    console.log(`I am inside display function`);
}
console.log(persons);
persons.display();
console.log(`====== Nested Object =======`);
const personElon = {
    name: "Elon Musk",
    age: 54,
    totalCompany: 9,
    companies: {
        tesla: "300B USD",
        twitter: "150B USD",
        spacex: "200B USD"
    },
    kidsName: ["Deny", "Weny", "Rony", "Randy"]
}

console.log(personElon.companies.tesla);
console.log(personElon.companies.tesla);
console.log(personElon.kidsName[0]);
console.log(personElon.kidsName.length);
// "stew"
personElon.kidsName.push("stew");

for (const kid of personElon.kidsName) {
    console.log(kid);
}