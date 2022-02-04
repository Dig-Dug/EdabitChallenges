//sum all numbers in a Range 
/**Hint 1
Use Math.max() to find the maximum value of two numbers.

Hint 2
Use Math.min() to find the minimum value of two numbers.

Hint 3
Remember to that you must add all the numbers in 
between so this would require a way to get those numbers. */  

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
/**
 * 
{const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => 
                previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));} 
console.log(array1.reduce(reducer, 5));
 */
function sumAll(arr) {
    let min = Math.min(...arr);
      let max = Math.max(...arr);
      //let total = min + max;
      let copy = [...arr]; 
      let i = 0;let j = 0;
      for(i in arr){
        let a = min++;
        let b = max--;
        let total = (a , b) => a + b;
        let totall = arr.reduce(total);
     //  /*  for(j in arr){
     //   console.log(arr[i,j])
      //  } 
        //console.log(a,b);
        console.log(totall);
       // return totall;
      }
      let med = "?";
      //console.log(min, max)
      return 1;
    }
    
    sumAll([1, 4]);

