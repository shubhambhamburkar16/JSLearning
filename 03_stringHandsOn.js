function stringHandsOn(){
    console.log(`1. Given String is:      Hey you are doing good, keep it up       `);
}
stringHandsOn();
var stringHandsOn = "      Hey you are doing good, keep it up      ";
var totalLength = stringHandsOn.length;
console.log('2. Length of the Given String is:', totalLength);
var result = stringHandsOn.trim();

console.log("3. Given String After Trim: Hey you are doing good, keep it up ","Having Length after trim: ", result.length);
var result = totalLength - result.length;
console.log('4. Removed extra spaces are= ', result);
var results = 'Hey you are doing good, keep it up';
var charAt0 = results.charAt(0);
var lastChar = results.charAt(results.length-1);
console.log("5.  First Character is: ", charAt0, "Last Character is:", lastChar);
var totalWords = results.split(" ");
console.log("6. Total Number of Words After trim are=", totalWords.length);
console.log("7.Index of good is-", results.indexOf('good'));
var slice = results.slice(22);
var substring = results.substring(22)
console.log("8. Slice is=", slice, "     Substring is=", substring);
console.log("9. Whether string ends with up?", results.endsWith("up"));
console.log("10. Whether string ends with Hey?", results.startsWith("Hey"));

