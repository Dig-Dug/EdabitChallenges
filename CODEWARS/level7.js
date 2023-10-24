//Number of Decimal Digits
let digits = (n) => {
    return n.toString().split('').length
}

//Bubblesort Once

function bubblesortOnce(a) {
    let aa = [...a]
    let swap
    for (let j = 0; j < a.length; j++) {
        for (let i = 0; i < a.length; i++) {
            if (aa[i] > aa[i + 1]) {
                swap = aa[i]
                aa[i] = aa[i + 1]
                aa[i + 1] = swap
            }
        }
        return aa
    }
    return []
}
