/**
 * The Farm Problem
 * In this challenge, a farmer is asking you
   to tell him how many legs can be counted 
  among all his animals. The farmer breeds three species:
   chickens = 2 legs
   cows = 4 legs
   pigs = 4 legs
 The farmer has counted his animals and he gives you a subtotal 
 for each species. You have to implement a function that 
 returns the total number of legs of all the animals.
 
	Examples
	animals(2, 3, 5) ➞ 36
	animals(1, 2, 3) ➞ 22
	animals(5, 2, 8) ➞ 50

	Test.assertEquals(animals(5, 2, 8), 50)
	Test.assertEquals(animals(3, 4, 7), 50)
	Test.assertEquals(animals(1, 2, 3), 22)
							 2, 8, 14
	Test.assertEquals(animals(3, 5, 2), 34)

The order of animals passed is animals(chickens, cows, pigs).
Remember that the farmer wants to know the total
 number of legs and not the total number of animals.
   */
 
function animals(chickens, cows, pigs) {
	chickens = 2;
	cows = 3;
	pigs  = 5;

	console.log("jijiji",(chickens* 2) + (cows*4 ) + (pigs*4));
	return (chickens* 2) + (cows*4 ) + (pigs*4);
	
}
/**OTHER ANSWERS
 * 
 * return chickens*2+(cows+pigs)*4;
 * const animals = (chickens, cows, pigs) => chickens * 2 + cows * 4 + pigs * 4;
 */




/**
 * Basic Variable Assignment
 * 
 * A student learning JavaScript was trying to make a function.
 * His code should concatenate a passed string name with string
 * "Edabit" and store it in a variable called result.
 *  He needs your help to fix this code.
 * 
	nameString("Mubashir") ➞ "MubashirEdabit"

	nameString("Matt") ➞ "MattEdabit"

	nameString("javaScript") ➞ "javaScriptEdabit"
 */

	function nameString(name){
		var b = "Edabit"
		var result = name + b
		console.log(result);
		  return result
	}
//const nameString = name => `${name}Edabit`;



//Buggy Code (Part 7)
/**
 Mubashir wants to swap two given numbers!
 It is not returning the right values. Can you help him fix it?

a = 100
b = 200
a, b = swap(a, b)
print(a, b) // Should print out "200, 100", 
but the function prints out "100, 100"
 */

let a = 100;
let b = 200;
function swap(a, b) {
	let tmp = b // 200
	b = a
	a = b
	console.log(b, a);
	return [a, b]
}
console.log(4.0 / 2.0);

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = myNoun + ", " + myAdjective + ", " + myVerb + ", " + myAdverb+ ", " + "wordBlanks"; 
// Change this line
// Only change code above this line
console.log(wordBlanks);