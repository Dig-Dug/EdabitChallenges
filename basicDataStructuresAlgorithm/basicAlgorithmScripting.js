/******Convert Celsius to Fahrenheit */
/**
 * 
To convert temperatures in degrees Celsius to Fahrenheit,
 multiply by 1.8 (or 9/5) and add 32.
 Example: (30°C x 1.8) + 32 = 86°F
 */
function convertToF(celsius) {
    let farenheit = (celsius * 1.8)+32; 
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
      for(let i = 0; i <= num.length; i++){
       
        num = num * factorialize(num[i] -1)
        console.log(num);
        n =  num--;
        factorialize(num)
      // console.log(n);
        let o = n * num
 console.log(o);
      return o;
       
 } 
       n++; 
       console.log(n," w")
       return n;
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
  let stro = "";
for(let i =0; i <= str.length;i++){
    let word = str.split(' ');
  str = word[i]; 
  console.log(str.length, " www")
       if(str != 0){
         console.log(word.length, " w0ww");
let glob = Math.max(str.length);
stro++;
str = glob; return str
      }else {
 stro = str[i];
console.log(stro,"ee")
 return Math.max(stro.length);
      }
 } 
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");



/***_________________**Return Largest Numbers in Arrays */
function largestOfFour(arr) {
  let i =0;let j = 0;
  for( i  in arr){
   //let u = Math.max(i);
   //console.log(i)
     for(j in arr){
       let r = arr[i][j]
console.log(r,"nope")
//return r
 //console.log(Math.max(i))
 //return  Math.max(r);
    } 
    
  }
  //console.log(arr)
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);