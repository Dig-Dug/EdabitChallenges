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
//Freudian Translator, replace everything in string w. sex
function toFreud(string) {
    let r = string.split(' ')
    let wjo = r
        .map(function (x) {
            return x.replace(/[a-z,A-Z][^ ]*$/g, 'sex')
        })
        .join(' ')
    console.log(wjo)
    return wjo
}

//OR
var toFreud = (s) => s.replace(/[^ ]+/g, 'sex')
//remove all Numbers, string cleaning
function stringClean(s) {
    let r = s.replaceAll(/[\d-]+/g, '')
    return r
}
//Regex Basic - is it a Digit?
String.prototype.digit = function () {
    return this.match(/^[0-9]$/) ? true : false
}
//Convert dollar to Chinese Yuan
function usdcny(usd) {
    let y = 6.75
    return (usd * y).toFixed(2) + ' Chinese Yuan'
}
//Drink about
function peopleWithAgeDrink(old) {
    return old < 14
        ? 'drink toddy'
        : old < 18
        ? 'drink coke'
        : old < 21
        ? 'drink beer'
        : old < 30
        ? 'drink whisky'
        : 'drink whisky'
}
//Find Prime Factors
function primeFactors(n) {
    console.log(n)
    let arr = []
    let i = 2
    while (i <= n) {
        if (n % i == 0) {
            n = n / i
            arr.push(i)
        } else {
            i++
        }
    }
    return arr
}
//Take the first N element
function take(arr, n) {
    let r = arr.slice(0, n)
    return r //[0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items"
}
//Ensure Question
function ensureQuestion(s) {
    let ss = s.replace('/?', '/')
    let r = '?'
    return s.includes('?') ? ss : s + r
}
//Remove all exclamation marks at the end of sentence
function remove(string) {
    return string.replace(/!+$/, '')
}
//Generate rate of integers
function generateRange(min, max, step) {
    let n = []
    for (let i = min; i <= max; i += step) {
        n.push(i)
    }
    return n
}
//Do you speak english?
function spEng(sentence) {
    let p = /english/i
    let r = sentence.match(p)
    return r ? true : false
}
//Template strings
var TempleStrings = function (obj, feature) {
    return `${obj} are ${feature}`
}
//incorrect division method
const solve = (x, y) => {
    return x / y
}
//Are arrow functions odd
function odds(values) {
    return values.filter((a) => a % 2 != 0)
}
//Triple Trouble
function tripleTrouble(o, t, tt) {
    let r = []
    let zt
    let z = o.split(''),
        p = t.split(''),
        oo = tt.split('')
    for (i in o) {
        r.push(z[i], p[i], oo[i])
        zt = r.join('')
    }
    console.log(zt)
    return zt
}
/* assert.strictEqual(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
assert.strictEqual(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
assert.strictEqual(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
assert.strictEqual(tripleTrouble("Sea","urn","pms"), "Supermans"); 
assert.strictEqual(tripleTrouble("LLh","euo","xtr"), "LexLuthor"); */
//OR
function tripleTrouble(one, two, three) {
    var result = ''
    for (let i = 0; i < one.length; i++) {
        result += one.charAt(i) + two.charAt(i) + three.charAt(i)
    }
    return result
}
//Dollars and Cents
function formatMoney(amount) {
    let r = '$' + amount.toFixed(2)
    console.log(r) // $39.99
    return r
}
//Hashtable & Objects
// Add rooms here
let names = { name: 'd', n: 12, s: 23 }
let description = { description: '', n: 12, s: 23 }
let completed = { completed: '', n: 12, s: 23 }
var rooms = {
    name: names,
    description: description,
    completed: completed,
}
//Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages) {
    let r = Math.min(...ages)
    let rf = Math.max(...ages)
    let dif = rf - r
    let re = []
    re.push(r, rf, dif)
    return re //differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
}
/* let max = Math.max(...ages),
min = Math.min(...ages)
diff = max - min

return [min, max, diff] */

//Get ASCII value of character
function getASCII(c) {
    return c.charCodeAt(0)
}

var quote = function (fighter) {
    let r = fighter.toLowerCase()
    return r == 'george saint pierre'
        ? 'I am not impressed by your performance.'
        : "I'd like to take this chance to apologize.. To absolutely NOBODY!"
}

//Health cannot go below 0
function combat(health, damage) {
    let d = health - damage
    return d < 0 ? 0 : d
}
//Basic Data Types Objects
function animal(obj) {
    return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.'
} //"This white dog has 4 legs."
let obj = {
    name: String,
    legs: Number,
    color: String,
}
//: Replace all vowel to exclamation mark in the sentence
function replace(s) {
    return s.replace(/[aeiou]/gi, '!')
}
//Potenciation
function power(x, y) {
    let pot = x ** y
    return pot
}
//Is integer safe to use?
function SafeInteger(n) {
    return n > Number.MAX_SAFE_INTEGER ? false : true
}

//Obejct prototypes
function Counter(value) {
    this.value = 0
}

Counter.prototype.increase = function () {
    return this.value++
}

Counter.prototype.getValue = function () {
    return this.value
}

Counter.prototype.reset = function () {
    return (this.value = 0)
}
//---------------
function doTurn() {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
}
//Whose Move?
function whoseMove(lastPlayer, win) {
    return win == true && lastPlayer == 'white'
        ? 'white'
        : win == true && lastPlayer == 'black'
        ? 'black'
        : win == false && lastPlayer == 'white'
        ? 'black'
        : 'white'
}
//OR
function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : lastPlayer == 'white' ? 'black' : 'white'
}
//Push object into array
let items = []
items.push({ a: 'b', c: 'd' })
//Reverse words in a string
function reverse(string) {
    return string.split(' ').reverse().join(' ')
}
//function myFirstKata(a, b) {
if (typeof a !== 'number' || typeof b !== 'number') {
    return false
} else {
    return (a % b) + (b % a)
}
//Type Coercion
//https://www.c-sharpcorner.com/article/avascript-type-coercion-explained-how-to-avoid-common-pitfalls/#:~:text=Type%20coercion%20is%20the%20process,to%20values%20of%20different%20types.
function add(a, b) {
    return a == b ? true : a === b ? true : false
}
//Round number 2 decimal places
function twoDecimalPlaces(n) {
    return Math.round(n * 100) / 100
}
//Printing Array elements with Comma delimiters
function printArray(a) {
    return a.toString()
}

//Leo Di Caprio & Oscars
function leo(o) {
    return o == 88
        ? 'Leo finally won the oscar! Leo is happy'
        : o == 86
        ? 'Not even for Wolf of wallstreet?!'
        : o > 88
        ? 'Leo got one already!'
        : 'When will you give Leo an Oscar?'
}
