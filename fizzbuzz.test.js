const { onlyBigEnough, capEachWord, incrementNumber, onlySteve, onlyEvens, isCoolSClub, addOne, addOneMap, alphabetize, palindromeName, upperCaseFirstLetter, incrementZipCode, upperCaseContactNames, getZipCodes, getTemp, getStreet, characterNums, stringCounter, firstCharacters, lastLetter, plusOne, upperCaser, fizzbuzzConverter, reverseString, capFirstLast, mixUp, helloWorld, sumOfSquares, flipFlop, capitalize, reverseNum, palindrome, upperCaseWord, } = require("./fizzbuzz")

// cd ~/coding/nodejstest/



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
/*

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

    contact = incrementZipCode(contact);

    expect(contact.zip).toBe(11112)
})

test('changes the zip code to be +1', () => {
    let number = 5

    number = incrementNumber(number);

    expect(number).toBe(6)
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

test('cadb will return abcd', () => {
    expect(alphabetize('cdab')).toBe('abcd')
})

test('3524 will return 2345', () => {
    expect(alphabetize('3524')).toBe('2345')
})

//idk how to do the below yet //line 734 for reference
test('capitalize each first letter in each word"', () => {
    expect(upperCaseWord('how are you')).toBe('How Are You')
})

test('add one to each number', () => {
    expect(addOne([1, 2, 3, 4])).toStrictEqual([2, 3, 4, 5])
})

//test('add one to each number', () => {
//   expect(addOneMap([1, 2, 3, 4])).toStrictEqual([2, 3, 4, 5])
//})

test('first letter of each', () => {
    expect(firstCharacters(['steve', 'shannon', 'jimbob']))
        .toStrictEqual(['s', 's', 'j'])
})



test('only evens', () => {
    expect(onlyEvens([1, 2, 3, 4, 5, 6]))
        .toStrictEqual([2, 4, 6])
})

test('only steve', () => {
    expect(onlySteve(['steve', 'sam', 'steve']))
        .toStrictEqual(['steve', 'steve'])
})

test('only words length 4 or more', () => {
    expect(onlyBigEnough(['steve', 'sam', 'se', 'horse']))
        .toStrictEqual(['steve', 'horse'])
})

test('Cap first letter of each word', () => {
    expect(capEachWord("how are you")).toBe("How Are You")
})
*/


// test('make a league character factory', () => {
//     let xerath = makeLeagueCharacter("Xerath", 4, 300);
//     expect(xerath).toStrictEqual({ name: "Xerath", dps: 4, mana: 300 });

//     let garen = makeLeagueCharacter("Garen", 3, 200);

//     let totalDps = sumCharacterDpses([xerath, garen]);
//     expect(totalDps).toBe(7);

//     let stats = prettyPrintStats(xerath);
//     expect(stats).toBe("Xerath - DPS: 4 - Mana: 300");

//     let wukong = makeCharacterFromString("Wukong 6 500");
//     expect(wukong).toStrictEqual({ name: "Wukong", dps: 6, mana: 500 });


//     let names = collectCharacterNames(xerath, garen, wukong);
//     expect(names).toBe("Xerath, Garen, Wukong");

//     let manaTotal = totalMana(xerath, garen, wukong);
//     expect(manaTotal).toBe(1000);

//     let tower = makeTower(1500, 20);
//     expect(tower).toStrictEqual({ health: 1500 });

//     let towerAfterHit = hitTower(tower, 50);
//     expect(towerAfterHit).toStrictEqual({ health: 1450 });

// })