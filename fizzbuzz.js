// have 3 = fizz
//have 5 = buzz
//have 15 = fizzbuzz
module.exports.fizzbuzzConverter = (number) => {
    if (isDivisbleBy(number, 5) && isDivisbleBy(number, 3)) {
        return 'fizzbuzz'
    } else if (isDivisbleBy(number, 3)) {
        return "fizz"
    } else if (isDivisbleBy(number, 5)) {
        return "buzz"
    } else {
        return number;
    }
}

function isDivisbleBy(larger, small) {
    return (larger % small === 0)
}