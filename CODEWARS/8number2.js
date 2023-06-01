//Opposite Number
let opposite = (n) => {
    return n * -1
}
//Quadrants
function quadrant(x, y) {
    return x > 0 && y > 0
        ? 1
        : x < 0 && y > 0
        ? 2
        : x < 0 && y < 0
        ? 3
        : x > 0 && y < 0
        ? 4
        : 0
}
//Pythagorean Triple
function isPythagoreanTriple(inpy) {
    let i = inpy[0]
    i *= i
    let j = inpy[1]
    j *= j
    let k = inpy[2]
    k *= k
    if (i + j == k || k + i == j || k + j == i) {
        return true
    }
    return false
}
//Count the Monkeys!
function monkeyCount(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}
//OR
function monkeyCount(n) {
    return Array.from({ length: n }, (_, i) => i + 1)
}
//Count of positives/sum of negatives
function countPositivesSumNegatives(input) {
    let pos = input.filter((a) => a > 0)
    let neg = input.filter((a) => a < 0).reduce((a, b) => a + b, 0)
    let all = []
    let l = pos.length
    for (let i = 0; i < input.length; i++) {
        all.push(l, neg)
        console.log(all)
        // console.log(pos, neg)
        return all
    }
    return all
}

//Check if element is in array
let check = (a, x) => {
    return a.includes(x) ? true : false
}
//Return the day
function whatday(num) {
    let days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday',
    }
    let m = 'Wrong, please enter a number between 1 and 7'
    for (let i = 0; i < num; i++) {
        if ((days[i] = num)) {
            console.log(days[i], days[num], '<----')
            return days[num]
        }
    }
    if (num > 7) {
        return 'Wrong, please enter a number between 1 and 7'
    }
}
//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    let cp =
        classPoints.reduce((partialSum, a) => partialSum + a, 0) /
        classPoints.length // average of given array(class room members)
    return cp < yourPoints // true
}
//Take the derivative
function derive(coe, exp) {
    let r = exp - 1
    let de = coe * exp
    return `${de}` + 'x^' + `${r}`
}
//
function include(arr, item) {
    return arr.includes(item) ? true : false
}
/**C#
using System;
using System.Linq;


public class Kata
{
  public static bool Include(int[] arr, int item)
  {
    return arr.Contains(item);
    return false;
  }
}
 */
//Grasshopper Debug
function weatherInfo(celsius) {
    var c = convertToCelsius(celsius)
    console.log(celsius, '::::')
    if (c > 0) {
        return `${c} is above freezing temperature`
    } else {
        return c + ' is freezing temperature'
    }
}
function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9)
    return celsius
}
//Type of sum
function typeOfSum(a, b) {
    return typeof (a + b)
}
//Conditional statement switch
function howManydays(month) {
    switch (month) {
        case 2:
            return 28
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
    }
    return 31
}
//Convert boolean values to string
function boolToWord(bool) {
    return bool ? 'Yes' : 'No'
}
//The wide mouthed frog
function mouthSize(animal) {
    let r = animal.toUpperCase()
    return animal == 'alligator' || r == 'ALLIGATOR' ? 'small' : 'wide'
}
/*PHP
function mouth_size($animal) {
    $r = strtoupper($animal);
    return $animal == 'alligator' || $r == 'ALLIGATOR' ? 'small' : 'wide';

} */
//Return multiplication without using "*"
function billboard(name, price = 30) {
    return name.length / (1 / price)
}
//Array plus array
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0)
}
//Bin to dec
function binToDec(bin) {
    var digit = parseInt(bin, 2)
    return digit
}
//Find numbers which are divisible by given number
function divisibleBy(n, d) {
    let r = n.filter((a) => a % d == 0)
    return r
}
//Short long Short
function solution(a, b) {
    //Test.assertEquals(solution('45', '1'), '1451');
    let s = ''
    if (a.length > b.length) {
        s = b + a + b //1451
        return s
    } else {
        s = a + b + a
        return s
    }
}
//OR
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
}
//Hex To Decimal
function hexToDec(h) {
    return parseInt(h, 16)
}
//Get character from ascii value
function getChar(c) {
    return String.fromCharCode(c)
}
// assert.strictEqual(correctTail("Fox", "x"), true);
function correctTail(b, t) {
    return b.substring(b.length - 1) == t ? true : false
}
//Merge 2 sorted arrays into one
function mergeArrays(arr1, arr2) {
    let z = [...arr1, ...arr2]
    z.sort((a, b) => a - b) //sort in every order
    let rr = z.filter((e, i) => {
        return z.indexOf(e) === i
    }) //filter duplicates
    return rr
}
//OR
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)))
}
//first char of string to uppercase
function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}
//Configure package json for a node application
const configuration = {
    name: 'my-awesome-package',
    version: '1.0.0',
    author: 'Your Name <email@example.com>',
}
//find position
function position(letter) {
    let r = letter.charCodeAt(letter) - 96 //all alphabet  UTF code
    return 'Position of alphabet: ' + r
}
//OR
function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1)
}
//Reverse list order (not using reverse method)
function reverseList(list) {
    let r = []
    for (let i = list.length; i >= 1; i--) {
        r.push(i)
    }
    console.log(r)
    return r
}
//Welcome to the city
//['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!'
function sayHello(name, city, state) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
