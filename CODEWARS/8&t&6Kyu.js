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
