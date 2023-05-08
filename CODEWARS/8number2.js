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
