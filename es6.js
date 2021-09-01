/********Explore Differences Between the var and let Keywords */

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();


/*****Compare Scopes of the var and let Keywords */

function checkScope() {
    let i = 'function scope';
    if (true) {
     let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  checkScope();

  /***Declare a Read-Only Variable with the const Keyword */

  function printManyTimes(str) {

    // Only change code below this line
  
    const SENTENCE  = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log( SENTENCE);
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");

  /***Mutate an Array Declared with const */
  const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
 s[0] = 2;
 s[1] = 5;
 s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();



/*******Prevent Object Mutation9999999999999999999999999 */
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  console.log(PI);
  freezeObj();




  /**m        Use Arrow Functions to Write Concise Anonymous Functions */

  /*var magic = function() {
  return new Date();
}; */

const magic = () => new Date();


//***        Write Arrow Functions with Parametersoooooooooooooooooo */

/**var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5])); */

const myConcat = (arr1, arr2) =>{ "use strict";
  return arr1.concat(arr2);};

console.log(myConcat([1, 2], [3, 4, 5]));




/***UUU((((((((((Set Default Parameters for Your Functions)))))))))) */
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

const increment = (number = 1, value = 1) => number + value;


//(((((((((((((Use the Rest Parameter with Function Parameters))))))))))))) */

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));

//args array and allows us to apply map(), filter() and reduce() on the parameters array.
  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
   }

/**((((((((((((((Use the Spread Operator to Evaluate Arrays In-Place)))))))))))))) */

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);


/**((((Use Destructuring Assignment to Extract Values from Objects() **/