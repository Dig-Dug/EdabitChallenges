export function evenOrOdd(n: number): string {
    console.log(n)
    return n % 2 == 0 ? 'Even' : 'Odd'
}
//Remove duplicates from list

export const distinct = (a: number[]): number[] => {
    let uniq = [...new Set(a)];
    return uniq;
}
//Jenny´s secret message
export function greet(name: string): string {
    if (name === "Johnny") {
        return "Hello, my love!";
    }
    return "Hello, " + name + "!";
}
//Short long short
export function shortLongShort(a: string, b: string) {
    return a.length < b.length ? a + b + a : b + a + b
}
