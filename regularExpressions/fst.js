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


 let firstString = "Ricky is first and can be found.";
 let firstRegex = /^Ricky/;
 firstRegex.test(firstString); //true Ricky is there
 let notFirst = "You can't find Ricky now.";
 firstRegex.test(notFirst);
 console.log(firstRegex.test(firstString));

//Use the caret (^)character in a regex to find Cal only 
//in the beginning of the string rickyAndCal.
 let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let resultO = calRegex.test(rickyAndCal); //true



/*****************Match Ending String Patterns________________ */


let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // True is at the end
//let result = lastRegex.test(caboose);


/*************Match All Letters and Numbers_______SHORTHAND____________ */
//shortcut for [a-z]   "\w => [A-Za-z0-9_]"" <-This character class matches upper 
//and lowercase letters plus numbers

let quoteSamplew = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // 36 alphanumeric characters in strings
//123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ
let resulty = quoteSamplew.match(alphabetRegexV2).length;


/*************Match Everything But Letters and Numbers_______________ */
//  \W  <- [^A-Za-z0-9_]

let quoteSampleA = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // find 12 non-alphanumeric characters in the string
// 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ
let resultB = quoteSampleA.match(nonAlphabetRegex).length;



/**************Match All Numbers____________________________ */
//.looking for just digits or[0-9] numbers. <- \d 

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let resultN = movieName.match(numRegex).length;


/************Match All Non-Numbers_______\D  <- [^0-9]________________ */
let movieNamea = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let resultOp = movieNamea.match(noNumRegex).length;



/*************Restrict Possible Usernames____________________ */
//requirements for username 

/*
 1 Usernames can only use alpha-numeric characters.

 2 The only numbers in the username have to be at the end. 
There can be zero or more of them at the end. 
Username cannot start with the number.

3 Username letters can be lowercase and uppercase.

4 Usernames have to be at least two characters long. 
A two-character username can only use alphabet letters as
 characters. */
 let username = "JackOfAllTrades";
 let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
 let resutttlt = userCheck.test(username);




 /**************Match Whitespace_________\s_____________ */

 //return, tab, form feed, and new line characters <-[ \r\t\f\n\v]

 let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); //returns [" ", " "].



/**************Match Non-Whitespace Characters____\S_______ */
// [^ \r\t\f\n\v]
let whiteSpace1 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace1.match(nonSpaceRegex).length; //returns .length(32)


/*******Specify Upper and Lower Number of Matches */

//range of patterns. Quantity specifier /a{3,5}h/ <- match letter a in string "ah"

let A4l = "aaaah";
let A2l = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4l);//true
multipleA.test(A2l);//false

/* Change the regex ohRegex
 to match the entire phrase Oh no only 
 when it has 3 to 6 letter h's. */

 let ohStr = "Ohhh no";
let ohRegex = /h{3,6}/; // Change this line
let resultio = ohRegex.test(ohStr);

console.log(resultio);


/* Change the regex ohRegex to match
 the entire phrase Oh no only when
  it has 3 to 6 letter h's. */


let ohStr1 = "Ohhh no";
let ohRegexX = /Oh{3,6}\sno/ig; // \s <- to include a white space, 
//followed by no to pass all test cases
let resultuu = ohRegexX.test(ohStr1);

console.log(resultuu);



/***********Specify Only the Lower Number of Matches::_________*/
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h"; //haaaaaaaaaaaaa x 100 h
let multipleAb = /ha{3,}h/;
multipleAb.test(A4); //true
multipleAb.test(A2); //false
multipleAb.test(A100); //true
console.log(multipleAb.test(A100));

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let reslt = haRegex.test(haStr); //true





/********************Specify Exact Number of Matches__________ */
let A4j = "haaaah";
let A3j = "haaah";
let A100j = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4j); //false
multipleHA.test(A3j); //true
multipleHA.test(A100j); //false

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let esult = timRegex.test(timStr); //true


/************Check for All or None____________________ */

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british);  //true

let favWord = "favorite";
let favRegex = /favou?rite?/; // Change this line
let rsult = favRegex.test(favWord);


/******Positive and Negative Lookahead__________?=... || ?!... */

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
console.log(checkPass.test(password)) //true
/**
 * Use lookaheads in the pwRegex to match passwords
 *  that are greater than 5 characters long,
 *  and have two consecutive digits.
 */
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);

console.log(result);


/********Check For Mixed Grouping of Characters________() */

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/; //true penguin or pumpkin
testRegex.test(testStr);

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; 
let result = myRegex.test(myString);



/*********Reuse Patterns Using Capture Groups________________ */

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

/**
 * Use capture groups in reRegex to match a string that
 *  consists of only the same number repeated exactly 
 * three times separated by single spaces.
 */

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
repeatNum.match(reRegex);




/********Use Capture Groups to Search and Replace______.replace()_____ */
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); //The sky is blue.

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');


let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/ ; // Change this line
let replaceText = "$3 $2 $1"; // three two one
let result = str.replace(fixRegex, replaceText);


/********Remove Whitespace from Start and End_______________ */
/**
 * Write a regex and use the appropriate string methods 
 * to remove whitespace at the beginning and end of strings.
 */
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line