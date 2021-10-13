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


function factorialize(num){
    
    let n = 0
    for (let i = 0; i <= num; i++){
    n++;
    i * n
    //num = i * n; 
    console.log( i * n, num)
    
    
    }
    
    return num;
    }
    
    factorialize(5);