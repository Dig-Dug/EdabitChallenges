/******Convert Celsius to Fahrenheit */
/**
 * 
To convert temperatures in degrees Celsius to Fahrenheit,
 multiply by 1.8 (or 9/5) and add 32.
 Example: (30°C x 1.8) + 32 = 86°F
 */
function convertToF(celsius) {
  let farenheit = (celsius * 1.8) + 32;
  console.log(farenheit);
  return farenheit;
}

convertToF(30);


/***********Reverse a String----------- */
/**Hint 1

 You can solve this challenge by creating a new string
  (initializing it to a blank string “”) and then
 iterating the string starting from the
  last character through the first character
 and the concatenating each character to the new string. 
 After iterating through all the characters in the string,
  you return the new string. */

function reverseString(str) {
  /**
   * split ["h", "e", "l", "l", "o"]
   * reverse  ["o", "l", "l", "e", "h"]
   * join "olleh"
   */
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

/********Factorialize a Number************_____n! */
// # = n <- factorial = n+ <- <= n


/* function factorialize(num){
    
    let n = 0
    for (let i = 0; i <= num; i++){
    n++;
    i * n
    //num = i * n; 
    console.log( i , n, num)
    
    
    }
    
    return num;
    }
    
    factorialize(5); */
function factorialize(num) {
  let n = 0;
  if (num == 0) {
    console.log("ako")
    return 1;
  }
  for (let i = 0; i <= num; i - 1) {
    n = factorialize(num - 1)
    num = n *= num
    console.log(num, n);
    return num;
  }
}

factorialize(5);

/********Find the Longest Word in a String******* */
/**Hints
Hint 1
You will need to loop through the words in the string.

Hint 2
You will need to figure out a way to keep track globally of the greatest current length.

Hint 3
Do you remember how to get the length of strings?

const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);
// expected output: "Life, the universe and everything. Answer: 42"


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
*/

/* function findLongestWordLength(str) {
  return str.length;
} */

function findLongestWordLength(str) {

  return Math.max(...str.split(' ').map((word) => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");




/***_________________**Return Largest Numbers in Arrays */
function largestOfFour(arr) {
  let i = 0;
  
  let orr = [];
   while(i < 4){
 for (i in arr) {
 
orr.push(Math.max(...arr[i]))
console.log(orr )

  }
 arr += orr;
 console.log(orr, "oh my")

  return  orr;
   }
} 

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



/*************Confirm the Ending ********regular expressions***/
//str.substring("",target.length == 13)) <--
/**const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"
/**const paragraph = 'The quick brownbarked.';
const regex = /[A-Z]/g;
const found = str.match(regex); */
console.log(str.substring(2));
// expected output: "zilla" */

function confirmEnding(str, target) {
  str = target.substring("") ? true : false;
  return str;
}
function confirmEnding(str, target) {
  let reg = /[a-z]{2,5}$/; 
  
  if(target = str.match(reg)){
   console.log(str.match(reg))
    console.log("wsk");
     return true
  }else{ 
  console.log("www");
   return false
  }
  }
/**REGULAR EXPRESSIONS!!!!   const regex = /[a-z]{2,5}$/; 2 to 5
 * let last = /n$/;  
  let lost = last.test(target);
  console.log(lost)

  return str;
 */

/**if( str =  str.substr(str-1) && target == target.substring(target-1) ) {
   console.log( str, target)
return true;   
 }
 //console.log(str,target)
 return false; */

confirmEnding("Bastian", "n");


/***********Repeat a String Repeat a String */
function repeatStringNumTimes(str, num) {
  let i = ""
for ( i in str) {
 if(num < 0){
  return "";
}
 i = Array(num + 1).join(str);
  console.log(i);
  return i
}

}
repeatStringNumTimes("abc", 3);


/**********Truncate a String*********** */

/**Truncate a string (first argument) if it is longer
 *  than the given maximum string length (second argument). 
 * Return the truncated string with a ... ending. */

 function truncateString(str, num) {
  if(str.length > num){
 
    return str.slice(0, num) + "...";
  //A-tisket...
  } else {
    return str;
}
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


/**Finders Keepers_________________________
Create a function that looks through an array arr 
and returns the first element in it that passes a 'truth test'.
 This means that given an element x, the 'truth test' is passed
 if func(x) is true. If no element passes the test, 
 return undefined. */

 function findElement(arr, func) {
  let num = 0;
  for(num in arr) {

    if (func(num) == true) {
      num = arr.find(num => num % 2 === 0);
      console.log("edo", num);
      return num;
    } else {
      return undefined;
    } 
 } 
  }
/**
let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift() //'one' will delete from array
  }
}) // one // two // four

console.log(words);  //['two', 'three', 'four']
 */

findElement([1, 2, 3, 4], num => num % 2 === 0);


/**Boo who__________________________________________
Check if a value is classified as a boolean primitive.
Return true or false.

Boolean primitives are true and false. */

/**You will need to check for the type of the parameter to see if
 *  it is a boolean. */
 function booWho(bool) {
  if( typeof bool == "boolean" ? true : false ){
    return true;
     }
       return false;
     }

booWho(null);

/**if( typeof null === 'object' ? true : false ){
    console.log("uiu")
    return true;
     } */


/**Title Case a Sentence___________________________
Return the provided string with the first letter of each word
 capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise,
 you should also capitalize connecting words 
 like the and of. */

 function titleCase(str) {


  //str.replace(charAt , up);
  let o = str.split(" ");
  o = str.toLowerCase();
  /*  for(o in str){
    console.log(str.charAt().toUpperCase())
    return
  }  */
  let i = o.charAt(0).toUpperCase();
  str.replace(o, i) 
  //o.charo();
  let newS = i;
  //o.split(""); 
  //newS.replace(i, str);
  console.log(str);
  console.log(o);
  console.log(i, newS);
    return str;
 }
 
 titleCase("I'm a little tea pot");


 //_________________________Slice and Splice___________________

 function frankenSplice(arr1, arr2, n) {

  console.log(arr1,arr2,n)
  arr2 = [...arr1];
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


/**_______________Falsy Bouncer ______________________*/
/**Falsy values in JavaScript are
 false, null, 0, "", undefined, and NaN. */

 function bouncer(arr) {
  console.log(arr)
  if (arr.includes(NaN,undefined,null,0,"",false)){
    console.log(arr,"ww ")
       return arr.splice(NaN,undefined,null,0,"");
     }
  console.log(arr,"qq")
  return arr;
}
      



bouncer([7, "ate", "", false, 9]);


//Where do I Belong___________________________
// sort -> where value(, i ) [i,] return #

function getIndexToIns(arr, num) {
  for(num in arr){
    if(num >= num[0]){
      arr.push(num);
      console.log(arr, num);
      return num; 
    }
    console.log("w")
  }
  arr.push(num)
    console.log(arr,"www")
    
    return num;
  }

getIndexToIns([40, 60], 50);


//Math.max(...[11, 10, 10])

/**var p = [35,2,65,7,8,9,12,121,33,99];

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


alert("Max value is: "+p.max()+"\nMin value is: "+ p.min()); */



//Mutations-----------------------------
//true(if string.contains(0, 1))

function mutation(arr) {
  let r = arr.split(" ")
  console.log(arr, r)
  return arr;
}

mutation(["hello", "hey"]);

/**
 * let text = "How are you doing today?";
   const myArray = text.split(" ");
 */
