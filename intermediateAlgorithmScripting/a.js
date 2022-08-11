//sum all numbers in a Range 
/**Hint 1
Use Math.max() to find the maximum value of two numbers.

Hint 2
Use Math.min() to find the minimum value of two numbers.

Hint 3
Remember to that you must add all the numbers in 
between so this would require a way to get those numbers. */  


function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  //let total = min + max;
  let copy = [...arr];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    while (min < max) {
      j += min++
      console.log(j + max) //
    }
}
  return j + max;
}
 
 sumAll([1, 4]);  // 10
 sumAll([5,10]);  //45



 //Diff Two Arrays------------------------------------------------------
 /**Hint 1
Merge the list to make it easy to compare functions.

Hint 2
Use filter to get the new array, you will need to create 
a callback function.

Hint 3
The best way to go about the callback function is
 to check if the number from the new merged array
  is not in both original arrays and  return it. */
 function diffArray(arr1, arr2){
  const newArr = [];
  return newArr;
 }

 diffArray([1,2,3,5],[1,2,3,4,5]);


 /**
function toFindDuplicates(arry) {
    const uniqueElements = new Set(arry);
    const filteredElements = arry.filter(item => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
        } else {
            return item;
        }
    });

    return [...new Set(uniqueElements)]
} */
/**
 * 
toFindDuplicates();
function toFindDuplicates() {
    let arry = [1, 2, 1, 3, 4, 3, 5];
    let resultToReturn = false;
    // call some function with callback function as argument
    resultToReturn = arry.some((element, index) => {
        return arry.indexOf(element) !== index
    });
    if (resultToReturn) {
        console.log('Duplicate elements exist'
            ');
        }
        else {
            console.log('Duplicates don'
                t exist ');
            }
        }
 */
/**
 * 
array1 = array1.filter(val => !array2.includes(val));
 */

/** MEEEEEEEEEEEEEEEEEEEE
function diffArray(arr1, arr2) {
const newArr = arr1.concat(arr2);
const newi = new Set(newArr);
let or;
const fil = newArr.filter(i => {
  if(newi.has(i)){
    or = i;
    console.log(or)
    return or;
  }else {
    newi.delete(i);
 }
});
 console.log(fil);
 return fil
}
 */




//Seek and Destroy--------------------------
function destroyer(arr){
  return arr;
}

destroyer([1,2,3,1,2,3],2,3);


