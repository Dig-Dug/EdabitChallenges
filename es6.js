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
const user = { name: 'John Doe', age: 34 };
const { name, age } = user;


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const { today,tomorrow} = HIGH_TEMPERATURES;
// Only change code above this line




/**((((((Use Destructuring Assignment to Assign Variables from Objects)))))) */
const usert = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = usert;

const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES1;
// Only change code above this line


/**(Use Destructuring Assignment to Assign Variables from Nested Objects)))))) */
const user2 = {
  johnDoe: {agee: 34,email: 'johnDoe@freeCodeCamp.com'}
};
//extract
const { johnDoe: { agee, email }} = user2;
//extract and assign variables
const { johnDoe: { agee: userAgee, email: userEmail }} = user2;


const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const {today :{low:lowToday , high:highTodayy }} = LOCAL_FORECAST;
// Only change code above this line



/******((((Use Destructuring Assignment to Assign Variables from Arrays)))))))))) */
/*const [a, b,,,,c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);  // 1 2

  let a = 8, b = 6;

[a, b] = [b, a];*/


/*********(Use Destructuring Assignment with the Rest Parameter
   *******************to Reassign Array Elements)*/
  //proto slicing
 const [e, d, ...arrp] = [1, 2, 3, 4, 5, 7];
 console.log(e, d); //1,2
 console.log(arrp); //3,4,5,7


 const source = [1,2,3,4,5,6,7,8,9,10];
   function removeFirstTwo(list) {
   // Only change code below this line  //const arr = list;
   const [,, ...arri] = list ;
   // Change this line
   console.log("this -->" , arri);
   // Only change code above this line
   return arri;
 }
 const arri = removeFirstTwo(source);


 /**((((Use Destructuring Assignment to Pass an Object as a Function's Parameters)))) */

/* const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
const profileUpdate = ({ name, age, nationality, location }) => {
 
}
const profileUpdate = (stats) => {
 const  { min,max } = stats;
}*/
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
//const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code below this line
const half = ({  min , max}) => {
  console.log((min + max)/ 2.0);
 return (min + max)/ 2.0;
  }

// const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line
