const stringToNumber = function (str) {
    return parseInt(str) // "123" --> 123
}

//Break camel case...................
// complete the function
function solution(s) {
    let n = s.replace(/[a-z]/g, '')
    let o = s.replace(/[A-Z]/g, '')
    console.log(s, n, o)
}

/**
  var str = 'MaEfSdsfSsdfsAdfssdGsdfEsdf';
  var newmsg = str.replace(/[a-z]/g, '');
  var old = str.replace(/[A-Z]/g, '');
  
*/

//Double Char
//"abcd" <-- aabbccdd
function doubleChar(str) {
    let rr = str.split('')
    b = []
    for (var i = 0; i < rr.length; ++i) {
        b.push(rr[i])
        b.push(rr[i])
    }
    rr = b
    let s
    for (let i = 0; i < b.length; i++) {
        s = b.toString()
    }
    let n = s.replace(/,/g, '')
    console.log(n)
    return n
}
//waaaaaaay better
const doubleChar = (str) =>
    str
        .split('')
        .map((c) => c + c)
        .join('')
//OR
function doubleChar(str) {
    return str.replace(/(.)/g, '$1$1')
}
///The Feast of Many Beasts---2 string begin and end equal-
function feast(beast, dish) {
    let p = beast.substring(0, 1)
    let f = dish.substring(0, 1)
    let pf = beast.substring(beast.length - 1)
    let ff = dish.substring(dish.length - 1)
    console.log(p, f, pf, ff)
    return p == f && pf == ff ? true : false
    //
}
//OTHER
function feast(beast, dish) {
    return (
        beast[0] === dish[0] &&
        beast[beast.length - 1] === dish[dish.length - 1]
    )
}

//Beginner - Lost Without a Map
function maps(x) {
    let two = 2
    let a = x.map((y) => y * 2)
    console.log(a) //[1,2,3] => [2,4,6]
    return a
}
//or
return x.map((y) => y * 2)

//Beginner Series #4 Cockroach
/**The cockroach is one of the fastest insects.
 * Write a function which takes its speed in km
 *  per hour and returns it in cm per second,
 * rounded down to the integer (= floored). */

function cockroachSpeed(s) {
    let r = s * 27.778 //real formula
    let floor = Math.floor(r)
    return floor
}
