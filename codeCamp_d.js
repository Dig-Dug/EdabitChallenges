/////*****Profile Lookup       ****** */


// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        console.log("here")
        return contacts[x][prop];
      } else {
        console.log("No such property")
        return "No such property";
      }
    }
  }
  console.log("No such contact");
  return "No such contact";
}



lookUpProfile("Akira", "likes");
/*
if(name[i].hasOwnProperty("firstName")){
    console.log("@@@")
return contacts[i];
}*/




///////////Generate Random Fractions with JavaScript++++++++++++++
function randomFraction() {

  // Only change code below this line
var a = Math.random();
  return a;

  // Only change code above this line
}



/*******************Generate Random Whole Numbers with JavaScript */
function randomWholeNum() {
/**
 * Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number 
down to its nearest whole number.
 */
  // Only change code below this line
  return Math.floor(Math.random() * 10);
}


/////////////Generate Random Whole Numbers within a Range*************
/**
Create a function called randomRange that takes a range myMin and myMax
and returns a random whole number that's greater than or equal to myMin,
and is less than or equal to myMax, inclusive.
 */
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}




///////////////Use the parseInt Function********************
/**
 * var a = parseInt("007");
The above function converts the string 007 to the integer 7.
 If the first character in the string can't be converted into a number,
  then it returns NaN.

Use parseInt() in the convertToInteger function so it converts the
input string str into an integer, and returns it.
 */
function convertToInteger(str) {
  var z = parseInt(str);
  //console.log(str);
  return z;
  }
  
  convertToInteger("56");

  ///////////////////Use the parseInt Function with a Radixxxxxxxxxxx
  //The radix can be an integer between 2 and 36.
  function convertToInteger(str) {
    var z = parseInt(str, 2);
    console.log(str);
    return z;
  }
  
  convertToInteger("10011");

  //Use the Conditional (Ternary) Operator!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function checkEqual(a, b) {
    return a == b ? "Equal": "Not Equal";
    }
    
    checkEqual(1, 2);

/////Use Multiple Conditional (Ternary) Operators_________________-------
function checkSign(num) {
  return num > 0 ?  "positive": num  < 0?
  "negative" : num == 0? "zero": "";
  }
  
  checkSign(10);

/////////////////////Use Recursion to Create a Countdown________
function c (n){
  if(n < 1){
return [];
  }else{
    const cArray = c(n - 1);
    cArray.push(n);
    return cArray;
  }
}
//console.log(c(5)); //[ 1, 2, 3, 4, 5 ]
function countdown(n){
    
  if(n < 1){
  
return [];
  }else {
  let c= countdown(n - 1);
  c.unshift(n)

  return c;
}}

//console.log(countdown(10));
/**
 
countdown(-1) should return an empty array.
countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 */

/***************Use Recursion to Create a Range of Numbers */


function rangeOfNumbers(startNum, endNum){
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(1,5))



