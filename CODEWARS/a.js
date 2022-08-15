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



