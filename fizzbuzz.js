// have 3 = fizz
//have 5 = buzz
//have 15 = fizzbuzz
module.exports.fizzbuzzConverter = (number) => {
    if (isDivisibleBy(number, 5) && isDivisibleBy(number, 3)) {
        return 'fizzbuzz'
    } else if (isDivisibleBy(number, 3)) {
        return "fizz"
    } else if (isDivisibleBy(number, 5)) {
        return "buzz"
    } else {
        return number;
    }
}

/* function isDivisbleBy(larger, small) {
    return (larger % small === 0)
} */
let isDivisibleBy = (larger, small) => {
    return (larger % small === 0)
}