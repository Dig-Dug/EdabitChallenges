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

//https://regex101.com/
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
const last = str.charAt(str.length - 1);

function confirmEnding(str, target) {

  let reg = /[a-z]{0,7}$/; 

  console.log(reg.test(str));
  
  if(str = target.match(reg)){

     return true;
  }
  return false

  }
  /*
  let uu = target.charAt(target.length -2);
let ff = str.charAt(str.length -2);
for(let i = 0; i < str.length; i++){
if(uu == ff){
  
 console.log(uu );
  return true}
return false
  };
 
} */
/**
 *GIVES SOME False and True
 * target = /[a-z]{6,7}$/; 
  console.log( target.test(str));
  let z =  str = target.test(str)? true : false;
 return z;  
 */
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
/**Hint 1
You should start by splitting the string into an array of words.
Split the sentence. //sp
Hint 2
You should make the word lowercase//low before making the first letter uppercase.
Use replace method on each word to capitalize the first letter of 
each word.
Hint 3
You will need to create a new string with pieces of the previous
one and at the end merge everything into a single string again.
In replace method, give first argument as the position of the first 
letter using charAt. For second argument write a function
 to return the capitalized letter as the replacement. */

/**let result = text.replace(/blue|house|car/gi, function (x) {
  return x.toUpperCase();
}); */

 function titleCase(str) {
  let low = str.toLowerCase();
  let sp = low.split(" ");
  //down map it "const uppercased = names.map(name => name.toUpperCase());" 
  sp.forEach(re => console.log(re.charAt(0).toUpperCase())); 

  //console.log(p.replace('dog', 'monkey'));
//const array3 = array1.concat(array2);
/**
 * let low = str.toLowerCase()
  let sp = str.split(" ");
let u = str.replace(low.charAt(0), sp.map(n => n.toUpperCase()))
 */

/**
 * const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join(" ");
console.log(str2);
 */
console.log(sp)
  

  return str;
}

titleCase("I'm a little tea pot");
//titleCase("sHoRt AnD sToUt")


 //_________________________Slice and Splice___________________
/**Hint 1
Create a copy of the second array inside of the function. 
This will ensure that the original array is not mutated.
 This can be done by using the slice operation on the second array, 
 and assign it to a variable.

Hint 2
Loop through all of the items in the first array. 
For each item in the first array splice it into the
 copied array in the index given as argument.

Hint 3
Increment the index after performing the splice.  */
 function frankenSplice(arr1, arr2, n) {

/*   console.log(arr1,arr2,n)
  arr2 = [...arr1];
  return arr2; */
  let r = arr2.slice() // copy
  
  let i= 0
  for(n in arr1){
    arr1.splice(r, i += 1)
    n++; 
    r.push(n)
console.log(r)

  }
  return r;
}
/**let r = arr2.slice() 
let uu = arr1.slice();
  let i= 0
  
  for(i in arr1){
  let u =  uu.splice( n , i , r)
    i++; 
   r.push(i)
console.log(u)

 }
  return uu; */
frankenSplice([1, 2, 3], [4, 5, 6], 1);


/**_______________Falsy Bouncer ______________________*/
/**Falsy values in JavaScript are
 false, null, 0, "", undefined, and NaN. */

 function bouncer(arr) {
/*   console.log(arr)
  if (arr.includes(NaN,undefined,null,0,"",false)){
    console.log(arr,"ww ")
       return arr.splice(NaN,undefined,null,0,"");
     }
  console.log(arr,"qq")
  return arr; */
  return arr.filter(function(el) {
    console.log(el)
      return el !== false, null, 0, "", undefined, NaN
    })
}
      
//const result = words.filter(word => word.length > 6);


bouncer([7, "ate", "", false, 9]);

/**if( arr.includes(false, null, 0, "", undefined, NaN )){
 return arr.filter(function(el) {
    console.log(el)
      return el !== false, null, 0, "", undefined, NaN
    })}
   
    {return arr}
}
 */


//Where do I Belong___________________________
// sort -> where value(, i ) [i,] return #
/**Hint 1
The first thing to do is sort the array from lower to bigger,
 just to make the code easier. This is where sort comes in, 
 it needs a callback function so you have to create it.

Hint 2
Once the array is sorted, then just check for the first number 
that is bigger and return the index.

Hint 3
If there is no index for that number then you will have to
 deal with that case too. */

  function getIndexToIns(arr, num) {
    let a = arr.sort();
    console.log(a)
      let i = 0;
      let count = 0;
    for(i in a){ 
     
      console.log(num > a[i], count);
   
    }
    
  
    //return num; 
  
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
/**Hint 1
If everything is lowercase it will be easier to compare.
Hint 2
Our strings might be easier to work with if they were 
arrays of characters.
Hint 3
A loop might help. Use indexOf() to check if the letter
 of the second word is on the first. */
function mutation(arr) {
  let r = [...arr]
  //r.split(" ");
  let i = "";
  let j = ""
  for(i in arr){ console.log(arr[i])
    for(j in arr){
      if(arr.indexOf(i) == arr.indexOf(j))
 console.log(arr[j], "w")
 return true;
  }} return false;
 //console.log(r.split(" "))
 
 }
 function mutation(arr) {
  //.toLowerCase()
  let low = arr.map(name => name.toLowerCase().split(" "));
  let i = 0;
  for(i in arr){
    if(low.indexOf(0) === low.indexOf(1)){
      console.log(low.indexOf(0) == low.indexOf(1));
      return true; 
    }else{
      return false;
    }
    
  }
  //console.log(arr, low);
  return arr;
  }
  
  function mutation(arr) {
    let cop = [...arr];
    const o = cop.map(name => name.toLowerCase().split(''));
    for(let i = 0; i < arr.length; i++){
      console.log(o[i]);
    
      console.log(o.indexOf(0) == o.indexOf(1))
      if(o.indexOf(0) == o.indexOf(1)){
        return true;
      } else if(o.indexOf(0) != o.indexOf(1)) {return false
      }
    }
    
    }

mutation(["hello", "hey"]);

/**
 * let text = "How are you doing today?";
   const myArray = text.split(" ");
 */



//Chunky Monkey----------------------------------

/**Our goal for this Algorithm is to split arr (first argument) 
into smaller chunks of arrays with the length provided
 by size (second argument). 
 There are 4 green checks (objectives) our code needs 
 to pass in order to complete this Algorithm:

(['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5] */
/**Hint 1
The links above suggest to use Array.push(), 
so let’s start by first creating a new array 
to store the smaller arrays we will soon have like this:

var newArray = [];
Hint 2
Next we’ll need a for loop to loop through arr.

Hint 3
Finally, we need a method to do the actual splitting 
and we can use Array.slice() to do that. The key to 
this Algorithm is understanding how a for loop, size, 
Array.slice() and Array.push() all work together. */

//push slice
function chunkArrayInGroups(arr, size)  { 
  let o = arr.splice(0, size);
  let i = arr.splice(-0,size);
  var two = [o,i];  
  console.log(o,i)
  console.log(two)
      return two; 
  }

chunkArrayInGroups(["a", "b", "c", "d"], 2);


var newArray = [];
let i = 0;
for( i in arr){

}
/**
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);  // expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
*/
