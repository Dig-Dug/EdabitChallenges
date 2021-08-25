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