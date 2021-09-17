//////////Using the Test Method/////////////
let test = "loloopo";
let testo = /o/;
//console.log(testo.test(test)); // true


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // true

//console.log(result.test(myString))



///Match Literal Strings***********************
let tes = "jo Keving";
let tos = /Keving/;
tos.test(tes);// console.log(tos.test(tes)); // true


let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let resulto = waldoRegex.test(waldoIsHiding);


 /***********Match a Literal String with Different Possibilities */
////You can search for multiple 
//patterns using the alternation or OR operator: |
//For example, if you wanted to match the strings yes or no,
// the regex you want is /yes|no/.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let resultp = petRegex.test(petString);

//*********Ignore Case While Matching */
/**Examples of uppercase are A, B, and C. Examples of lowercase
  are a, b, and c.
  You can match both cases using what is called a flag. */
  //
  let myStringg = "freeCodeCamp";
  let fccRegex = /freeCodeCamp/i; // ignores case - the i flag.
  let resut = fccRegex.test(myStringg);
  //console.log(fccRegex.test(myStringg)); //true


/************Extract Matches************************* */

//You can also extract the actual matches 
//you found with the .match() method.


console.log("Hiiioooo".match(/iii/)); //[ 'iii', index: 1, input: 'Hiiioooo', groups: undefined ]
let r = "/Reg exp/";
let e = "exp";
r.match(e); //[ 'exp', index: 5, input: '/Reg exp/', groups: undefined ]
console.log(r.match(e));

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let resultpp = extractStr.match(codingRegex); // Change this line



/*******Find More Than the First Match */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // g flag for repetition
let resulti = twinkleStar.match(starRegex); // 
console.log(resulti) //[ 'Twinkle', 'twinkle' ]




/////////////Match Anything with Wildcard Period

//if you wanted to match hug, huh, hut, and hum, you can
//use the regex /hu./ to match all four words.


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let re = unRegex.test(exampleStr); //true





/////////Match Single Character with Multiple Possibilities/////////////

/**
 *  Character classes allow you to define a group of characters you
 *  wish to match by placing them inside square ([ and ]) brackets.
 */

/**
 * to match bag, big, and bug but not bog.
 *  You can create the regex /b[aiu]g/ to do this.
 *  The [aiu] is the character class that will only match
 *  the characters a, i, or u.
 */

 let quoteSamplea = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
 let vowelRegex = /([aeiou])/gi; // Change this line
 let ropop = quoteSamplea.match(vowelRegex); // Change this line
 console.log(ropop);
 /**
  * [
  'e', 'a', 'e', 'o', 'u', 'i',
  'e', 'a', 'o', 'e', 'o', 'e',
  'I', 'a', 'e', 'o', 'o', 'e',
  'i', 'o', 'e', 'o', 'i', 'e',
  'i'
]
  */






 ///////////Match Letters of the Alphabet________----------

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Your regex alphabetRegex should match 35 items.
let resultk = quoteSample.match(alphabetRegex); // Change this line

///////Match Numbers and Letters of the Alphabet//////

/**
 * let jennyStr = "Jenny8675309";
   let myRegex = /[a-z0-9]/ig;
 */
   let quoteSample1 = "Blueberry 3.141592653s are delicious.";
   let myRegexx = /[h-s2-6]/ig; // Change this line
   let resultmmm = quoteSample1.match(myRegexx); // Change this line



///////Match Single Characters Not Specified_______________
//set of characters that you do not want to match

//matches all characters that are not a number or a vowel.
let quoteSample2 = "3 blind mice.";
let myRegexy = /[^aeoiu0-9]/ig; // Change this line
let resultT = quoteSample2.match(myRegexy)



//Match Characters that Occur One or More Times_______________+
let difficultSpelling = "Mississippi";
let myRegexo = /s+/gi; // Change this line
let rosti = difficultSpelling.match(myRegexo);
console.log(rosti) //[ 'ss', 'ss' ]

//Match Characters that Occur Zero or More Times______________*
/**
 * match 16 characters
 * match the string A
 * not match any other characters
 */
//let chewieRegex = /Aa*/ig







//////Find Characters with Lazy Matching__________________
/**
 * You can apply the regex /t[a-z]*i/ to the string "titanic".
 *  This regex is basically a pattern that starts with t, ends with i, 
 *  and has some letters in between. -> ["titani"]
 *   ? <-Lazy Matching"titanic""  <- /t[a-z]*?i/ <- ["ti"]
 */

 let text = "<h1>Winter is coming</h1>";
 let myR =  /<[]*?.1>/g; // Change this line
 let rp = text.match(myR);
 
 console.log(rp); //[ '<h1>' ]
 /**
  * Note: Parsing HTML with regular expressions should be avoided, 
  * but pattern matching an HTML string with regular expressions
  *  is completely fine.
  */



 ////////Find One or More Criminals in a Hunt°°°°°°°°°°°°°°°°°°°°°
 //? howmany,
// regex should: -match one criminal (C) in the string C
              // -three criminals (CCC) in the string P1P5P4CCCcP2P6P3
              // -match five criminals (CCCCC) in the string P6P2P7P4P5CCCCCP3P1
            // the empty string ""
            //any criminals in the string P1P2P3
//fifty criminals (CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) 
//in the string P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3
 let reCriminals =/C+/; // 





 ///////******************Match Beginning String Patterns */
















