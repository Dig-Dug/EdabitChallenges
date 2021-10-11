

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
   'cool', 'thunderstorms']));  // warm, sunny


   /**********Copy an Array with the Spread Operator_________ */
/**
 * The code above will copy all of the elements into newArr but
 *  will also reinitialise newArr with every new iteration of
 *  the while loop.
A new variable should first be initialised using 
the spread operator - let obj = [...arr];
 - then this variable should be added to the newArr
  for every iteration of the while loop.
 */
  //copying an array
   let thisArray = [true, true, undefined, false, null];
   let thatArray = [...thisArray]; 


   function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
        // Only change code above this line
        num--;
        //console.log(obj)
        return newArr;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));



  /*********__*******Combine Arrays with the Spread Operator______ */
/**
 let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
 let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
 
 //thatArray would have the value ['basil', 'cilantro', 'sage', 
                    'rosemary', 'parsley', 'thyme', 'coriander'].
 */

function spreadOut(){
  let fragment = ['to','code'];
  let sentence = ['learning', ...fragment, 'is','fun'];
  return sentence;
}
console.log(spreadOut());

/****Check For The Presence of an Element With indexOf()__________ */

/**
 let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); -1
fruits.indexOf('oranges'); 2
fruits.indexOf('pears'); 1
 */
function quickCheck(arr, elem){
// Only change code below this line
if(arr.indexOf() ? elem: "arr" ?  false: true){
  console.log("33-----------------------")
  if(elem == "mushrooms" ) {
      console.log("22-----------------------")
  return false;
    }
  console.log(arr)
      return true;
    }
    return false;
  // Only change code above this line
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));




/**********Iterate Through All an Array's Items Using For Loops::::::. */
/* function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]); // 12,14,8 */

/**
Modify the function, using a for loop, to return a filtered version 
of the passed array such that any array nested within arr containing
elem has been removed.
 */
function filteredArray(arr,elem){
  let newArr =[];
   // Only change code below this line
for(let i = 0; i < arr.length; i++){
  if (arr[i].indexOf(elem) == -1) {
    newArr.push(arr[i]);
  }
}
// Only change code above this line
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3],
                           [3, 13, 26], [19, 3, 9]], 3));

                      

/***Create complex multi-dimensional arrays______________ */
let nestedArray = [
  ['deep'], [['deeper'], ['deeper'] ],
  [
    [['deepest'], ['deepest']],
    [[['deepest-est?']]]
  ]
];
/**
 * The deep array is nested 2 levels deep.
 *  The deeper arrays are 3 levels deep. 
 * The deepest arrays are 4 levels,
 *  and the deepest-est? is 5.
 */
 console.log(nestedArray[2][1][0][0][0]); //deepest-est?
 nestedArray[2][1][0][0][0] = 'deeper still'; //<- reset it
 console.log(nestedArray[2][1][0][0][0]); //<- deeper still


/* We have defined a variable, myNestedArray, set equal to an array. 
Modify myNestedArray, using any combination of strings, numbers, 
and booleans for data elements, so that it has exactly
 five levels of depth (remember, the outer-most array is level 1).
  Somewhere on the third level, include the string deep, 
  on the fourth level, include the string deeper,
  and on the fifth level, include the string deepest. */
//

let myNestedArray = [ //1
  // Only change code below this line
 [   //2
   ['deep', false, 1, 2, 3, 'complex', 'nested'], // 3
  [ ['deeper', 'shift', 6, 7, 1000, 'method'], 
   
      [ 
        ['deepest', false, true, 'spread', 'array'] //5 
      ],
     ['', 1327.98, '', 'slice', 'push']
    ],
   ['', 1.3849, 7, '8.4876', '', 'depth']
  ]
  // Only change code above this line
];

console.log(myNestedArray);


/******Add Key-Value Pairs to JavaScript Objects**************** */

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
//add an additional property
tekkenCharacter.originCountry = 'south korea';
//add this property with bracket notation
tekkenCharacter['loco'] = 'esquizo';
// with variable
const eyes = 'eye color';
tekkenCharacter[eyes] = 'blue';

console.log(tekkenCharacter);

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
}
// Only change code below this line
foods.bananas = 13;
foods['grapes'] = 35;
const wot = 'strawberries';
foods[wot] = 27;
// Only change code above this line

console.log(foods);

/************Modify an Object Nested Within an Object */

let nestedObject = {  // 3 props id,date,data
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8  // <- to update
    }
  }
};

nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject);

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;


///*********Access Property Names with Bracket Notation__________ */

/* let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood]; */
let foodsz = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
return foodsz[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));


/********Use the delete Keyword to Remove Object Properties______ */
/**
 * several common operations you can perform on objects so you 
 * can become comfortable applying these useful data structures 
 * in your programs
 */
 let foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods1.oranges; 
delete foods1.plums;
delete foods1.strawberries;
// Only change code above this line

console.log(foods1);





/******Check if an Object has a Property_______in_______ */
/**
 * users.hasOwnProperty('Alan');
  'Alan' in users; <------Both of these would return true.
 */
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if ('Alan' in userObj &&
    'Jeff' in userObj &&
    'Sarah' in userObj &&
    'Ryan' in userObj) {
    console.log("e******** e")
    return true;
  }

  return false;
}
// Only change code above this line
console.log(isEveryoneHere(users));


/*Iterate Through the Keys of an Object with a for...in Statement___ */

//for...in statemen
/**
 for (let user in users) {
  console.log(user);
} */
/* for (let user in obj) {
  if (obj[user].online === true) {
    //code
  }
} */

let usersObj ={
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
};
function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
for(let user in usersObj){
  if(usersObj[user].online === true){
    console.log("----------1")  
  result++;
  
}
}console.log("-----------0")
return result 
};
console.log(countOnline(usersObj));


  // Only change code above this line


/******Generate an Array of All Object Keys with Object.keys() */

//generate an array which contains all the keys stored
// in an object using the Object.keys()
let usersz = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
let i = Object.keys(obj);
return i;
  // Only change code above this line
}

console.log(getArrayOfUsers(usersz));


/***********Modify an Array Stored in an Object------------ */
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
/**The function can be written in just two lines of code.
The first line should just use the push() function to add 
the friendparameter to the array found in user.data.friend.
 The second line will return the modified array.
Remember that user must be referenced with the first parameter
 given to the addFriend() function. */

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj = user.data.friends;
  userObj.push(friend);
  console.log(friend);
  return userObj;
  // Only change code above this line
}

console.log(addFriend(user, 'Pedro'));
console.log(user);