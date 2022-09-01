/**Reversed Strings------------------------------------- */

function solution(str){
    let z = str.split("");
    let rr = z.reverse().join("");
      console.log(rr);
      return rr
}

  solution('world') //'dlrow'

/**Are You Playing Banjo?:_-------------------------------
         * Create a function which answers the question
         *  "Are you playing banjo?".
        If your name starts with the letter "R" or lower
        case "r", you are playing banjo!

        The function takes a name as its only argument, 
        and returns one of the following strings:

        name + " plays banjo" 
        name + " does not play banjo"
        Names given are always valid strings.
*/


function areYouPlayingBanjo(name) {
        // Implement me
        if(name.startsWith("r")){
          return name + " plays banjo";
        }else if(name.startsWith("R")){
        return name + " plays banjo";  
        }
        
        return name + " does not play banjo";
}



/**Can you find the needle in the haystack?----------------
         * 
         * Can you find the needle in the haystack?

        Write a function findNeedle() 
        that takes an array full of junk but containing one "needle"
        After your function finds the needle it 
        should return a message (as a string) that says:
        "found the needle at position " plus the index it 
        found the needle, so:
        Example(Input --> Output)

        ["hay", "junk", "hay", "hay", "moreJunk",
         "needle", "randomJunk"] --> "found the needle at position 5" 
        * 
*/

function findNeedle(haystack) {
    for (n in haystack) {
        console.log(n)
        if (haystack[n] == 'needle') {
          return "found the needle at position " + n;
        }
        }

}

/**Find Maximum and Minimum Values of a List-----------------
 * 
         * Your task is to make two functions ( max and min, or maximum 
         * and minimum, etc., depending on the language ) 
         * that receive a list of integers as input,
         *  and return the largest and lowest number in that list, 
         * respectively.

        Examples (Input -> Output)
        * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
        * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
        * [42, 54, 65, 87, 0]             -> min = 0, max = 87
        * [5]     
        * 
    	* 
*/

var min = function(list){
    let r = Math.min(...list);
    return r
}
  
var max = function(list){
    let rr = Math.max(...list)
    return rr;
}

/**Invert values ----------------------------------------------
     * Given a set of numbers,
     * return the additive inverse of each. 
     * Each positive becomes negatives, 
     * and the negatives become positives.

    invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
    invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
    invert([]) == []
    You can assume that all values are integers. 
    Do not mutate the input array/list.
*/

function invert(array){
    
}



/**Sentence Smash....--------------------------------------------
    Write a function that takes an array of words and smashes
    them together into a sentence and returns the sentence. 
    You can ignore any need to sanitize words or add punctuation,
    but you should add spaces between each word. Be careful,
      there shouldn't be a space at the beginning or the end 
      of the sentence!

    Example
  ['hello', 'world', 'this', 'is', 'great']  =>  
  'hello world this is great' 
*/

function smash (words) {
  let rr = 0
  
  let u = ""
  for(let r =0; r < words.length; r+= 1){
    u = words[r]
   r++
   console.log(u)
   //return u
  }
   return u
};


/**Volume of a Cuboid-------------.....--------------------------
 *  Bob needs a fast way to calculate the volume of a 
 *  cuboid with three values: the length, width and height of the
 *  cuboid. Write a function to help Bob with this calculation.
*/

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    console.log(length,width,height)
    return(length * width * height)
  }
}


/**Area or Perimeter-------------------------------------------
  * You are given the length and width of a 4-sided polygon.
  The polygon can either be a rectangle or a square.
  If it is a square, return its area. If it is a rectangle, 
  return its perimeter.

  Example(Input1, Input2 --> Output):

  6, 10 --> 32
  3, 3 --> 9
  Note: for the purposes of this kata you will assume 
  that it is a square if its length and width are equal,
  otherwise it is a rectangle. 
 */
const areaOrPerimeter = function(l , w) {
    let r = 0;
    if(l !== w){
      r = (l + w)*2 ; //perimeter
      console.log(r, "<---")
    }
    return l == w ? l * w : r;
};

/**Convert a Number to a String!---------------------------
 
   * We need a function that can transform a number (integer) 
   * into a string.
   What ways of achieving this do you know?
    Examples (input --> output):
    123  --> "123"
    999  --> "999"
    -100 --> "-100"
    * 
*/

function numberToString(num) {
  return num.toString();
}

/**Opposites Attract.........................................
   * 
   * Timmy & Sarah think they are in love,
   *  but around where they live, they will only know once 
   * they pick a flower each. If one of the flowers has an 
   * even number of petals and the other has an odd number of petals
   *  it means they are in love.
    Write a function that will take the number of petals of each flower
    and return true if they are in love and false if they aren't.
  * 
*/

function lovefunc(flower1, flower2){
  // moment of truth
}


/**Transportation on vacation..............................
     * Every day you rent the car costs $40.
     *  If you rent the car for 7 or more days,
     *  you get $50 off your total. Alternatively,
     *  if you rent the car for 3 or more days, you 
     * get $20 off your total.
       Write a code that gives out the total 
      amount for different days(d).

*/


function rentalCarCost(d) {
  // Your solution here
}

/**Sum without highest and lowest number.....................................
   * Sum all the numbers of a given array ( cq. list ), 
   * except the highest and the lowest element 
   * ( by value, not by index! ).
   The highest or lowest element respectively
    is a single element at each edge, even if
     there are more than one with the same value.
    Mind the input validation.

  Example
  { 6, 2, 1, 8, 10 } => 16
  { 1, 1, 11, 2, 3 } => 6 
  * 
  * 
 * */


//Grasshopper - Personalized Message..................................
function greet (name, owner) {

    return name == owner ? 'Hello boss': 'Hello guest';
}


//Calculate average-----------------------------------------------
function find_average(array) {
  if(array != NaN ){
  let lon = array.length;
 let sum = array.reduce((a, b) => a + b, 0);
  
  //console.log(lon,"opopo");
  console.log(sum/lon)
  return sum/lon;
  }else {
    return 0;}

}



//Beginner - Reduce but Grow-----------------------------------
/**
   *Given a non-empty array of integers, return the result 
  of multiplying the values together in order. Example:

  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

 */

function grow(x){
  return x.reduce((a, b)=> a*b, 1)
}




//Square Every Digit--------------------------------------
function squareDigits(num){
    let r = num.toString().split("");
    var rr = r.map(Number);

    let nn = rr.filter(numbersOnly);
    
    return nn;
  //return Math.pow(num, 2);
}
function numbersOnly(value) {
          // it will show all the values.

          if (typeof (value) === 'number') {
            let r = Math.pow(value,2)
            console.log (r);  
            return r;
          }
}


//SUm of Positive-----------------------------------------
function positiveSum(arr) {
  let z = arr.filter(a => a > -1) //only positive values
  let r = z.reduce((a, b) => a + b, 0 );
   console.log(z,"wwww")
  return r //15
}

//TEST assert.strictEqual(positiveSum([1,2,3,4,5]),15);



//String ends with?_______________------------------------
/**Complete the solution so that it returns true if the
   *  first argument(string) passed in ends with the
   *  2nd argument (also a string).

  Examples:

  solution('abc', 'bc') // returns true
  solution('abc', 'd') // returns false
 */

function solution(str, ending){
    console.log(str.endsWith(ending));
      return str.endsWith(ending)
}


/**Sum of two lowest positive integers--------------------
  Create a function that returns the sum of the two lowest positive 
  numbers given an array of minimum 4 positive integers. 
  No floats or non-positive integers will be passed.
  For example, when an array is passed like [19, 5, 42, 2, 77], 
  the output should be 7.
  [10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
function sumTwoSmallestNumbers(numbers) { 
  let aa = Math.min.apply(null,numbers)
  let min1 = numbers.filter(a => a != aa && a >= 0 &&
  a % 1 == 0);
  let bb = Math.min.apply(null,min1)
 // console.log(aa, min1, bb)
 /** numbers.sort((a,b) => a - b);
     return numbers[0] + numbers[1]; */
  return aa + bb;

}


function greet(name){
  console.log(name)
  return "Hello, " + name + " how are you doing today?"
}
function stringToArray(string){
  let r = string.split(" ")
  return r
}

//Vowel Counter-----------------------------------------------------
function getCount(str) {
  let vowels = ['a','e','i','o','u'];
 let count = []
   for(let i = 0; i < str.length; i++){
    let r = str[i];
     if (count[r]){
       
       count[r] += 1
       
       console.log(count)
       
     }else{count[r] = 1}
     }return count
}

//Calculate BMI--------------------------------------------------
function bmi(weight, height) {
    let bmi = Math.round(weight/(height * height));
    
  console.log(bmi, weight,height)
  /* return bmi <= 18.5? "Underweight": 25.0 ? "Normal": 
    30.0? "Overweight" : bmi > 30 ? "Obese": "";*/
    switch(bmi){
        case(bmi <= 18.5):return "Underweight";
          case(bmi <= 25.5):return "Normal";
          case(bmi <= 30):return "Overweight";
          case(bmi > 30):return "Obese";
    }
}

//Sum mixed Array------------------------------------
function sumMix(x){
  //pors(x)
    //let f = x.filter(a => a != "Number")
    let o;
     let f = [];
    for(n in x){
      let r = x.reduce((a,b)=> a + b, 0)
      
      //console.log(r)
      f = parseInt(x[n])
     
    console.log(f)
      
    }
    //console.log(f)
    return f
    //console.log(x)
}
  
/*
  function pors(x, base) {
    const parsed = parseInt(x, base);
    for(n in x){
    if (isNaN(parsed)) { return 0; }
    console.log(parsed + n)
    return parsed;
  }}
*/

//Third angle of triangle_---------------------------------------
function otherAngle(a, b) {
  let degree = 180; //degree
  let sum = a + b; // sum of two known angles
  return degree - sum ; //find third angle
}

//const otherAngle = (a,b) => 180 - a - b

//Isograms---------------------------------------------------
function isIsogram(str){

  let s = str.split("");
  let f = s.filter((a, b) => s.indexOf(a) != a); //werks!!!
  console.log(f)
}

//*******************
let multiply = (a,b) =>{
  return a * b;
}
//+++++++++++++++++++++
//L1:Set Alarm-----------------------------------
function setAlarm(e, v){
  
  console.log(e,v)
  return e && v == true? false : e  == false && v == true ?
    false : e == true && v == false ? true : false;
  }

















