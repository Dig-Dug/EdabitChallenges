

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); // 7

let complexArray = [
     [{one: 1,two: 2},{three: 3,four: 4 }],
     [{  a: "a", b: "b"},{ c: "c", d: "d" }]
    ]; 
    console.log(complexArray);

let yourArray = ["0",true,2,3,4]; // Change this line


/******Access an Array's Contents Using Bracket Notation */
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "lol"
// Only change code above this line
console.log(myArray);


/******Add Items to an Array with push() and unshift() */
/**
 * the push() method adds elements to the end of an array,
 *  and unshift() adds elements to the beginning. 
 */

 function mixedNumbers(arr) {
    // Only change code below this line
  arr.push(7,'VIII',9); // end
  arr.unshift('I',2,'three'); //beginning
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));


  /*********Remove Items from an Array with pop(end) and shift(beginning)*/

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));


///***Remove Items Using splice(3 params possible)***************** */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4) //sum to the value of 10
// Only change code above this line
console.log(arr); //10

/*********Add Items Using splice()______________ */
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3; //second 12 is removed
const amountToDelete = 1; // # of elements to remove
//
numbers.splice(startIndex, amountToDelete, 13, 14); //left args(13,14)
//inserted at same index

console.log(numbers); //[ 10, 11, 12, 13, 14, 15 ]

/**
 We have defined a function, htmlColorNames, which takes an array of
  HTML colors as an argument. Modify the function using splice()
   to remove the first two elements of the array and add
    'DarkSalmon' and 'BlanchedAlmond' in their respective places.
 */

function htmlColorNames(arr) {
    // Only change code below this line
  let firstTwo = 0;
  let add = 2;
  arr.splice(firstTwo, add, 'DarkSalmon','BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
 //htmlColorNames should return ["DarkSalmon", "BlanchedAlmond",
 // "LavenderBlush", "PaleTurquoise", "FireBrick"]

  console.log(htmlColorNames(['DarkGoldenRod',
  'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


  /***************Copy Array Items Using slice(2 params)''''''''''''''' */
  //copies to a new array
  //1st param= begin of extraction 2nd param= where to stop

  /**
   * We have defined a function, forecast, that takes an array 
   * as an argument. Modify the function using slice() to extract
   *  information from the argument array and return a new array
   *  that contains the string elements warm and sunny.
   */

   function forecast(arr) {
    // Only change code below this line
  let arr2 = arr.slice(2,4);
    return arr2; // warm and sunny.
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny',
   'cool', 'thunderstorms']));


   /**********Copy an Array with the Spread Operator_________ */

  //copying an array
   let thisArray = [true, true, undefined, false, null];
   let thatArray = [...thisArray]; 


   function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
  let obj = [...arr];
  obj.push(arr)
  
  let newArr = obj.splice(0,5);
  //newArr.splice(0,1,num)
      // Only change code above this line
      num--;
      console.log(newArr);
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));
