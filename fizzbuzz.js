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

function isDivisibleBy(larger, small) {
    return (larger % small === 0)
};


for test to work: have to have npm installed
step 2 have to from the directory where the code is, run npm install
step 3 from the directory where the code is run npm test
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
/*
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
/*
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
    return joinName.charAt(0).toUpperCase() + joinName.slice(1)
}

module.exports.capFirstLast = (name) => {
    return (firstLetter(name) + name.slice(1, -1) + lastLetter(name))
}

function firstLetter(name) {
    return name.charAt(0).toUpperCase()
}

function lastLetter(name) {
    return name.slice(-1).toUpperCase()
}

function capFirst(name) {
    return name.charAt(0).toUpperCase() + name.slice(1,)
}


module.exports.reverseString = (number) => {
    let numbers = number.split('')
    let splitNumbers = numbers.reverse()
    return joinNums = splitNumbers.join('')
}

module.exports.upperCaser = (names) => {
    return names.map(name => capFirst(name))
}

module.exports.firstCharacters = (names) => {
    return names.map(name => name.charAt(0))
}

module.exports.plusOne = (numbers) => {
    return numbers.map(number => number + 1)
}

module.exports.lastLetter = (names) => {
    return names.map(name => name.slice(-1).toUpperCase())
}

module.exports.stringCounter = (names) => {
    return names.map(name => name.length)
}

module.exports.isCoolSClub = (names) => {
    return names.map(name => name.charAt(0) === 's')
}

module.exports.characterNums = (names) => {
    return names.map(name => name + ': ' + name.length)
}

//.tobe is for primitives: strings, booleans, numbers
//.tostrictequal is for arrays and objects
//curly brackets are for objects

let contact1 = {
    name: 'steve',
    email: 'email@steveshogren.com'
}

let contact2 = {
    name: 'shannon',
    email: 'test@test.com'
}
contact1.name === 'steve'
contact1['name'] === 'steve'

let contacts = [contact1, contact2]
let names = contacts.map(contact => contact.name)
names === ['steve', 'shannon']

module.exports.getTemp = (data) => {
    return data.temp;
}

module.exports.getStreet = (contact) => {
    return contact.street;
}

module.exports.getZipCodes = (addresses) => {
    return addresses.map(address => address.zip)
}

module.exports.upperCaseContactNames = (contacts) => {
    return contacts.map(contact => contact.name.toUpperCase())
}

module.exports.incrementZipCode = (contact) => {
    contact.zip = contact.zip + 1
    return contact;
}

function isDivisbleBy(larger, smaller) {
    return (larger % smaller === 0)
}

module.exports.fizzbuzzConverter = (number) => {
    if (isDivisbleBy(number, 5) && (isDivisbleBy(number, 3))) {
        return 'fizzbuzz'
    } else if (isDivisbleBy(number, 3)) {
        return 'fizz'
    } else if (isDivisbleBy(number, 5)) {
        return 'buzz'
    } else {
        return number
    }
}
module.exports.helloWorld = (name) => {
    return 'Hello ' + name
}
module.exports.sumOfSquares = (number) => {
    return (number * number) + (number * number)
}

module.exports.flipFlop = (letters) => {
    return letters.charAt(1) + letters.charAt(0)
}

module.exports.capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}
module.exports.mixUp = (name) => {
    splitName = name.split('')
    reverseName = splitName.reverse()
    joinName = reverseName.join('')
    return joinName.charAt(0).toUpperCase() + joinName.slice(1)
}

module.exports.capFirstLast = (name) => {
    return name.charAt(0).toUpperCase()
        + name.slice(1, -1)
        + name.slice(-1).toUpperCase()
}

module.exports.reverseString = (number) => {
    splitNumber = number.split('')
    reverseNum = splitNumber.reverse()
    joinNum = reverseNum.join('')
    return joinNum
}

module.exports.upperCaser = (names) => {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
}

module.exports.firstCharacters = (names) => {
    return names.map(name => name.charAt(0))
}

module.exports.plusOne = (numbers) => {
    return numbers.map(number => number + 1)
}

module.exports.lastLetter = (names) => {
    return names.map(name => name.slice(-1).toUpperCase())
}

module.exports.stringCounter = (names) => {
    return names.map(name => name.length)
}

module.exports.isCoolSClub = (names) => {
    return names.map(name => name.charAt(0) === 's')
}

module.exports.characterNums = (names) => {
    return names.map(name => name + ': ' + name.length)
}

module.exports.getTemp = (data) => {
    return data.temp
}

module.exports.getStreet = (data) => {
    return data.street
}

module.exports.getZipCodes = (data) => {
    return data.map(address => address.zip)
}

module.exports.upperCaseContactNames = (contacts) => {
    return contacts.map(contact => contact.name.toUpperCase())
}
//i do not understand the kata directly below well
module.exports.incrementZipCode = (contact) => {
    contact.zip = contact.zip + 1
    return contact
}

module.exports.upperCaseFirstLetter = (contacts) => {
    return contacts.map(contact => contact.name.charAt(0).toUpperCase()
        + contact.name.slice(1))
}
/*
module.exports.palindrome = (names) => {

}

module.exports.palindromeName = (name) => {
    splitName = name.split('')
    reverseName = splitName.reverse()
    joinName = reverseName.join('')
    return name === joinName
}
// variable === variable reversed

module.exports.alphabetize = (name) => {
    splitName = name.split('')
    reverseName = splitName.sort()
    joinName = reverseName.join('')
    return joinName
}


//the below is wrong
module.exports.upperCaseWord = (words) => {
    return words.map(word => word.split(' '))
}

module.exports.helloWorld = (name) => {
    return 'Hello ' + name
}

module.exports.sumOfSquares = (number) => {
    return (number * number) + (number * number)
}

module.exports.flipFlop = (name) => {
    return name.charAt(1) + name.charAt(0)
}

module.exports.capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}
//testing github

module.exports.mixUp = (name) => {
    splitName = name.split('')
    reverseName = splitName.reverse()
    joinName = reverseName.join('')
    return joinName.charAt(0).toUpperCase()
    +joinName.slice(1)
}

module.exports.capFirstLast = (name) => {
    return name.charAt(0).toUpperCase() +
     name.slice(1, -1)
    + name.slice(-1).toUpperCase()
}

module.exports.reverseString = (number) => {
    splitNum = number.split('')
    reverseNum = splitNum.reverse()
    joinNum = reverseNum.join('')
    return joinNum
}

module.exports.upperCaser = (names) => {
    return names.map(name => name.charAt(0).toUpperCase()
    + name.slice(1))
}

module.exports.firstCharacters = (names) => {
    return names.map(name => name.charAt(0))
}

module.exports.plusOne = (numbers) => {
    return numbers.map(number => number + 1)
}

module.exports.lastLetter = (names) => {
    return names.map(name =>
        name.slice(-1).toUpperCase())
}

module.exports.stringCounter = (names) => {
    return names.map(name => name.length)
}

module.exports.isCoolSClub = (names) => {
    return names.map(name => name.charAt(0) === 's')
}

module.exports.characterNums = (names) => {
    return names.map(name => name + ': ' + name.length)
}
module.exports.getTemp = (data) => {
    return data.temp
}

module.exports.getStreet = (contact) => {
    return contact.street
}

module.exports.getZipCodes = (addresses) => {
    return addresses.map(address => address.zip)
}

module.exports.upperCaseContactNames = (contacts) => {
    return contacts.map(contact => contact.name.toUpperCase())
}

//kind of makes sense now
module.exports.incrementZipCode = (contact) => {
    contact.zip = contact.zip + 1
    return contact
}

module.exports.upperCaseFirstLetter =(contacts) => {
    return contacts.map(contact => contact.name.charAt(0).toUpperCase() + contact.name.slice(1)
    )
}

module.exports.palindromeName = (name) => {
    splitName = name.split('')
    reverseName = splitName.reverse()
    joinName = reverseName.join('')
    return name === joinName
}

module.exports.alphabetize = (name) => {
    splitName = name.split('')
    sortName = splitName.sort()
    joinName = sortName.join('')
    return joinName
}


module.exports.fizzbuzzConverter = (number) => {
if (isDivisibleBy(number, 3) && isDivisibleBy(number, 5)) {
    return 'fizzbuzz'
} else if (isDivisibleBy(number, 3)) {
    return 'fizz'
} else if (isDivisibleBy(number, 5)) {
    return 'buzz'
} else {
    return number;
}
}

function isDivisibleBy(larger, smaller) {
return (larger % smaller === 0)
}

module.exports.helloWorld =(name) => {
    return "Hello " + name
}

module.exports.sumOfSquares = (number) => {
    return (number * number) + (number * number)
}

module.exports.flipFlop = (word) => {
    return word.slice(1) + word.charAt(0)
}

module.exports.capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

module.exports.mixUp = (name) => {
    splitName = name.split('')
    reverseName = splitName.reverse()
    joinName = reverseName.join('')
    return joinName.charAt(0).toUpperCase() + joinName.slice(1)
}

module.exports.capFirstLast = (name) => {
    return name.charAt(0).toUpperCase()
    + name.slice(1, -1)
    + name.slice(-1).toUpperCase()
}

module.exports.reverseString = (string) => {
    splitString = string.split('')
    reverseString = splitString.reverse()
    joinString = reverseString.join('')
    return joinString
}

module.exports.upperCaser = (names) => {
    return names.map(name => name.charAt(0).toUpperCase()
    + name.slice(1))
}

module.exports.firstCharacters = (names) => {
    return names.map(name => name.charAt(0))
}

module.exports.plusOne = (numbers) => {
    return numbers.map(number => number + 1)
}

module.exports.lastLetter = (names) => {
    return names.map(name => name.slice(-1).toUpperCase())
}

module.exports.stringCounter = (names) => {
    return names.map(name => name.length)
}

module.exports.isCoolSClub = (names) => {
    return names.map(name => name.charAt(0) === 's')
}

module.exports.characterNums = (names) => {
    return names.map(name => name + ': ' + name.length)
}


module.exports.upperCaseWord = (words) => {
    let splitWords = words.split(' ')
    let capWords = splitWords.map(word =>
         word.charAt(0).toUpperCase() + word.slice(1))
     return capWords.join(' ')
}

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
  }

  module.exports.upperCaseWord = (words) => {
    let splitWords = words.split(' ')
    let capWords = [];
    for (let x = 0; x < splitWords.length; x++) {                       // how many loops to do
        let word = splitWords[x];                                       // get the element to work on
        let changedWord = word.charAt(0).toUpperCase() + word.slice(1)  // do work on element
        capWords.push(changedWord);                                     // push to new array
    }
    return capWords.join(' ')
}

function steveMap(array, fn) {
    let ret = [];
    for (let x = 0; x < array.length; x++) {                       // how many loops to do
        let element = array[x];                                       // get the element to work on
        let changedElement = fn(element)
        ret.push(changedElement);                                     // push to new array
    }
    return ret;
}


let capWords = steveMap(splitWords, word =>
        word.charAt(0).toUpperCase() + word.slice(1))



module.exports.addOne = (numbers) => {
    let theseNums = []
    for (let x = 0; x < numbers.length; x++) {                       // how many loops to do
        let number = numbers[x];                                       // get the element to work on
        let newNumber = number + 1  // do work on element
        theseNums.push(newNumber)
    }
    return theseNums
}

module.exports.addOneMap = (numbers) => {
    return numbers.map(number => number + 1)
}

module.exports.firstCharacters = (numbers) => {
    let theseNums = []
    for (let x = 0; x < numbers.length; x++) {                       // how many loops to do
        let number = numbers[x];                                       // get the element to work on
        let newNumber = number.charAt(0)  // do work on element
        theseNums.push(newNumber)
    }
    return theseNums
}

module.exports.upperCaser = (numbers) => {
    let theseNums = []
    for (let x = 0; x < numbers.length; x++) {                       // how many loops to do
        let number = numbers[x];                                       // get the element to work on
        let newNumber = number.charAt(0).toUpperCase()
            + number.slice(1)  // do work on element
        theseNums.push(newNumber)
    }
    return theseNums
}

module.exports.stringCounter = (strings) => {
    let stringArray = []
    for (let x = 0; x < strings.length; x++) {
        let string = strings[x]
        let newString = string.length
        stringArray.push(newString)
    }
    return stringArray
}

module.exports.stringCounter = (strings) => {
    return strings.map(string => string.length)
}


module.exports.isCoolSClub = (names) => {
    let finalNames = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let changeName = name.charAt(0) === 's'
        finalNames.push(changeName)
    }
    return finalNames
}

module.exports.characterNums = (names) => {
    let finalNames = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newName = name + ': ' + name.length
        finalNames.push(newName)
    }
    return finalNames
}


module.exports.addOne = (numbers) => {
    let endNums = []
    for (x = 0; x < numbers.length; x++) {
        let number = numbers[x]
        let modNum = number + 1
        endNums.push(modNum)
    }
    return endNums
}


module.exports.onlyEvens = (numbers) => {
    let endNums = []
    for (let i = 0; numbers.length > i; i++) {
        let number = numbers[i]
        let isEven = number % 2 === 0
        if (isEven) {
            endNums.push(number)
        }
    }
    return endNums
}

module.exports.onlySteve = (names) => {
    let endName = []
    for (let i = 0; names.length > i; i++) {
        let name = names[i]
        let justSteve = name === 'steve'
        if (justSteve) {
            endName.push(name)
        }
    }
    return endName
}

function filterStuff(array, shouldKeepFn) {
    let toReturn = []
    for (let i = 0; array.length > i; i++) {
        let item = array[i]
        let shouldKeep = shouldKeepFn(item)
        if (shouldKeep) {
            toReturn.push(item)
        }
    }
    return toReturn
}

module.exports.onlySteve = (names) => {
    return filterStuff(names, name => name === 'steve')
}

module.exports.onlyEvens = (numbers) => {
    return filterStuff(numbers, number => number % 2 === 0)
}

module.exports.onlySteve = (names) => {
    return names.filter(name => name === 'steve')
}

module.exports.onlyEvens = (numbers) => {
    return numbers.filter(number => number % 2 === 0)
}

module.exports.onlyBigEnough = (names) => {
    let endName = []
    for (let i = 0; names.length > i; i++) {
        let name = names[i]
        let justSteve = name.length > 4
        if (justSteve) {
            endName.push(name)
        }
    }
    return endName
}

module.exports.onlyBigEnough = (names) => {
    return names.filter(name => name.length > 4)
}


function isDivisbleBy(larger, smaller) {
    return (larger % smaller === 0)
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
    return name.charAt(0).toUpperCase() + name.slice(1)
}

module.exports.mixUp = (name) => {
    splitName = name.split('')
    reverseName = splitName.reverse()
    joinName = reverseName.join('')
    return joinName.charAt(0).toUpperCase() + joinName.slice(1)
}

module.exports.capFirstLast = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1, -1) + name.slice(-1).toUpperCase()
}

module.exports.reverseString = (string) => {
    splitString = string.split('')
    reverseString = splitString.reverse()
    joinString = reverseString.join('')
    return joinString
}
/*
module.exports.upperCaser = (names) => {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
}

module.exports.upperCaser = (names) => {
    let endNames = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newName = name.charAt(0).toUpperCase() + name.slice(1)
        endNames.push(newName)
    }
    return endNames
}

module.exports.firstCharacters = (names) => {
    return names.map(name => name.charAt(0))
}

module.exports.firstCharacters = (names) => {
    let endNames = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newName = name.charAt()
        endNames.push(newName)
    }
    return endNames
}

module.exports.plusOne = (numbers) => {
    return numbers.map(number => number + 1)
}


module.exports.plusOne = (numbers) => {
    let endNum = []
    for (x = 0; x < numbers.length; x++) {
        let number = numbers[x]
        let newNumber = number + 1
        endNum.push(newNumber)
    }
    return endNum
}

module.exports.lastLetter = (names) => {
    return names.map(name => name.slice(-1).toUpperCase())
}


module.exports.lastLetter = (names) => {
    let endNames = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newName = name.slice(-1).toUpperCase()
        endNames.push(newName)
    }
    return endNames
}

module.exports.stringCounter = (names) => {
    return names.map(name => name.length)
}


module.exports.stringCounter = (names) => {
    let endNames = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newName = name.length
        endNames.push(newName)
    }
    return endNames
}

module.exports.isCoolSClub = (names) => {
    return names.map(name => name.charAt(0) === 's')
}

module.exports.isCoolSClub = (names) => {
    let endNames = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newName = name.charAt(0) === 's'
        endNames.push(newName)
    }
    return endNames
}

module.exports.characterNums = (names) => {
    return names.map(name => name + ': ' + name.length)
}


module.exports.characterNums = (names) => {
    let endNames = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newNames = name + ': ' + name.length
        endNames.push(newNames)
    }
    return endNames
}

module.exports.getTemp = (data) => {
    return data.temp
}

module.exports.getStreet = (contact) => {
    return contact.street
}

module.exports.getZipCodes = (addresses) => {
    return addresses.map(addresses => addresses.zip)
}

module.exports.getZipCodes = (addresses) => {
    let endAddress = []
    for (x = 0; x < addresses.length; x++) {
        let address = addresses[x]
        let newAddress = address.zip
        endAddress.push(newAddress)
    }
    return endAddress
}

module.exports.upperCaseContactNames = (contacts) => {
    return contacts.map(contact => contact.name.toUpperCase())
}


module.exports.upperCaseContactNames = (contacts) => {
    let endContact = []
    for (x = 0; x < contacts.length; x++) {
        let contact = contacts[x]
        let newContact = contact.name.toUpperCase()
        endContact.push(newContact)
    }
    return endContact
}

module.exports.incrementZipCode = (contact) => {
    contact.zip = contact.zip + 1
    return contact;
}

module.exports.upperCaseFirstLetter = (contacts) => {
    return contacts.map(contact => contact.name.charAt(0).toUpperCase() + contact.name.slice(1))
}


module.exports.incrementNumber = (number) => {
    return number + 1
}

module.exports.upperCaseFirstLetter = (contacts) => {
    let endContact = []
    for (x = 0; x < contacts.length; x++) {
        let contact = contacts[x]
        let newContact = contact.name.charAt(0).toUpperCase() + contact.name.slice(1)
        endContact.push(newContact)
    }
    return endContact
}

module.exports.palindromeName = (name) => {
    let splitName = name.split('')
    let reverseName = splitName.reverse()
    let joinName = reverseName.join('')
    return name === joinName
}


module.exports.alphabetize = (name) => {
    let splitName = name.split('')
    let sortName = splitName.sort()
    let joinName = sortName.join('')
    return joinName
}

module.exports.upperCaseWord = (string) => {
    let splitString = string.split(' ')
    let moddedString = splitString.map(splitString => splitString.charAt(0).toUpperCase() + splitString.slice(1))
    let joinString = moddedString.join(' ')
    return joinString
}

module.exports.addOne = (numbers) => {
    return numbers.map(number => number + 1)
}

module.exports.addOne = (numbers) => {
    let endNumbers = []
    for (x = 0; x < numbers.length; x++) {
        let number = numbers[x]
        let newNumber = number + 1
        endNumbers.push(newNumber)
    }
    return endNumbers
}

module.exports.firstCharacters = (names) => {
    return names.map(name => name.charAt(0))
}

//did not understand this way or the maps way
module.exports.onlyEvens = (numbers) => {
    let evenNumbers = []
    for (x = 0; x < numbers.length; x++) {
        let number = numbers[x]
        let isEven = number % 2 === 0
        if (isEven) {
            evenNumbers.push(number)
        }
    }
    return evenNumbers
}

module.exports.onlySteve = (names) => {
    let justSteve = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let isSteve = name === 'steve'
        if (isSteve) {
            justSteve.push(name)
        }
    }
    return justSteve
}

//review notes
//note 1
// test on line 157 of test.js i struggle with. Why have 'let result' 
// am i just redifing the number of the contact with the function?
// can i have more katas similar to this one?

//note 2
//on line 734 and 198 on test.js... how can map be used and not have .toStrictEqual be in the test?
// .toStrictEqual is only if you are returning an array or object. .toBe if you are returning a string, number, boolean

//note 3: line 1173 of this document

module.exports.upperCaser = (names) => {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
}


module.exports.upperCaser = (names) => {
    let endName = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newName = name.charAt(0).toUpperCase() + name.slice(1)
        endName.push(newName)
    }
    return endName
}

module.exports.firstCharacters = (names) => {
    return names.map(name => name.charAt(0))
}


module.exports.firstCharacters = (names) => {
    let endName = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newName = name.charAt(0)
        endName.push(newName)
    }
    return endName
}

module.exports.onlyBigEnough = (names) => {
    let endNames = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let newName = name.length > 4
        if (newName) {
            endNames.push(name)
        }
    }
    return endNames
}

 //try to chain all of the below code in previous katas
module.exports.parseHand = (cards) => {
    let splitCards = cards.split(' ')
    let cardObjects = splitCards.map(card => this.parseCard(card))
    return cardObjects
}

module.exports.parseHand = (cards) => {
    return cards.split(' ').map(card => this.parseCard(card))
}


module.exports.capEachWord = (string) => {
    let splitString = string.split(' ')
    let newString = splitString.map(string => string.charAt(0).toUpperCase() + string.slice(1))
    return joinString = newString.join(' ')

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

function isDivisbleBy(larger, smaller) {
    return (larger % smaller === 0)
}

module.exports.helloWorld = (name) => {
    return 'Hello ' + name
}

module.exports.sumOfSquares = (number) => {
    return (number * number) + (number * number)
}

module.exports.flipFlop = (string) => {
    return string.charAt(1) + string.charAt(0)
}

module.exports.capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

module.exports.mixUp = (name) => {
    splitName = name.split('')
    reverseName = splitName.reverse()
    joinName = reverseName.join('')
    return joinName.charAt(0).toUpperCase() + joinName.slice(1)
}

module.exports.capFirstLast = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1, -1) + name.slice(-1).toUpperCase()
}

module.exports.reverseString = (number) => {
    splitNum = number.split('')
    reverseNum = splitNum.reverse()
    return joinNum = reverseNum.join('')
}
/*
module.exports.upperCaser = (names) => {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
} */

module.exports.upperCaser = (names) => {
    let endName = []
    for (x = 0; x < names.length; x++) {
        let name = names[x]
        let modName = name.charAt(0).toUpperCase() + name.slice(1)
        endName.push(modName)
    }
    return endName
}