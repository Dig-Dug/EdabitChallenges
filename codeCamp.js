/**
 * var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];


arr[3] is [[10, 11, 12], 13, 14], 
arr[3][0] is [10, 11, 12], 
and arr[3][0][1] is 11.
 */
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

//console.log(myData);

//PUSH

var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])
//console.log(arr1,arr2,myArray );

 //**************************POP last element***********************

 var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
//console.log(oneDown);
//console.log(threeArr);
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();


 //**************************shift- first element***********************

 var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
//console.log(removedFromOurArray, ourArray);
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();

//**************************unshift- first element***********************

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
//console.log(ourArray);
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul",35]);
//console.log(myArray);


//**************************Shopping List***********************

var myList = [["q",2],["q",2],["q",2],["q",2],["q",2]];
//console.log(myList);

//***********Write Reusable JavaScript with Functions***************
function reusableFunction(){
    console.log("Hi World");
  }
  
  //reusableFunction();

//*********Passing Values to Functions with Arguments**************
function testFun(param1, param2) {
    console.log(param1, param2);
  }
  //testFun("Hello", "World");

  function functionWithArgs(a,b){
     console.log(a + b);
  } 
  //functionWithArgs(2,3);

  //*********Global Scope and Functions**************
  // Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//fun2();

//*******Local Scope and Functions*********

function myLocalScope() {

    // Only change code below this line => "var"
     myVar = "";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  //***Global vs. Local Scope in Functions******

  var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  console.log(someVar);
  return someVar;
}
myFun();
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

    var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

/*-----Return a Value from a Function with Return------*/
function plusThree(num) {
    return num + 3;
    
  }
  var answer = plusThree(5);

function timesFive(nim){
    return nim * 5;
}
    var s = timesFive(4)

  //console.log(answer, s);

  /**Understanding Undefined Value returned from a Function */
var sum = 0;
function addSum(num) {
  sum = sum + num;
 // console.log(sum);
}
addSum(3);

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();


/*******Assignment with a Returned Value****** */
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
//console.log(processed);



/*******Stand in Line  QUEUE*****''''''''''''''''''*** */
/*Write a function nextInLine which takes an array (arr)
 and a number (item) as arguments.
Add the number to the end of the array, 
then remove the first element of the array.
The nextInLine function should then return 
the element that was removed.*/

function nextInLine(arr, item) {
 // Only change code below this line
 arr.push(item);
 item = arr.shift();
 
return item;
// Only change code above this line


  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


