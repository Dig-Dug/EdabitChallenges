//sum all numbers in a Range 
/**Hint 1
Use Math.max() to find the maximum value of two numbers.

Hint 2
Use Math.min() to find the minimum value of two numbers.

Hint 3
Remember to that you must add all the numbers in 
between so this would require a way to get those numbers. */  


function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  //let total = min + max;
  let copy = [...arr];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    while (min < max) {
      j += min++
      console.log(j + max) //
    }
}
  return j + max;
}
 
 sumAll([1, 4]);  // 10
 sumAll([5,10]);  //45



 //Diff Two Arrays------------------------------------------------------