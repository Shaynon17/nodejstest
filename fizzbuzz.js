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


//was the function function (number)
//(number === 0)

function fizzbuzzConverter(number) {
    return (number)
}

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
*/
//Write a JavaScript function that reverse a string
// Array.reverse
// turn a string into an array
//split, reverse, join 
/*
module.exports.reverseString = (string) => {
    // let asArray = string.split('');
    // let reversedArray = asArray.reverse()
    // return reversedArray.join('')

    return string.split('').reverse().join('');
}

let xs = [1, 2, 3, 4, 5]
xs[0] = 5
xs[2] = 5

module.exports.upperCaser = (names) => {
    return names.map(this.capitalize)
} */
/*
// map -> uses a function to transform each element in an array
module.exports.firstCharacters = (names) => {
    return names.map(name => name.charAt(0))
}

module.exports.plusOne = (numbers) => {
    return numbers.map(number => number + 1)
}

module.exports.lastLetter = (names) => {
    return names.map(letter => this.capitalize(letter.charAt(letter.length - 1)))
}

// parameter => ONE_STATEMENT_AUTO_RETURN
// parameter => { return STATEMENT; }
module.exports.lastLetter = (names) => {
    const getLastAndCapitalize = letter => {
        return this.capitalize(letter.charAt(letter.length - 1))
    };

    return names.map(name => getLastAndCapitalize(name))
}

// module.exports.lastLetter = (names) => {
//     return
//     names.map(name => name.charAt(name.length - 1))
//         .map(letter => this.capitalize(letter))
// }
module.exports.stringCounter = (names) => {
    return names.map(name => name.length)
}

module.exports.isCoolSClub = (names) => {
    return names.map(name => name.charAt(0) === 's')
}

//charat(0) === s
//transforms the names into the first character then have it decide if its s


let isDivisbleBy = (large, small) => {
    return (large % small === 0)
}

module.exports.fizzbuzzConverter = (number) => {
    if (isDivisbleBy(number, 3) && isDivisbleBy(number, 5)) {
        return 'fizzbuzz'
    } else if (isDivisbleBy(number, 3)) {
        return 'fizz'
    } else if (isDivisbleBy(number, 5)) {
        return 'buzz'
    } else {
        return number
    }
}
//did the below without checking notes
module.exports.helloWorld = (name) => {
    return ('Hello ' + name)
}

// did the below without checking notes
module.exports.sumOfSquares = (number) => {
    return (number * number) + (number * number)
}


function firstCharacter(letter) {
    return letter.charAt(0)

}

function secondCharacter(letter) {
    return letter.charAt(1)
}

module.exports.flipFlop = (name) => {
    return secondCharacter(name) + firstCharacter(name)
}


// did the below kata without checking notes
// 'bingo'
module.exports.capitalize = (name) => {
    let result = name.slice(1)
    return name.toUpperCase().charAt(0) + result
}

module.exports.capFirstLast = (name) => {
    let result = name.slice(1, -1)
    return name.toUpperCase().charAt(0)
        + result + name.slice(-1).toUpperCase()
}


//had to look at notes :(
    //split the string by re-assigning it, reverse the string the same way,
    // then return it by each new function addind to the previous
module.exports.reverseString = (string) => {
    let string1 = string.split('')
    let string2 = string1.reverse()
    return string3 = string2.join('')
}

module.exports.upperCaser = (names) => {
    return names.map(capFirstCharacter)
}

function capFirstCharacter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

module.exports.characterNums = (names) => {
    return names.map(name => name + ': ' + name.length)

}
*/

module.exports.fizzbuzzConverter = (number) => {
    if (isDivisbleBy(number, 3) && (isDivisbleBy(number, 5))) {
        return 'fizzbuzz'
    } else if (isDivisbleBy(number, 3)) {
        return 'fizz'
    } else if (isDivisbleBy(number, 5)) {
        return 'buzz'
    } else {
        return number
    }
}

function isDivisbleBy(x, y) {
    return (x % y === 0)
}

module.exports.helloWorld = (name) => {
    return 'Hello ' + name
}

module.exports.sumOfSquares = (number) => {
    return (number * number) + (number * number)
}

module.exports.flipFlop = (word) => {
    return word.charAt(1) + word.charAt(0)
}

module.exports.capitalize = (name) => {
    return firstLetter(name).toUpperCase() + name.slice(1)
}

function firstLetter(name) {
    return name.charAt(0)
}

function firstLet(name) {
    name.charAt(0).toUpperCase()
}

module.exports.mixUp = (name) => {
    let names = name.split("")
    let reverseName = names.reverse()
    let joinName = reverseName.join("")
    return
}