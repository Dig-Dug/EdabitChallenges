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
    for (let i = 0; i <= len-1; ++i) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();