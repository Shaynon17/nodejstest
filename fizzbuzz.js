// have 3 = fizz
//have 5 = buzz
//have 15 = fizzbuzz 
/*
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

 function isDivisbleBy(larger, small) {
    return (larger % small === 0)
} 
let isDivisibleBy = (larger, small) => {
    return (larger % small === 0)
} 
// try using the switch function
// module.exports.fizzbuzzConverter()


function fizzbuzzConverter(number) {
    (number === 0)
}

switch (number) {
    case (isDivisibleBy(number, 5) && isDivisibleBy(number, 3)):
        console.log('fizzbuzz')
        break;
    case (isDivisibleBy(number, 3)):
        console.log('fizz')
        break;
    case (isDivisibleBy(number, 5)):
        console.log('buzz')
        break;
    default:
        console.log(number)
}


let isDivisibleBy = (larger, small) => {
    return (larger % small === 0)
}

*/
//was the function function (number)
//(number === 0)

/*function fizzbuzzConverter(number) {
    return (number)
}
*/
function isDivisibleBy(larger, smaller) {
    return (larger % smaller === 0)
};

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


/*
// a private function only usable in this file
function FUNCTION_NAME(PARAMETERS) {
    FUNCTION_BODY_STATEMENTS;
};
or
const FUNCTION_NAME = (PARAMETERS) => {
    FUNCTION_BODY_STATEMENTS;
};

// a public/exported function usable in all files
module.exports.FUNCTION_NAME = (PARAMETERS) => {
    FUNCTION_BODY_STATEMENTS;
};
*/

module.exports.helloWorld = (name) => {
    return 'Hello ' + name
}

function square(number) {
    return number * number;
};

module.exports.sumOfSquares = (number) => {
    return square(number) + square(number)
}

function firstCharacter(input) {
    return input.charAt(0);
}

function secondCharacter(input) {
    return input.charAt(1);
}

module.exports.flipFlop = (flip) => {
    return secondCharacter(flip) + firstCharacter(flip)
}

module.exports.capitalize = (myName) => {
    return firstCharacter(myName).toUpperCase() + myName.slice(1)

}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// practice the above string functions. These are the reccomended funstions

//invert a name and captialize the first letter
//capitalize the first and last letter

module.exports.capFirstLast = (name) => {
    let start = firstCharacter(name).toUpperCase();
    let middle = name.slice(1, -1)
    let end = name.toUpperCase().slice(-1)
    return start + middle + end
}

//Write a JavaScript function that reverse a number
/*
module.exports.reverseNumb = (number) => {
    let number = array()
    return array().reverse(number)
} */
let strang = 'test';
let num = 4;
let boolee = false;
let object = { 'test': 5 };
let arrays = [false, function (x) { return x + 5 }, [5, 4, 4], 4, { 'test': 5 }, 6, 'test', 6]
//heterogeneous array --> allows any type, and all types

let = false;
let x = [1, 2, 3, 4];
let strrangs = ['test', 'host', 'times'];
let empatyArray = [];
// arrays -> 99.9999% are homogenous (comparable)
// objects -> 99.9999% are heterogenous (incomparable)
function average(numbers) {
    return (numbers.reduce(x, y => x + y)) / numbers.length;
}
let myNames = ['rooster', 'shannon', 'shay']
myNames.length === 3
myNames[0] === 'rooster'
myNames.push('james')
myNames.push('joe')

'steve'.split('') === ['s', 't', 'e', 'v', 'e']
['s', 't', 'e', 'v', 'e'].join('') === 'steve'

myNames.join(", ") === "rooster, shannon, shay";