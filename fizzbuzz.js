//in git : cd --> cd coding/nodejstest --> git push to commit to git hub

// have 3 = fizz
//have 5 = buzz
//have 15 = fizzbuzz
/*
//files got deleted, testing to see location
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

// function fizzbuzzConverter(number) {
//     if (isDivisbleBy(number, 3) && (isDivisbleBy(number, 5))) {
//         return 'fizzbuzz'
//     } else if (isDivisbleBy(number, 3)) {
//         return 'fizz'
//     } else if (isDivisbleBy(number, 5)) {
//         return 'buzz'
//     } else {
//         return number
//     }
// }

// function isDivisbleBy(larger, smaller) {
//     return (larger % smaller === 0)
// }

// function helloWorld(name) {
//     return 'Hello ' + name
// }

// function sumOfSquares(number) {
//     return (number * number) + (number * number)
// }

// function flipFlop(string) {
//     return string.charAt(1) + string.charAt(0)
// }

// function capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.slice(1)
// }

// function mixUp(name) {
//     splitName = name.split('')
//     reverseName = splitName.reverse()
//     joinName = reverseName.join('')
//     return joinName.charAt(0).toUpperCase() + joinName.slice(1)
// }

// function capFirstLast(name) {
//     return name.charAt(0).toUpperCase() + name.slice(1, -1) + name.slice(-1).toUpperCase()
// }

// function reverseString(number) {
//     splitNum = number.split('')
//     reverseNum = splitNum.reverse()
//     return joinNum = reverseNum.join('')
// }

// function firstCharacters(names) {
//     return names.map(name => name.charAt(0))
// }

// function plusOne(numbers) {
//     return numbers.map(number => number + 1)
// }

// function lastLetter(names) {
//     return names.map(name => name.slice(-1).toUpperCase())
// }

// function stringCounter(names) {
//     return names.map(name => name.length)
// }

// function isCoolSClub(names) {
//     return names.map(name => name.charAt(0) === 's')
// }

// function characterNums(names) {
//     return names.map(name => name + ': ' + name.length)
// }


// function getTemp(data) {
//     return data.temp
// }

// function getStreet(contact) {
//     return contact.street
// }

// function getZipCodes(addresses) {
//     return addresses.map(address => address.zip)
// }

// function upperCaseContactNames(contacts) {
//     return contacts.map(contact => contact.name.toUpperCase())
// }

// // function incrementZipCode(zip) {
// //     return contact.zip + 1
// // }

// function incrementNumber(number) {
//     return number + 1
// }

// /*
// function upperCaseFirstLetter(contacts) {
//     return contacts.map(contact => contact.name.charAt(0).toUpperCase() + contact.name.slice(1))
// }
// */

// function upperCaseFirstLetter(contacts) {
//     let endContact = []
//     for (x = 0; x < contacts.length; x++) {
//         let contact = contacts[x]
//         let modContact = contact.name.charAt(0).toUpperCase() + contact.name.slice(1)
//         endContact.push(modContact)
//     }
//     return endContact
// }

// function palindromeName(name) {
//     let splitName = name.split('')
//     let reverseName = splitName.reverse()
//     let joinName = reverseName.join('')
//     if (name === joinName) {
//         return true
//     } else {
//         return false
//     }
// }

// function alphabetize(string) {
//     let splitString = string.split('')
//     let sortString = splitString.sort()
//     return joinString = sortString.join('')
// }

// function upperCaseWord(string) {
//     let splitString = string.split(' ')
//     let modString = splitString.map(string => string.charAt(0).toUpperCase() + string.slice(1))
//     return joinString = modString.join(' ')
// }
// /*
// function addOne(numbers) {
//     return numbers.map(number => number + 1)
// }
// */

// function addOne(numbers) {
//     let endNums = []
//     for (x = 0; x < numbers.length; x++) {
//         let number = numbers[x]
//         let modNumber = number + 1
//         endNums.push(modNumber)
//     }
//     return endNums
// }
// /*
// function firstCharacterss(names) {
//     return names.map(name => name.charAt(0))
// }
// */

// function firstCharacterss(names) {
//     let endNames = []
//     for (x = 0; x < names.length; x++) {
//         let name = names[x]
//         let modName = name.charAt(0)
//         endNames.push(modName)
//     }
//     return endNames
// }


// function onlyEvens(numbers) {
//     let endNums = []
//     for (x = 0; x < numbers.length; x++) {
//         let number = numbers[x]
//         if (number % 2 === 0) {
//             endNums.push(number)
//         }
//     }
//     return endNums
// }

// function onlySteve(names) {
//     let onlySteve = []
//     for (x = 0; x < names.length; x++) {
//         let name = names[x]
//         if (name === 'steve') {
//             onlySteve.push(name)
//         }
//     }
//     return onlySteve
// }

// function onlyBigEnough(names) {
//     let endName = []
//     for (x = 0; x < names.length; x++) {
//         let name = names[x]
//         if (name.length > 4) {
//             endName.push(name)
//         } else {

//         }
//     }
//     return endName
// }

// function capEachWord(string) {
//     let splitString = string.split(' ')
//     let modString = splitString.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     return joinString = modString.join(' ')
// }

// // const makeLeagueCharacter {
// //     name: name
// //     //     dps: '0'
// //     // mana: '0'
// // }

// //had to look at notes
// function getFirstSuit(input) {
//     return input[0].suit
// }
// //had to look at notes
// function getSecondFace(input) {
//     return input[1].face
// }

// function sumFaces(input) {
//     return input[0].face + input[1].face
// }

// function combineSuits(input) {
//     return input[0].suit + input[1].suit
// }

// function getFirstTemp(input) {
//     return input.temps[0]
// }

// function sumTemps(input) {
//     return input.temps[0] + input.temps[1] + input.temps[2]
// }

// function makeSentence(input) {
//     return input[0] + ' ' + input[1] + ' ' + input[2]
// }

// function averageNumbers(input) {
//     let combine = input[0] + input[1] + input[2] + input[3]
//     return combine / input.length
// }

//could not get without looking at notes
// function countIds(input) {
//     let endOutput = {
//         '1': 0,
//         '2': 0,
//         '4': 0,
//     }
//     for (x = 0; x < input.length; x++) {
//         let put = input[x]
//         let id = put.id
//         endOutput[id]++
//     }
//     return endOutput
// }

// function countLetters(word) {
//     let output = {
//         e: 0,
//         h: 0,
//         l: 0,
//         o: 0
//     }
//     for (x = 0; x < word.length; x++) {
//         let letters = word[x]
//         output[letters]++
//     }
//     return output
// }


// function countNumbersString(string) {
//     let output = {
//         '1': 0,
//         '2': 0,
//         '3': 0
//     }
//     for (x = 0; x < string.length; x++) {
//         let nums = string[x]
//         output[nums]++
//     }
//     delete output[','] // couldnt figure out this part/ how to - ','
//     return output
// }

// function countAttendees(input) {
//     let output = {
//         jimjam: 0,
//         shannon: 0,
//         steve: 0
//     }
//     for (x = 0; x < input.length; x++) {
//         let count = input[x].name //had to look at notes for .name
//         output[count]++
//     }
//     return output
// }

// function getTemp(data) {
//     return data.temp
// }

//incomplete /////////////////////////////////////////////////////////////////////////////////
// function incrementZipCode(contact) {
//     contact.zip = contact.zip + 1; //modify
//     return contact; //then return
// }


// function makeLeagueCharacter(champ, dps, mana) {
//     let stats = {
//         name: champ,
//         dps: dps,
//         mana: mana
//     }
//     return stats
// }

// function makeSentence(input) {
//     return input[0] + ' ' + input[1] + ' ' + input[2]
// }

// function countLetters(input) {
//     let output = {
//         e: 0,
//         h: 0,
//         l: 0,
//         o: 0,
//     }
//     for (x = 0; x < input.length; x++) {
//         let letter = input[x]
//         output[letter]++
//     }
//     return output
// }

// function sumCharacterDpses(champs) {
//     let output = 0
//     for (x = 0; x < champs.length; x++) {
//         let champ = champs[x].dps
//         output = output + champ
//     }
//     return output
// }

// function prettyPrintStats(champ) {
//     return champ.name + ' - DPS: ' + champ.dps + ' - Mana: ' + champ.mana
// }

// function makeCharacterFromString(champ) {
//     let splitString = champ.split(' ')
//     let object = {
//         name: splitString[0],
//         dps: parseInt(splitString[1]),
//         mana: parseInt(splitString[2])
//     }
//     return object
// }

// function collectCharacterNames(champ) {
//     return champ[0].name + ', ' + champ[1].name + ', ' + champ[2].name
// }

// function collectCharacterNames(champs) {
//     let output = ''
//     for (x = 0; x < champs.length; x++) {
//         let champ = champs[x].name
//         output = output + champ + ', '
//     }
//     return output.slice(0, -2)
// }

// function totalMana(champ) {
//     return champ[0].mana + champ[1].mana + champ[2].mana
// }

// function totalMana(champs) {
//     let output = 0
//     for (x = 0; x < champs.length; x++) {
//         let champ = champs[x].mana
//         output = output + champ
//     }
//     return output
// }

// function makeTower(tower) {
//     let output = {
//         health: tower
//     }
//     return output
// }

// function hitTower(tower, damage) {
//     let output = {
//         health: tower.health - damage
//     }
//     return output
// }


// function countNumbersString(input) {
//     let output = {
//         '1': 0,
//         '2': 0,
//         '3': 0,
//     }
//     for (x = 0; x < input.length; x++) {
//         let count = input[x]
//         output[count]++
//     }
//     delete output[','];
//     return output
// }

// function countAttendees(input) {
//     let output = {
//         jimjam: 0,
//         shannon: 0,
//         steve: 0,
//     }
//     for (x = 0; x < input.length; x++) {
//         let names = input[x].name
//         output[names]++
//     }
//     return output
// }

/////////////////////////////////check with steve line 367
// function countAllLettersStringOutput(input) {
//     let output = {
//         a: 0,
//         b: 0,
//         c: 0
//     }
//     for (x = 0; x < input.length; x++) {
//         let letters = input[x]
//         output[letters]++
//     }
//     // for loop over keys and values and put into string to return
//     let stringOutput = ''
//     let letters = Object.keys(output);
//     for (x = 0; x < letters.length; x++) {
//         let letter = letters[x];
//         let count = output[letter]
//         stringOutput = stringOutput + letter + ': ' + count + ', '
//     }
//     return stringOutput.slice(0, -2)
// }





// function getUserIdWithLongestName(people) {
//     // collect into an object the lengths of the names and the ids
//     let countToId = {}
//     for (let x = 0; x < people.length; x++) {
//         let person = people[x];
//         countToId[person.name.length] = person.id
//     }
//     let lengths = Object.keys(countToId).map(x => parseInt(x))

//     let largestLength = lengths[lengths.length - 1]
//     return (countToId[largestLength])
// }



// function getUserIdWithLongestName(people) {
//     let idOutput = 0;
//     let longestNameSoFar = 0;

//     for (x = 0; x < people.length; x++) {
//         let person = people[x];
//         if (person.name.length > longestNameSoFar) {
//             idOutput = person.id;
//             longestNameSoFar = person.name.length
//         }
//     }
//     return idOutput
// }

// function getAverageTempForCity(input) {
//     return input.city[0].temps[0]
// }



/*
module.exports.upperCaser = (names) => {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
} */

// function upperCaser(names) {
//     let endName = []
//     for (x = 0; x < names.length; x++) {
//         let name = names[x]
//         let modName = name.charAt(0).toUpperCase() + name.slice(1)
//         endName.push(modName)
//     }
//     return endName
// }

// function getFirstSuit(input) {
//     return input[0].suit
// }

// function getSecondFace(input) {
//     return input[1].face
// }

// function sumFaces(input) {
//     let endFaces = 0;
//     for (x = 0; x < input.length; x++) {
//         let card = input[x]
//         let newSum = endFaces + card.face
//         endFaces = newSum
//         // x = 0;     endFaces = 0 + 3
//         // x = 1;     endFaces = 3 + 14
//     }
//     return endFaces
// }

// function combineSuits(input) {
//     let endSuits = '';
//     for (x = 0; x < input.length; x++) {
//         let card = input[x]
//         let newSum = endSuits + card.suit
//         endSuits = newSum
//     }
//     return endSuits
// }

// function sumTemps(input) {
//     let endNum = 0;
//     for (x = 0; x < input.temps.length; x++) {
//         let num = input.temps[x]
//         let newNum = endNum + num
//         endNum = newNum
//     }
//     return endNum
// }

// function getFirstTemp(input) {
//     return input.temps[0]
// }

// // function makeSentence(input) {
// //     return input[0] + ' ' + input[1] + ' ' + input[2]
// // }

// function makeSentence(input) {
//     let endSentence = ''
//     for (x = 0; x < input.length; x++) {
//         let sentence = input[x]
//         let newSentence = endSentence + ' ' + sentence
//         endSentence = newSentence
//     }
//     return endSentence.trim()
// }

// // function averageNumbers(input) {
// //     return ((input[0] + input[1] + input[2] + input[3]) / 4)
// // }

// function averageNumbers(input) {
//     let endNum = 0;
//     for (x = 0; x < input.length; x++) {
//         let num = input[x]
//         let newNum = (endNum + num)
//         endNum = newNum
//     }
//     return endNum / input.length
// }



// function countIds(input) {
//     let endOutput = {
//         '1': 0,
//         '2': 0,
//         '4': 0
//     }
//     for (x = 0; x < input.length; x++) {
//         let num = input[x]
//         let id = num.id
//         endOutput[id]++
//     }
//     return endOutput
// }

// function countLetters(letters) {
//     let endOutput = {
//         e: 0,
//         h: 0,
//         l: 0,
//         o: 0
//     };
//     for (x = 0; x < letters.length; x++) {
//         let letter = letters[x];
//         endOutput[letter]++
//     }
//     return endOutput
// }

// function countNumbersString(input) {
//     let output = {
//         '1': 0,
//         '2': 0,
//         '3': 0,
//     }
//     for (x = 0; x < input.length; x++) {
//         let number = input[x]
//         output[number]++
//     }
//     delete output[',']
//     return output
// }

// function countAttendees(input) {
//     let output = {
//         jimjam: 0,
//         shannon: 0,
//         steve: 0
//     }
//     for (x = 0; x < input.length; x++) {
//         let name = input[x].name
//         output[name]++
//     }
//     return output
// }

// function getIndexForCity(cityInfo, cityName) {
//     let cityIndex = 0; // ??
//     for (x = 0; x < cityInfo.length; x++) {
//         let city = cityInfo[x]
//         console.log(city)
//         if (city.name === cityName) {
//             cityIndex = x
//         }
//     }
// }

// function getAverageTempForCity(cityInfo, cityName) {

//     // what index is city = Philly equal to?
//     let cityTemps = 0
//     for (x = 0; x < cityInfo[0].temps.length; x++) {
//         let temp = cityInfo[0].temps[x]
//         cityTemps = cityTemps + temp
//     }
//     return cityTemps / cityInfo[0].temps.length
// }


// function makeSentence(strings) {
//     return strings[0] + ' ' + strings[1] + ' ' + strings[2]
// }



// function fizzbuzzConverter(number) {
//     if (isDivisbleBy(number, 3) & isDivisbleBy(number, 5)) {
//         return 'fizzbuzz'
//     }
//     else if (isDivisbleBy(number, 3)) {
//         return 'fizz'
//     } else if (isDivisbleBy(number, 5)) {
//         return "buzz"
//     } else {
//         return number
//     }
// }

// function isDivisbleBy(larger, smaller) {
//     return (larger % smaller === 0)
// }

// function helloWorld(name) {
//     return "Hello " + name
// }

// function sumOfSquares(number){
//     return (number * number) + (number * number)
// }

// // function flipFlop(string){
// //     return string.charAt(1) + string.charAt(0)
// // }

// function flipFlop(string){
//     let splitString = string.split('')
//     let reverseString = splitString.reverse()
//     return joinString = reverseString.join('')
// }

// function capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.slice(1)
// }

// function mixUp (name) {
//     let splitName = name.split('')
//     let reverseName = splitName.reverse()
//     let joinName = reverseName.join('')
//     return joinName.charAt(0).toUpperCase() + joinName.slice(1)
// }

// function capFirstLast(name){
//     return name.charAt(0).toUpperCase() + name.slice(1, -1) + name.slice(-1).toUpperCase()
// }

// function reverseString(name){
//     let splitName = name.split('')
//     let reverseName = splitName.reverse()
//     let joinName = reverseName.join('')
//     return joinName
// }

// // function upperCaser(names) {
// //     return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
// // }

// function upperCaser(names) {
//     let endNames = []
//     for (x = 0; x < names.length; x++) {
//         let name = names[x]
//         let modName = name.charAt(0).toUpperCase() + name.slice(1)
//         endNames.push(modName)
//     }
//     return endNames
// }

// function firstCharacters(names) {
// return names.map(name => name.charAt(0))
// }

// function plusOne(numbers) {
//     return numbers.map(number => number + 1)
// }

// function lastLetter(names) {
//     return names.map(name => name.slice(-1).toUpperCase())
// }

// function stringCounter(names) {
//     return names.map(name => name.length)
// }

// function isCoolSClub(names) {
//     return names.map(name => name.charAt(0) === 's')
// }

// function characterNums(names) {
//     return names.map(name => name + ': ' + name.length)
// }

// function getTemp(data) {
//     return data.temp
// }

// function getStreet(contact) {
// return contact.street
// }

// function getZipCodes(addresses) {
//     return addresses.map(address => address.zip)
// }

// function upperCaseContactNames(contacts) {
//     return contacts.map(contact => contact.name.toUpperCase())
// }

// function incrementZipCode(contact) {
//  contact.zip = contact.zip + 1
//  return contact
// }

// function incrementNumber(number) {
//     return number + 1
// }

// function upperCaseFirstLetter(contacts) {
// return contacts.map(contact => contact.name.charAt(0).toUpperCase() + contact.name.slice(1))
// }

// function palindromeName(string) {
// let splitString = string.split('')
// let reverseString = splitString.reverse()
// let joinString = reverseString.join('')
// return string === joinString
// }

// function alphabetize(string) {
//     let splitString = string.split('')
//     let sortString = splitString.sort()
//     let joinString = sortString.join('')
//     return joinString
// }

// function upperCaseWord(string) {
//     let splitString = string.split(' ')
//     let capString = splitString.map(string => string.charAt(0).toUpperCase() + string.slice(1))
//     let joinString = capString.join(' ')
//     return joinString
// }

// // function upperCaseWord(strings) {
// //     return strings.map(string => string).charAt(0).toUpperCase() + string.slice(1)
// // }

// function addOne(numbers) {
//     return numbers.map(number => number + 1)
// }

// function firstCharacterss(names) {
//     return names.map(name => name.charAt(0))
// }

// function onlyEvens(numbers) {
//     let endNums = []
//     for (x = 0; x < numbers.length; x++) {
//         let nums = numbers[x]
//         let evenNums = nums % 2 === 0
//         if (evenNums) {
//             endNums.push(nums)
//         }
//     }
//     return endNums
// }

// function onlySteve(names) {
//     let endNames = []
//     for (x = 0; x < names.length; x++) {
//         let name = names[x]
//         let onlySteve = name === 'steve'
//         if (onlySteve) {
//             endNames.push(name)
//         }
//     }
//     return endNames
// }

// // function onlyBigEnough(words) {
// //     return words.map(map => map.length >= 4)
// // }

// function onlyBigEnough(words) {
//     let bigWords = []
//     for (x = 0; x < words.length; x++) {
//         let word = words[x]
//         let finalArr = word.length >=4
//         if (finalArr) {
//             bigWords.push(word)
//         }
//     }
//     return bigWords
// }

// function capEachWord(string) {
//     let splitString = string.split(' ')
//     let modString = splitString.map( word => word.charAt(0).toUpperCase() + word.slice(1))
//     let joinString = modString.join(' ')
//     return joinString
// }

// // function capEachWord(string) {
// //     return string.map(word => word.charAt(0) + word.slice(1))
// // }

// function makeLeagueCharacter(champ, dps, mana) {
//    let stats = { name: champ,
//     dps: dps,
//     mana: mana,
//    }
//    return stats
// }

// function sumCharacterDpses(arr) {
//     return arr[0].dps + arr[1].dps
// }

// function prettyPrintStats(champ) {
//     return `${champ.name} - DPS: ${champ.dps} - Mana: ${champ.mana}`
// }

// function makeCharacterFromString(string) {
//     let splitString = string.split(' ')
//     let stats = {
//         name: splitString[0],
//         dps: parseInt(splitString[1]),
//         mana: parseInt(splitString[2]),
//     }
//     return stats
// }

// function collectCharacterNames(arr) {
//     return `${arr[0].name}, ${arr[1].name}, ${arr[2].name}`
// }

// function totalMana(arr) {
//     let total = arr[0].mana + arr[1].mana + arr[2].mana;
//     return total
// }

// function makeTower(health, hit) {
//     let stats = {
//         health: health,
//     }
//     return stats
// }

// function hitTower(tower, hit) {
// let stats = { health: tower.health - hit
// }
//     return stats
// }

// function getFirstSuit(input) {
//     return input[0].suit
// }

// function getSecondFace(input) {
//     return input[1].face
// }

// function sumFaces(input) {
//     let endFaces = 0;
//     for (x = 0; x < input.length; x++) {
//         let card = input[x].face
//         let newsum = endFaces + card
//         endFaces = newsum
//     }
//     return endFaces
// }

// function combineSuits(input) {
//     return input[0].suit + input[1].suit
// }

// function getFirstTemp(input) {
// return input.temps[0]
// }

// function makeSentence(input) {
// return `${input[0]} ${input[1]} ${input[2]}`
// }

// // function averageNumbers(input) {
// // let total = input[0] + input[1] + input[2] + input[3];
// // return total / 4
// // }

// function averageNumbers(input) {
//     let output = 0;
//     for (i = 0; i < input.length; i++) {
//         let nums = input[i];
//          output = output + nums
//     }
//     return output / input.length
// }

// function countIds(input) {
//     let output = {
//         '1': 0,
//         '2': 0,
//         '4': 0,
//     }
//     for (i = 0; i < input.length; i++) {
//         let nums = input[i];
//         let id = nums.id
//         output[id]++
//     }
//     return output
// }

// function countLetters(input) {
//     let output = {
//         e: 0,
//         h: 0,
//         l: 0,
//         o: 0,
//     }
//     for (i = 0; i < input.length; i++) {
//         let letter = input[i];
//         output[letter]++
//     }
//     return output
// }

// function countNumbersString(numbers) {
//     let output = {
//         '1': 0,
//         '2': 0,
//         '3': 0
//     }
//     for (i = 0; i < numbers.length; i++) {
//         let number = numbers[i];
//         output[number]++
//     }
//     delete output[',']
//     return output
// }

// function countAttendees(input) {
//     let output = {
//         jimjam: 0,
//         shannon: 0,
//         steve: 0,
//     }
//     for (i = 0; i < input.length; i++) {
//         let name = input[i].name;
//         output[name]++
//     }
//     return output
// }

// function countAllLettersStringOutput(input) {
//     let output = {
//         'a': 0,
//         'b': 0,
//         'c': 0,
//     }
//     for (i = 0; i < input.length; i++) {
//         let letter = input[i]
//         output[letter]++
//     }
//     return output.a
// }


// //     function allNumbersTheSame ( element, index, input) {
// //         return element >= 10;
// //         input.every()
// // } // mdn .every


// function fizzbuzzConverter(number) {
//     if (divide(number, 3) && divide(number, 5)) {
//         return 'fizzbuzz'
//     } else if (divide(number, 3)) {
//         return 'fizz'
//     } else if (divide(number, 5)) {
//         return 'buzz'
//     } else {
//         return number
//     }
// }

// function divide (number, num) {
//     return (number % num === 0)
// }

// function findMostCommonLetter(input) {
//     // let objectKey = Object.keys(output)[0]
//     const output = {
//         a: 0,
//         b: 0,
//         c: 0,
//     }
//     // for ( i = 0; i < input.length; i++) {
//     //     let
//     // }
//     console.log(Object.keys(output))
// }

// function countToTen() {
//     for (x = 1; x < 11; x++) {
//         console.log(x)
//     }
// }

// function fizzbuzzConverter(number) {
//     if (isDivisbleBy(number, 3) && (isDivisbleBy(number, 5))) {
//         return 'fizzbuzz'
//     } else if (isDivisbleBy(number, 3)) {
//         return 'fizz'
//     } else if (isDivisbleBy(number, 5)) {
//         return 'buzz'
//     } else {
//         return number
//     }
// }

// function isDivisbleBy(large, small) {
//     return (large % small === 0)
// }

// function helloWorld(string) {
//     return 'Hello ' + string
// }

// function sumOfSquares(number) {
//     return (number * number) + (number * number)
// }

// function flipFlop(string) {
//     return string.charAt(1) + string.charAt(0)
// }

// function capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1)
// }

// function mixUp(string) {
//     let splitString = string.split('');
//     let reverseString = splitString.reverse()
//     let joinString = reverseString.join('')
//     return joinString.charAt(0).toUpperCase() + joinString.slice(1)
// }

// function capFirstLast(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1, -1) + string.slice(-1).toUpperCase()
// }

// function reverseString(string) {
//     let splitString = string.split('');
//     let reverseString = splitString.reverse();
//     return joinString = reverseString.join('')
// }

// function upperCaser(strings) {
//     return strings.map(string => string.charAt(0).toUpperCase() + string.slice(1))
// }

// function firstCharacters(strings) {
//     return strings.map(string => string.charAt(0))
// }

// function plusOne(numbers) {
//     return numbers.map(number => number + 1)
// }

// function lastLetter(strings) {
//     return strings.map(string => string.slice(-1).toUpperCase())
// }

// function stringCounter(strings) {
//     return strings.map(string => string.length)
// }

// function isCoolSClub(strings) {
//     return strings.map(string => string.charAt(0) === 's')
// }

// function characterNums(input) {
//     return input.map(name => name + ': ' + name.length)
// }

// function getTemp(data) {
// return data.temp
// }

// function getStreet(contact) {
//     return contact.street
// }

// function getZipCodes(addresses) {
// return addresses.map(address => address.zip)
// }

// function upperCaseContactNames(contacts) {
// return contacts.map(contact => contact.name.toUpperCase())
// }

// function incrementZipCode(contact) {
//     contact.zip = contact.zip + 1
//     return contact
// }

// function incrementNumber(number) {
//     return number + 1
// }

// function upperCaseFirstLetter(contacts) {
//     return contacts.map(contact => contact.name.charAt(0).toUpperCase() + contact.name.slice(1))
// }

// function palindromeName(string) {
//     let splitString = string.split('')
//     let reverseString = splitString.reverse()
//     let joinString = reverseString.join('')
//     if (string === joinString) {
//         return true
//     } else {
//         return false
//     }

// }

// function alphabetize(string) {
// let splitString = string.split('');
// let sortString = splitString.sort();
// let joinString = sortString.join('')
// return joinString

// }

// function upperCaseWord(string) {
//     let splitString = string.split(' ');
//     let capString = splitString.map(string => string.charAt(0).toUpperCase() + string.slice(1));
//     let joinString = capString.join(' ')
//     return joinString
// }

// function addOne(array) {
//     return array.map(arr => arr + 1)
// }

// function firstCharacterss(array) {
//     return array.map(arr => arr.charAt(0))
// }

// function onlyEvens(array) {
//     let output = []
//     for (x = 0; x < array.length; x++) {
//         let number = array[x]
//         let num = number % 2 === 0
//         if (num) {
//             output.push(number)
//         }
//     }
//     return output
// }

// function onlySteve(names) {
//     let output = []
//     for (x = 0; x < names.length; x++) {
//         let name = names[x]
//         let num = name === 'steve'
//         if (num) {
//             output.push(name)
//         }
//     }
//     return output
// }

// function helloWorld(name) {
//     return 'Hello ' + name
// }

//back at it 11/7/22

// function fizzbuzzConverter(number) {
//     if (isDivisibleBy(number, 3) && isDivisibleBy(number, 5)) {
//         return "fizzbuzz"
//     } else if (isDivisibleBy(number, 3)) {
//         return 'fizz'
//     } else if (isDivisibleBy(number, 5)) {
//         return 'buzz'
//     } else {
//         return number
//     }
// }

// function isDivisibleBy(big, small) {
//     return (big % small === 0)
// }

// function helloWorld(name) {
// return 'Hello ' + name
// }

// function sumOfSquares(number) {
// return number * number+ number * number
// }

// function flipFlop(input) {
//     return input.charAt(1) + input.charAt(0)
// }

// function capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.slice(1)
// }

// function mixUp(name){
//     let splitName = name.split('')
//     let reverseName = splitName.reverse()
//     let joinName = reverseName.join('')
//     return joinName.charAt(0).toUpperCase() + joinName.slice(1)
// }

// function capFirstLast (name) {
//     return name.charAt(0).toUpperCase() + name.slice(1, -1) + name.slice(-1).toUpperCase(0)
// }

// function reverseString(string){
//     let splitString = string.split('')
//     let reverseString = splitString.reverse()
//     return joinString = reverseString.join('')
// }

// function upperCaser(names) {
//     return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
// }

// function firstCharacters(names) {
//     return names.map(name => name.charAt())
// }

// function plusOne(numbers) {
//     return numbers.map(number => number + 1)
// }

// function lastLetter(names) {
//     return names.map(name => name.slice(-1).toUpperCase())
// }

// function stringCounter(names) {
//     return names.map(name => name.length)
// }

// function isCoolSClub(names) {
// return names.map(name => name.charAt(0) === 's')
// }

// function characterNums(names) {
//     return names.map(name => name + ': ' + name.length)
// }

// function getTemp(data) {
//     return data.temp
// }

// function getStreet(contact) {
//     return contact.street
// }

// function getZipCodes(addresses) {
//     return addresses.map(address => address.zip)
// }

// function upperCaseContactNames(contacts) {
//     return contacts.map(contact => contact.name.toUpperCase())
// }

// function incrementZipCode(contact) {
//     contact.zip = contact.zip + 1
//     return contact
// }

// function incrementNumber(number) {
// return number + 1
// }

// function upperCaseFirstLetter(contacts) {
//     return contacts.map(contact => contact.name.charAt(0).toUpperCase() + contact.name.slice(1))
// }

// function palindromeName(name) {
// let splitName = name.split('');
// let reverseName = splitName.reverse();
// let joinName = reverseName.join('');
// return joinName === name
// }
 
// function upperCaseWord(string) {
//     let words = string.split(' ');
//     let capWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
// return capWords.join(' ')
// }

// function addOne(numbers) {
//     return numbers.map(number => number + 1)
// }

// function firstCharacterss(names) {
//     return names.map(name => name.charAt())
// }

// function helloWorld(name) {
// return 'Hello ' + name
// }

// function sumOfSquares(sum) {
// return (sum * sum) + (sum * sum)
// }

// function flipFlop(string) {
//     return string.charAt(1) + string.charAt(0)
// }

// function capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.substr(1)
// }

// function mixUp(name) {
// let splitName = name.split('');
// let reverseName = splitName.reverse();
// let joinName = reverseName.join('')
// return joinName.charAt(0).toUpperCase() + joinName.slice(1)
// }

// function capFirstLast(name) {
//     return name.charAt(0).toUpperCase() + name.slice(1, -1) + name.slice(-1).toUpperCase()
// }

// function reverseString(string) {
//     let splitString = string.split("");
//     let reverse = splitString.reverse();
//     return joinString = reverse.join("")
// }

// function upperCaser(names) {
//     return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
// }

// function firstCharacters(names) {
//     return names.map(name => name.charAt(0))
// }

// function plusOne(numbers) {
//     return numbers.map(number => number + 1)
// }

// function lastLetter(names) {
//     return names.map(name => name.slice(-1).toUpperCase())
// }

// function stringCounter(names) {
// return names.map(name => name.length)
// }

// function isCoolSClub(names) {
//     return names.map(name => name.charAt(0) === "s")
// }

// function characterNums(names) {
//     return names.map(name => name + ': ' + name.length)
// }

// function getTemp(data) {
// return data.temp
// }

// function getStreet(contact) {
//     return contact.street
// }

// function getZipCodes(addresses) {
// return addresses.map(address => address.zip)
// }

// function upperCaseContactNames(contacts){
//     return contacts.map(contact => contact.name.toUpperCase())
// }

// function incrementZipCode(contact) {
//     contact.zip = contact.zip + 1
//     return contact
// }

// function reverseName(name) {
//     let splitName = name.split('');
//     let reverseSplit = splitName.reverse();
//     let joinName = reverseSplit.join('');
//     return joinName
// }


// function palindromeName(name) {
//     if (name === reverseName(name)) {
//         return true
//     } else {
//         return false
//     }
// }

// function alphabetize(string) {
//     let splitString = string.split('')
//   let sortString =  splitString.sort();
//   return joinString = sortString.join('')
// }

// function upperCaseWord(string){
// let splitString = string.split(' ');
//     let capString = splitString.map(word => word.charAt(0).toUpperCase() + word.slice(1))
// return joinString = capString.join(' ')
// }

// function addOne(numbers) {
//     return numbers.map(number => number + 1)
// }

// function firstCharacterss(names) {
//     return names.map(name => name.charAt(0))
// }

// function isDivisbleBy(big, small) {
//     return (big / small)
// }

// function fizzbuzzConverter(number) {
  
//     if (isDivisbleBy(number, 3) === Math.floor(isDivisbleBy(number, 3)) && isDivisbleBy(number, 5) === Math.floor(isDivisbleBy(number, 5)) )  {
//         return 'fizzbuzz'
//     } else  if (isDivisbleBy(number, 3) === Math.floor(isDivisbleBy(number, 3))) {
//         return 'fizz'
//     } else if (isDivisbleBy(number, 5) === Math.floor(isDivisbleBy(number, 5)))  {
// return 'buzz'
//     } else {
//         return number
//     }
// }

// function incrementNumber(number) {
//     return number + 1
// }

// function upperCaseFirstLetter(contacts) {
//     return contacts.map(contact => contact.name.charAt(0).toUpperCase() + contact.name.slice(1))
// }

// function onlyEvens(numbers) {
//     return numbers.filter(number => number % 2 === 0)
// }

// function onlySteve(names) {
//     return names.filter(name => name === 'steve')
// }

// function onlyBigEnough(words) {
// return words.filter(word => word.length >= 4)
// }

// function capEachWord(words) {
//     let splitWords = words.split(' ');
//     let capWords = splitWords.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     return joinWords = capWords.join(' ');
// }

// function getFirstSuit(input) {
//     return input[0].suit
// }

// function getSecondFace(input) {
//     return input[1].face
// }

// function sumFaces(input){
//     return input[0].face + input[1].face
// }

// function combineSuits(input) {
//     return input[0].suit + input[1].suit
// }

//just to look at loops, //
// function combineSuits(input) {
//     let endSuits = '';
//     for (x = 0; x < input.length; x++) {
//         let card = input[x]
//         let newSum = endSuits + card.suit
//         endSuits = newSum
//     }
//     return endSuits
// }
//just to look at loops, //

// function averageNumbers(input) {
//     let output = 0;
//     for (i = 0; i < input.length; i++) {
//         let nums = input[i];
//          output = output + nums
//     }
//     return output / input.length
// }
//just to look at loops, //

// function sumFaces(input) {
//     let endFaces = 0;
//     for (x = 0; x < input.length; x++) {
//         let card = input[x].face
//         let newsum = endFaces + card
//         endFaces = newsum
//     }
//     return endFaces
// }


// function sumTemps(input) {
//     return input.temps[0] + input.temps[1] + input.temps[2]
// }

// function getFirstTemp(input) {
//     return input.temps[0]
// }

// function makeSentence(input) {
//     return input[0] + ' ' + input[1] + ' ' + input[2]
// }

// function sumTemps(input) {
//     let endTemps = 0; {
//         for (x = 0; x < input.temps.length; x++) {
//             let temp = input.temps[x]
//             let comTemps = endTemps + temp
//             endTemps = comTemps
//         }
//         return endTemps
//     }
// }

// function averageNumbers(input) {
//  let comNums = input[0] + input[1] + input[2] + input[3];
//  return comNums / input.length
// }

// function averageNumbers(input) {
//     let avgNums = 0;
//     for (x = 0; x < input.length; x++){
//         let num = input[x];
//         let comNums= avgNums + num
//         avgNums = comNums 
//     }
//     return avgNums / input.length
// }

// function checkForY(word) {
//     let output = {
//         y: 0
//     }
//     for (x = 0; x < word.length; x++) {
//         let letters = word[x]
//         output[letters]++
//     }
//     if (output.y >= 1) {
//         return true
//     } else {

//     }
// }

// function checkForY (input) {
// return input.includes('y')
// }

// function sumArray(array) {
//     return array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8]
// }


//working test
// function sumArray(input) {
//     let sumNums = 0;
//     for (x = 0; x < input.length; x++) {
//         let num = input[x];
//         let comNums = sumNums + num
//         sumNums = comNums
//     }
//     return sumNums
// }

//trying to get to work
// function sumArray(input) {
//     let sumNums = 0;
//     for (x = 0; x < input.length; x++) {
//         let num = input[x];
//         let comNums = sumNums + num
//         sumNums = comNums
//     }
//     return sumNums
// }


// function makeLeagueCharacter(name, dps, mana) {
// let stats = {
//     name: name,
//     dps: dps,
//     mana: mana
// }
// return stats
// }

// function sumCharacterDpses([champ, champp]) {
//     return champ.dps + champp.dps
// }

// function isDivisbleBy (num, num2) {
//     return num / num2
// }

const isDivisbleBy = (num, num2) => num / num2;

// function fizzbuzzConverter(num) {
//     return num 
// }

const fizzbuzzConverter = num => {
    if ((num % 3 === 0) && (num % 5 === 0)) {
        return 'fizzbuzz'
    }
    else if (num % 3 === 0) {
        return 'fizz'
    } else if (num % 5 === 0) {
        return 'buzz'
    } else {
        return num
    }
};

// const fizzbuzzConverter = num => num;

const helloWorld = name => 'Hello ' + name;

// function helloWorld(name) {
//     return 'Hello ' + name;
// }

const sumOfSquares = num => (num * num) + (num * num);

function flipFlop(string) {
    let splitString = string.split('');
    let reverseString = splitString.reverse();
    return joinString = reverseString.join('')
}

const capitalize = name => name.charAt(0).toUpperCase() + name.slice(1);

function reverseString(string) {
    let splitString = string.split('');
    let reverseString = splitString.reverse();
    return joinString = reverseString.join('')
}

// const mixUp = name => {
//     name = reverseString(name);
//     return name.charAt(0).toUpperCase() + name.slice(1)
// }

const mixUp = name => reverseString(name).charAt(0).toUpperCase() + reverseString(name).slice(1);

const capFirstLast = name => {
    return name.charAt(0).toUpperCase() + name.slice(1, -1) + name.slice(-1).toUpperCase();
}

// const capFirstLast = name => name.charAt(0).toUpperCase() + name.slice(1, -1) + name.slice(-1).toUpperCase();

const upperCaser = names => names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

const firstCharacters = (names) => names.map(name => name.charAt(0));

const plusOne = (numbers) => numbers.map(number => number + 1);

const lastLetter = (names) => {
    return names.map(name => name.slice(-1).toUpperCase())
};

const stringCounter = (names) => names.map(name => name.length);

// function isCoolSClub(names) {
//     return check = names.map(name => if (name.charAt(0) === 's') {
//         return true
//     } else {
//         return false
//     }
//     )
// }

//2132


// function onlyBigEnough(words) {
//     let bigWords = []
//     for (x = 0; x < words.length; x++) {
//         let word = words[x]
//         let finalArr = word.length >= 4
//         if (finalArr) {
//             bigWords.push(word)
//         }
//     }
//     return bigWords
// }


// function isCoolSClub(names) {
// // let firstLetter = names.map(name => name.charAt(0));

//     // let name = names.map(name => name)

//     let output = []

//     for (i = 0; i < names.length; i++);
//     let name = names[i]
//     if (name.charAt(0) === 's') {
//         output.push(true)
//     } else {
//         output.push(false)
//     }
//     return output
// }

// function isCoolSClub(names) {
//     return names.map(name => name.charAt(0) === 's' )
// }

const isCoolSClub = names => names.map(name => name.charAt(0) === 's');


const characterNums = names => names.map(name => name + ": " + name.length);

const getTemp = data => data.temp;

const getStreet = contact => contact.street;

const getZipCodes = addresses => addresses.map(address => address.zip)

function upperCaseContactNames(contacts) {
    return contacts.map(contact => contact.name.toUpperCase())
}

const incrementZipCode = contact => {
    contact.zip = contact.zip + 1;
    return contact;
}

const incrementNumber = number => number + 1;

const upperCaseFirstLetter = contact => contact.map(element => element.name.charAt(0).toUpperCase() + element.name.slice(1));



//Original
// function reverseName(name) {
//     let splitName = name.split('');
//     let reverseName = splitName.reverse();
//     return joinName = reverseName.join('')
// }

//Reassigning the vairable over and over
function reverseName(name) {
    name = name.split('');
    name = name.reverse();
    return name.join('')
}

const palindromeName = name => {
    let reverseName = name.split('');
    reverseName = reverseName.reverse();
    reverseName = reverseName.join('');
    if (name === reverseName) {
        return true
    } else {
        return false
    }
}

const alphabetize = word => word.split('').sort().join('');

const upperCaseWord = string => {
    string = string.split(' ');
    string = string.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return string.join(' ');
}

const addOne = numbers => numbers.map(num => num + 1);

const firstCharacterss = names => names.map(name => name.charAt(0));

const onlyEvens = nums => nums.filter(num => num % 2 ===0);

const onlySteve = names => names.filter(name => name === "steve");

// const capEachWord = words => {
//     words = words.split(' ');
//     words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     return words.join(' ')
// }

const capEachWord = words => words.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const onlyBigEnough = names => names.filter(name => name.length >= 4);

const sumArray = numbers => {
    let output = 0;
    for (i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        output += number
    }
    return output
}

const averageNumbers = numbers => {
    let output = 0;
    for (i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        output += number;
    }
    return output / numbers.length;
}

function makeLeagueCharacter(name, dps, mana) {
   let champ = {
    name: name,
    dps: dps,
    mana: mana,
   }
   return champ
}

function sumCharacterDpses(char1) {
    let output = 0;
    for (i = 0; i < char1.length; i++) {
        let champ = char1[i]
        dps = champ.dps;
        output += dps
    }
    return output
}

// const sumCharacterDpses = array => {
//     champDPS = array.map(element => element.dps);
//     return champDPS[0] + champDPS[1];
// }

// function sumCharacterDpses(array) {
//     return array[0].dps + array[1].dps;
// }

const prettyPrintStats = champ => `${champ.name} - DPS: ${champ.dps} - Mana: ${champ.mana}`;
const makeCharacterFromString = champ => {
    champ = champ.split(' ');
    champName = champ[0];
    champDps = champ[1];
    champMana = champ[2];
    return leagueChamp = makeLeagueCharacter(champName, +champDps, +champMana);
}

function collectCharacterNames(names) {
    let output = '';
    for (i = 0; i < names.length; i++) {
        let champ = names[i].name;
        output += champ + ', '
    }
    return output.slice(0, -2) //slicing is an easy way to delete the unwanted ", "
}

//below is wrong, i am X the first number 3 times.
// const totalMana = champs => {
//     champMana = champs.map(element => element.mana);
//     let total = 0;
//     for (i = 0; i < champMana.length; i++) {
//         let mana = champMana[0]; //HERE! i am always loopin the first index, 
//instead up updating to the next index each iteartion
//         total += mana;
//     }
//     console.log(champMana) //[300, 200, 500]
//     return total // 900 ...?
// }

const totalMana = champs => {
    champMana = champs.map(element => element.mana);
    let total = 0;
    for (i = 0; i < champMana.length; i++) {
        let mana = champMana[i];
        total += mana;
    }
    return total // 900 ...?
}

// const totalMana = champs => {
//     champMana = champs.map(element => element.mana);
//     return champMana[0] + champMana[1] + champMana[2];
// }

const makeTower = (health) => {
let tower = {
    health: health,
}
return tower
}

const hitTower = (tower, number) => {
    tower.health -= number;
    return tower
}

const getFirstSuit = cards => {
    return cards[0].suit
}

const getSecondFace = cards => {
    return cards[1].face
}

// const sumFaces = cards => cards[0].face + cards[1].face;

const sumFaces = cards => {
    let output = 0;
    for (i = 0; i < cards.length; i++) {
        let face = cards[i].face;
        output += face
    }
    return output
}

const combineSuits = cards => cards[0].suit + cards[1].suit;

const getFirstTemp = input => input.temps[0];

// const sumTemps = input => {
//     return input.temps[0] + input.temps[1] + input.temps[2];
// }

const sumTemps = input => {
    let output = 0;
    for(i = 0; i < input.temps.length; i++) {
let temp = input.temps[i];
output += temp
    }
    return output
}

const makeSentence = strings => {
    return strings.join(' ')
}

const averageNumberss = input => {
    let output = 0;
    input.map(element => output += element);
    return output / input.length;
}

function checkForY(string) {
    let splitString = string.split('');
    for (i = 0; i < splitString.length; i++) {
        if (splitString[i] === 'y') {
            return true
        }
    }
    return false
}

// https://stackoverflow.com/questions/69422117/counting-characteres-in-string-using-object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of 
// above is two good resources for what im trying to do below.
//i need to use a for...of loop like above. 
function countIds(input) {
    let output = {
        '1': 0,
        '2': 0,
        '4': 0
    }
    for (i = 0; i < input.length; i++) {
        let num = input[i]
        let id = num.id
        output[id]++;
    }
return output}

const countLetters = string => {
    let output = {
        e: 0,
        h: 0,
        l: 0,
        o: 0
    }
    let splitWord = string.split('');
    for (i = 0; i < splitWord.length; i++) {
        let letter = splitWord[i];
        output[letter]++
    }
    return output
}

let countNumbersString = string => {
    let output = {
        '1': 0,
        '2': 0,
        '3': 0
    }
    let split = string.split('')
    for (i = 0; i < split.length; i = i + 2) {
        let num = split[i];
        output[num]++
    }
    return output
}

const countAttendees = names => {
    let output = {
        jimjam: 0,
        shannon: 0,
        steve: 0
    }
    for (i = 0; i < names.length; i++) {
        let eachObject = names[i];
        let eachKey = eachObject.name
        output[eachKey]++
    }
    return output
}

const findMostCommonLetter = input => {
    let count = {
        a: 0,
        b: 0,
        c: 0
    }
    let splitInput = input.split('');
    for(i = 0; i < input.length; i++){
        let letter = splitInput[i];
        count[letter]++
    }
    if (count.a > count.b && count.a > count.b) {
        return 'a'
    } else if (count.b > count.a && count.b > count.b) {
        return 'b'
    } else {
        return 'c'
    }
}

const countAllLettersStringOutput = input => {
    let count = {
        a: 0,
        b: 0,
        c: 0
    }
    let splitInput = input.split('');
    for (i = 0; i < input.length; i++) {
        let letter = splitInput[i];
        count[letter]++
    }
    return `a: ${count.a}, b: ${count.b}, c: ${count.c}`
}


module.exports = {
   countAllLettersStringOutput, findMostCommonLetter, countAttendees, countNumbersString, countLetters, countIds, checkForY, averageNumberss, makeSentence, sumTemps, getFirstTemp, combineSuits, sumFaces, getSecondFace, getFirstSuit, hitTower, makeTower, totalMana, collectCharacterNames, makeCharacterFromString, prettyPrintStats, sumCharacterDpses, makeLeagueCharacter, averageNumbers, sumArray, onlyBigEnough, capEachWord, onlySteve, onlyEvens, firstCharacterss, addOne, upperCaseWord, alphabetize, palindromeName, reverseName, upperCaseFirstLetter, incrementNumber, incrementZipCode, upperCaseContactNames, getZipCodes, getStreet, getTemp, characterNums, isCoolSClub, stringCounter, lastLetter, plusOne, firstCharacters, upperCaser, capFirstLast, mixUp, reverseString, isDivisbleBy, fizzbuzzConverter, helloWorld, sumOfSquares, flipFlop, capitalize,
 }