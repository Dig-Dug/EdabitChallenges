/**
 * There are many methods to use with console to output messages.
 *  log, warn, and clear to name a few.
 */

//console.clear();

/**
 * console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
In order, the console will display the strings
:    string, number, object, and object.

Boolean, Null, Undefined, Number, String, and Symbol
(new with ES6) and one type for mutable items: Object
 */
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//The console output should show that Sum of array values is: 6.
let myArray = [1, 2, 3];
let previous = 2.5;
let arraySum = myArray.reduce((previous, current =>  previous + current));
console.log(myArray);
console.log(`Sum of array values is: ${arraySum}`);

/**Fix the string so it either uses different quotes for the href value,
 *  or escape the existing ones. Keep the double quote
 *  marks around the entire string. */
let innerHtml = "<p>\Click here to<a href='#Home'>return home</a></p>";
console.log(innerHtml);

/**
Fix the code so the variable result is set to the value returned
 from calling the function getNine. 
 */
function getNine() {
    let x = 6;
    let y = 3;
    
    return x + y;
  }
  
  let result = getNine();
  console.log(result);

  function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower( base, exp);
  console.log(power);


  //Catch Off By One Errors When Using Indexing
  //Off by one errors (sometimes called OBOE)
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) { //loops one too many times
  //console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {  //loops one too few times(misses 0)
 // console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {  //correct
 // console.log(alphabet[k]);
}

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();

/**
 * The myFunc() function contains an infinite loop 
 * because the terminal condition i != 4 will never evaluate to false
 *  (and break the looping) - i will increment by 2 each pass,
 *  and jump right over 4 since i is odd to start. 
 * Fix the comparison operator in the terminal
 *  condition so the loop only runs for i less than or equal to 4.
 * 
 * function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
 */


  function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }

  //Use Caution When Reinitializing Variables Inside a Loop_________
  /**
   * The following function is supposed to create a two-dimensional array
   *  with m rows and n columns of zeroes. Unfortunately, it's not
   *  producing the expected output because the row variable isn't 
   * being reinitialized (set back to an empty array) in the outer loop. 
   * Fix the code so it returns a correct 3x2 array of zeroes,
   *  which looks like [[0, 0], [0, 0], [0, 0]]
   */
   function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
    row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix); //[ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]