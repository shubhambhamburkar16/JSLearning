console.log(`===============Assignment - Sorting the Array===========`);
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`------------The Given Array is : ${arrayRollNumbers}-----------`);
const reverse = arrayRollNumbers.reverse ();
console.log(`--------------The Reversing array is : [${reverse}]-------------`);
const sort = arrayRollNumbers.sort();
console.log(`----------------The Sorted Array is : [${sort}]------------------`);
const sortAsc = arrayRollNumbers.sort((v1, v2) => {
    return v1>v2 ? 1: -1;
} );
console.log(`The Given Array is in Ascending Order is : [${sortAsc}]`);
const arrayGreaterNum = arrayRollNumbers[arrayRollNumbers.length-1];
console.log(`The Greatest Number in the Array is : ${arrayGreaterNum}`);
const arraySmallNum = arrayRollNumbers[0];
console.log(`The Smallest  Number in the Array is : ${arraySmallNum}`);
const removeElements = [...new Set (arrayRollNumbers)];
console.log(`-----------------The Remove Duplicate Element From the Array is : [${removeElements}]-----------------------`);
console.log(`--------------------END------------------------`);