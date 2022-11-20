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
