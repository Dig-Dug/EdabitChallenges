function calcAge(age) {
   //A// const calcAge = age => age * 365;
  //B  return age * 365;
  /*C  let ageInDays = (age*365)>=0 && typeof(age*365) == 'number' ? (age*365) : []
	   return ageInDays*/
}

let howManySeconds = h => h * 3600;
const howManySeconds1 = hours => Number.isInteger(hours) ? hours*3600 : "error";
function howManySeconds2(hours) {
   return hours * 3600;

/* const getHours =  {
   
   howManySeconds() {
     return this.hour, this.hour1;
     
  }, */

  
};

///////////////////////////////////////////////////////////////////
function giveMeSomething(a) {
   //return `something ${a}`;
   //const giveMeSomething = a => `something ${a}`;
   /*
   let b="something ";
	return b.concat(a) */

	return "something" + " " + a;
}
//Write a function that takes the base and height of
// a triangle and return its area.
// The area of a triangle is: (base * height) / 2

function triArea(base, height) {
   base = 20;
   height = 30;
   console.log( base * height / 2 + " area")
	return (base * height) / 2 ;
   
}
/*const triArea = (base, height) => (base * height)/ 2;
var a = base * height;
var b = a / 2; return b;*/

/**Create a function that takes a number as an argument, 
 * increments the number by +1 and returns the result. */
function addition(num) {
   return ++num;
}
//const addition = (num) => num + 1
/** num = 0;
   let a = num + 1;
   console.log(a);
   return a; */

/*  num = 0;
   for(i = 0; i < num.length;i++){
      num2 = num[i];
      if(num2 > 1000){break;}else {
         return num2;
      }
   }
  return num ;*/
  /**
   *   num = 0;
   do {
     num += 1;
     console.log(num);
     return num;
   } while (num < 1000);
   */

//Create a function that takes
//an array containing only numbers and return the first element.
function getFirstValue(arr) {
	
}
/**
 * getFirstValue([1, 2, 3]) ➞ 1

   getFirstValue([80, 5, 100]) ➞ 80

   getFirstValue([-500, 0, 50]) ➞ -500

 * Test.assertEquals(getFirstValue([1, 2, 3]), 1)
Test.assertEquals(getFirstValue([80, 5, 100]), 80)
Test.assertEquals(getFirstValue([-500, 0, 50]), -500)
Test.assertEquals(getFirstValue([5, 2, 3]), 5)
Test.assertEquals(getFirstValue([75675, 5, 100]), 75675)
Test.assertEquals(getFirstValue([-52320, 0, 50]), -52320)
 */
