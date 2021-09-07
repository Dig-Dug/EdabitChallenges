/*(((((((Create Strings using Template Literals))))))) */
const person = {
    name: "Zodiac Hasbro",
    age: 66
  };
  //you can include other expressions
  //in your string literal, for example ${a + b}.

  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting);


  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
   //-> const failureItems = [];
   const failureItems = [`<li class="text-warning">${result.failure[0]}</li>`,
   
                         `<li class="text-warning">${result.failure[1]}</li>`,
                         `<li class="text-warning">${result.failure[2]}</li>`
                        ];
    failureItems.forEach(arr => console.log(arr));
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  /**((Write Concise Object Literaloooooooooooooooooooooooooooooooooooooooo
 Declarations Using Object Property Shorthand)) */


 const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });  
  //rewritten
  // const getMousePosition = (x,y) => ({x,y});


   const createPerson = (name,age,gender) =>{
        // Only change code below this line
       return {
               name,age,gender
                }; 
      {          
                   
       // Only change code below this line
   }}



   /*//((((((Write Concise Declarative Functions with ES6
W)))))) iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii*///

const persono = {
  nam: "tay",
  sayHello(){
    return `Hi am ${this.nam}`;
  }
};

console.log(persono.sayHello())

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(356);
console.log(bicycle.gear);




/**///////Use class Syntax to Define a Constructor Function */

//camelCase for class declaration
class Sp{
  //function declared and constructor added(when new is called)
  //initialization
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new Sp('jupitor');
console.log(zeus);



// Only change code below this line
class Vegetable{
  constructor(name){ this.name = name;}
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


/**[[[[[[[[Use getters and setters to Control Access to an Object]]]]]]] */

class Book{
  constructor(author){this._author = author;}
  //getter ..private value underscore(not really)
  get writer(){return this._author;}
  //setter
  set writer(updateAuthor){this._author = updateAuthor;}
}
const novel = new Book('anon-yes');
console.log(novel.writer);
novel.writer ='Joseph Mills';
console.log(novel.writer);

//
class Thermostat{
  
  constructor(fahrenheit )
  {this.fahrenheit  = fahrenheit;
    }
 //Create a get method that converts the Fahrenheit 
//attribute to Celsius. Use the formula given to you.
/**Remember that C = 5/9 * (F - 32) and
 *  F = C * 9.0 / 5 + 32, where F is the value of temperature
 *  in Fahrenheit, and C is the value of the same temperature 
 * in Celsius. */ 

 get temperature() {
  return (5 / 9) * (this.fahrenheit - 32);
}

//Create a set method of the same name as the get method. 
//It should have a parameter that accepts celsius temperature.
// Convert it to fahrenheit, and set it to the attribute.
//set temperature(thermos){this._fahrenheit = thermos;}
set temperature(celsius) {
  this.fahrenheit = (celsius * 9.0) / 5 + 32;
}
}
// Only change code above this line
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/**********(((((((((((((((Create a Module Script))))))))))))))) */


//<script type="module" src="index.js"></script>

//***************Use export to Share a Code Block********** */
export const add = (x,y) => {return x + y;}
//or
const add = (x,y) => {
  return x + y;} 
export {add, /**import */ substract};

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export{uppercaseString,lowercaseString};


//(((((((((((((Reuse JavaScript Code Using import)))))))))))))
//import { add, subtract } from './math_functions.js';

import { uppercaseString, lowercaseString } from './string_functions.js' 
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");



/////***********Use * to Import Everything from a File */
//import * as myMathModule from "./math_functions.js";

import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


//*******************Create an Export Fallback with export default
//no let, var or const. only one value for default export
export default function(x,y){
  return x + y;
}

/************Import a Default Export */
//import add from "./math_functions.js";



//*************Create a JavaScript Promise**************** */
//constructor function (new,  2 params)
const myPromise = new Promise((resolve, reject)=>{
/**
 * if(condition here){resolve "resolve"}
 * else{reject "reject"}
 */
})

//*****Complete a Promise with resolve and reject */
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve ("We got the data");
  } else {  
   reject("Data not received");
  }
});
console.log(makeServerRequest);

/*********Handle a Fulfilled Promise with then */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result  =>{
  console.log(result);
  })

  /***********Handle a Rejected Promise with catch */
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  makeServerRequest.catch(error =>{
    console.log(error);
  })