console.log(`************************Assignment 2*****************************`);
var voteEligible =  function(age){
    var result = +age;
    if (age==0 || age<0 || age>=130 || age==null || isNaN(result)) {
        console.log(`Invalid Data: ${age}`);
    } else {
        if (age<18) {
            console.log(`You are not eligible for vote. age: ${age}`);
        } else {
            console.log(`You are eligible for vote. age: ${age}`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
voteEligible('Shubham');
voteEligible("Google");
console.log(`*******************End********************`);
