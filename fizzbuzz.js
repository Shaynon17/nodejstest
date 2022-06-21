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
*/