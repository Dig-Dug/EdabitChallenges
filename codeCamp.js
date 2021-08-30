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
console.log(myList);

//***********Write Reusable JavaScript with Functions***************
function reusableFunction(){
    console.log("Hi World");
  }
  
  //reusableFunction();

//*********Passing Values to Functions with Arguments**************
function testFun(param1, param2) {
    console.log(param1, param2);
  }
  testFun("Hello", "World");

  function functionWithArgs(a,b){
      console.log(a + b);
  } 
  functionWithArgs(2,3);

  //*********Global Scope and Functions**************