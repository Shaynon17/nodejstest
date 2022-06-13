const { isCoolSClub, palindromeName, upperCaseFirstLetter, incrementZipCode, upperCaseContactNames, getZipCodes, getTemp, getStreet, characterNums, stringCounter, firstCharacters, lastLetter, plusOne, upperCaser, fizzbuzzConverter, reverseString, capFirstLast, mixUp, helloWorld, sumOfSquares, flipFlop, capitalize, reverseNum, palindrome, } = require("./fizzbuzz")




test("fizzbuzzConverter(1) will return 1", () => {
    expect(fizzbuzzConverter(1)).toBe(1);
})

test("fizzbuzzConverter(3) will return 'fizz'", () => {
    expect(fizzbuzzConverter(3)).toBe('fizz');
})

test('fizzbuzzconverter(5) will return "buzz"', () => {
    expect(fizzbuzzConverter(5)).toBe('buzz');
})

test('fizzbuzzconverter(15) will return "buzz"', () => {
    expect(fizzbuzzConverter(15)).toBe('fizzbuzz');
})

test('fizzbuzzconverter(10) will return "buzz"', () => {
    expect(fizzbuzzConverter(10)).toBe('buzz');
})

test('fizzbuzzconverter(9) will return "buzz"', () => {
    expect(fizzbuzzConverter(9)).toBe('fizz');
})

test('fizzbuzzconverter(150) will return "buzz"', () => {
    expect(fizzbuzzConverter(150)).toBe('fizzbuzz');
})

test('Hello world steve returns steve', () => {
    expect(helloWorld('Steve')).toBe('Hello Steve')
})

test('The square of 5 added to the square of 5 is 50', () => {
    expect(sumOfSquares(5)).toBe(50)
})

test('ST returns as TS', () => {
    expect(flipFlop('st')).toBe('ts')
})

test('capitalize will uppercase the first letter', () => {
    expect(capitalize('shannon')).toBe('Shannon')
})

test('Steve will get inverted and capitalized', () => {
    expect(mixUp('steve')).toBe('Evets')
})

test('capitalize first and last', () => {
    expect(capFirstLast('shannon')).toBe('ShannoN')
})


test('"123456" will reverse', () => {
    expect(reverseString("123456")).toBe("654321")
})


test('will uppercase each name', () => {
    expect(upperCaser(['steve', 'shannon', 'jimbob'])).toStrictEqual(['Steve', 'Shannon', 'Jimbob'])
})

test('first letter of each', () => {
    expect(firstCharacters(['steve', 'shannon', 'jimbob']))
        .toStrictEqual(['s', 's', 'j'])
})

test('add one', () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([2, 3, 4])
})


test('return and cap last letter', () => {
    expect(lastLetter(['shannon', 'steve']))
        .toStrictEqual(['N', 'E'])
})

test('returns the length of the strings', () => {
    expect(stringCounter(['shannon', 'steve']))
        .toStrictEqual([7, 5])
})

test('returns true for all strings with a first letter of S', () => {
    expect(isCoolSClub(['shannon', 'jim', 'steve']))
        .toStrictEqual([true, false, true])
})


//['steve', 'shannon']
//['steve: 5', 'shannon: 7']
// the input is a name, the output is the name and # of characters

test('returns # of characters with name', () => {
    expect(characterNums(['shannon', 'steve']))
        .toStrictEqual(['shannon: 7', 'steve: 5'])
})

test('can extract the temp from the object', () => {
    let data = {
        temp: 47.5,
        alt: 1300
    }
    expect(getTemp(data)).toBe(47.5)

    let data2 = {
        temp: 50,
        alt: 1300
    }
    expect(getTemp(data2)).toBe(50)
})


test('can return street address from contact', () => {
    let contact = {
        street: '440 Germanhouse Ave',
        zip: 11111
    }
    expect(getStreet(contact)).toBe('440 Germanhouse Ave')
})

test('can return zip codes from all addresses', () => {
    let addresses = [
        {
            street: '440 Germanhouse Ave',
            zip: 11111
        },
        {
            street: '440 Germanhouse Ave',
            zip: 44444
        }
    ];
    expect(getZipCodes(addresses)).toStrictEqual([11111, 44444])
})

test('uppercase all the names of contacts', () => {
    let contacts = [
        {
            name: 'steve',
            zip: 11111
        },
        {
            name: 'shannon',
            zip: 44444
        }
    ];
    expect(upperCaseContactNames(contacts)).toStrictEqual(["STEVE", "SHANNON"])
})


test('changes the zip code to be +1', () => {
    let contact = {
        name: 'steve',
        zip: 11111
    }

    let result = incrementZipCode(contact);

    expect(result.zip).toBe(11112)
})

test('uppercase all the first characts of the names of contacts', () => {
    let contacts = [
        {
            name: 'steve',
            zip: 11111
        },
        {
            name: 'shannon',
            zip: 44444
        }
    ];
    expect(upperCaseFirstLetter(contacts)).toStrictEqual(["Steve", "Shannon"])
})

test('is a word a palindrome', () => {
    expect(palindromeName('madam')).toBe(true)
})

test('is a word a palindrome', () => {
    expect(palindromeName('shannon')).toBe(false)
})