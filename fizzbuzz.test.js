const { getIndexForCity, countToTen, allNumbersTheSame, countAttendees, getUserIdWithLongestName, hitTower, makeTower, totalMana, collectCharacterNames, makeCharacterFromString, prettyPrintStats, sumCharacterDpses, getAverageTempForCity, countAllLettersStringOutput, findMostCommonLetter, makeLeagueCharacter, firstCharacterss, countNumbersString, countLetters, countIds, averageNumbers, makeSentence, getFirstTemp, sumTemps, combineSuits, sumFaces, getSecondFace, getFirstSuit, onlyBigEnough, capEachWord, incrementNumber, onlySteve, onlyEvens, isCoolSClub, addOne, addOneMap, alphabetize, palindromeName, upperCaseFirstLetter, incrementZipCode, upperCaseContactNames, getZipCodes, getTemp, getStreet, characterNums, stringCounter, firstCharacters, lastLetter, plusOne, upperCaser, fizzbuzzConverter, reverseString, capFirstLast, mixUp, helloWorld, sumOfSquares, flipFlop, capitalize, reverseNum, palindrome, upperCaseWord, } = require("./fizzbuzz")

// cd ~/coding/nodejstest/

//test

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


// // // //['steve', 'shannon']
// // // //['steve: 5', 'shannon: 7']
// // // // the input is a name, the output is the name and # of characters

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

// // hint: the body is two lines not one
// test('changes the zip code to be +1', () => {
//     let contact = {
//         name: 'steve',
//         zip: 11111
//     }

//     contact = incrementZipCode(contact);

//     expect(contact.zip).toBe(11112)
// })

// test('changes the zip code to be +1', () => {
//     let number = 5

//     number = incrementNumber(number);

//     expect(number).toBe(6)
// })

// test('uppercase all the first characters of the names of contacts', () => {
//     let contacts = [
//         {
//             name: 'steve',
//             zip: 11111
//         },
//         {
//             name: 'shannon',
//             zip: 44444
//         }
//     ];
//     expect(upperCaseFirstLetter(contacts)).toStrictEqual(["Steve", "Shannon"])
// })

// test('is a word a palindrome', () => {
//     expect(palindromeName('madam')).toBe(true)
// })

// test('is a word a palindrome', () => {
//     expect(palindromeName('shannon')).toBe(false)
// })

// test('cadb will return abcd', () => {
//     expect(alphabetize('cdab')).toBe('abcd')
// })

// test('3524 will return 2345', () => {
//     expect(alphabetize('3524')).toBe('2345')
// })

// test('capitalize each first letter in each word"', () => {
//     expect(upperCaseWord('how are you')).toBe('How Are You')
// })

// test('add one to each number', () => {
//     expect(addOne([1, 2, 3, 4])).toStrictEqual([2, 3, 4, 5])
// })


// test('first letter of each', () => {
//     expect(firstCharacterss(['steve', 'shannon', 'jimbob']))
//         .toStrictEqual(['s', 's', 'j'])
// })

// //struggled and had to look at previous code
// test('only evens', () => {
//     expect(onlyEvens([1, 2, 3, 4, 5, 6]))
//         .toStrictEqual([2, 4, 6])
// })

// test('only steve', () => {
//     expect(onlySteve(['steve', 'sam', 'steve']))
//         .toStrictEqual(['steve', 'steve'])
// })

// test('only words length 4 or more', () => {
//     expect(onlyBigEnough(['steve', 'sam', 'se', 'horse']))
//         .toStrictEqual(['steve', 'horse'])
// })

// test('Cap first letter of each word', () => {
//     expect(capEachWord("how are you")).toBe("How Are You")
// })


// //had to look at notes
// test('make a league character factory', () => {
//     let xerath = makeLeagueCharacter("Xerath", 4, 300);
//     expect(xerath).toStrictEqual({ name: "Xerath", dps: 4, mana: 300 });

//     let garen = makeLeagueCharacter("Garen", 3, 200);

//     let totalDps = sumCharacterDpses([xerath, garen]);
//     expect(totalDps).toBe(7);

//     let stats = prettyPrintStats(xerath); 
//     expect(stats).toBe("Xerath - DPS: 4 - Mana: 300");

//     let wukong = makeCharacterFromString("Wukong 6 500");
//     expect(wukong).toStrictEqual({ name: "Wukong", dps: 6, mana: 500 }); //


//     let names = collectCharacterNames([xerath, garen, wukong]);
//     expect(names).toBe("Xerath, Garen, Wukong"); //do with for loop too 

//     let manaTotal = totalMana([xerath, garen, wukong]);
//     expect(manaTotal).toBe(1000);

//     let tower = makeTower(1500, 20);
//     expect(tower).toStrictEqual({ health: 1500 });

//     let towerAfterHit = hitTower(tower, 50);
//     expect(towerAfterHit).toStrictEqual({ health: 1450 });

// })

// test('can get out the suit from an array of cards', () => {
//     let input = [ /* square brackets make an array, curly brackets make an object */
//         {
//             suit: 'S',
//             face: 3
//         },
//         {
//             suit: 'H',
//             face: 14
//         }
//     ];
//     expect(getFirstSuit(input)).toBe('S');
//     expect(getSecondFace(input)).toBe(14);

//     // // // do with both hardcoded and for loop
//     expect(sumFaces(input)).toBe(17);
//     expect(combineSuits(input)).toBe("SH");
// })

// test('can sum array inside an object', () => {
//     let input =
//     {
//         temps: [70, 40, 80],
//         location: "Philly"
//     };
//     // do with both hardcoded and for loop
//     // expect(sumTemps(input)).toBe(190);
//     expect(getFirstTemp(input)).toBe(70);
// })

// //had to look at notes the day before //most recent time i aced
// test('can reduce strings into sentence', () => {
//     let input = ['hey', 'there', 'horseman'];
//     // do with both hardcoded and for loop
//     expect(makeSentence(input)).toBe("hey there horseman");
// })

// test('can reduce numbers into average', () => {
//     let input = [10, 20, 30, 40];
//     // do with both hardcoded and for loop
//     expect(averageNumbers(input)).toBe(25);
// })

// //had to look at notes
// test('can count up numbers in array of objects', () => {
//     let input = [
//         { id: 4 },
//         { id: 2 },
//         { id: 1 },
//         { id: 4 },
//     ];
//     let output = {
//         '1': 1,
//         '2': 1,
//         '4': 2
//     }
//     expect(countIds(input)).toStrictEqual(output);
// })



// test('will count letters in word', () => {
//     let output = {
//         e: 1,
//         h: 1,
//         l: 2,
//         o: 1
//     }
//     expect(countLetters("hello")).toStrictEqual(output);
// })

// // //almost had it
// test('will count numbers in string', () => {
//     let output = {
//         '1': 3,
//         '2': 1,
//         '3': 1
//     }
//     expect(countNumbersString("1,1,2,3,1")).toStrictEqual(output);
// })


// test('will count attendees', () => {
//     let input = [
//         { name: "steve" },
//         { name: "shannon" },
//         { name: "shannon" },
//         { name: "shannon" },
//         { name: "jimjam" },
//     ];
//     let output = {
//         'jimjam': 1,
//         'shannon': 3,
//         'steve': 1
//     }
//     expect(countAttendees(input)).toStrictEqual(output);
// })

// test('can find most common letter', () => {
//     let input = "aabbbbbccccccca";
//     let output = "c"
//     expect(findMostCommonLetter(input)).toBe(output);
// })

////////////////////////check with steve line 1693
// test('show count of each letter', () => {
//     let input = "aabbbbbccccccca";
//     let output = "a: 3, b: 5, c: 7"
//     expect(countAllLettersStringOutput(input)).toBe(output);
// })

// ///////////do it ALOT
// test('user id of user with longest name', () => {
//     let input = [
//         { name: "steve", id: 1 },
//         { name: "shannon", id: 2 },
//         { name: "jimjam", id: 3 }
//     ]
//     let output = 2;
//     expect(getUserIdWithLongestName(input)).toBe(output);
// })



//WORK ON THESE NEXT

//line 1766
// test('get index for city in arrray ', () => {
//     let input = [
//         { name: "philly", temps: [10, 20, 30] },
//         { name: "chicago", temps: [30, 30, 30] }
//     ]
//     expect(getIndexForCity(input, "philly")).toBe(0);
//     expect(getIndexForCity(input, "chicago")).toBe(1);
// }) ///////////////////////////

// test('get average temp for philly', () => {
//     let input = [
//         { name: "philly", temps: [10, 20, 30] },
//         { name: "chicago", temps: [30, 30, 30] }
//     ]
//     expect(getAverageTempForCity(input, "philly")).toBe(20);
//     // expect(getAverageTempForCity(input, "chicago")).toBe(30);
// })

// test('are all numbers the same', () => {
//     expect(allNumbersTheSame([1, 2, 3, 4, 5, 6])).toBe(false);
//     expect(allNumbersTheSame([2, 2, 2, 2, 2, 2])).toBe(true);
// })

// test('does number occur four times?', () => {
//     expect(numberHappensFourTimes(2, [1, 2, 3, 4, 6])).toBe(false);
//     expect(numberHappensFourTimes(2, [1, 2, 2, 2, 2])).toBe(true);
// })

// test('are all numbers unique?', () => {
//     expect(allNumbersUnqiue([1, 2, 3, 4, 6])).toBe(true);
//     expect(allNumbersUnqiue([1, 2, 2, 2, 2])).toBe(false);
// })

// test('return any numbers in both', () => {
//     expect(numbersInBoth([1, 2, 3], [4, 5, 6])).toStrictEqual([]);
//     expect(numbersInBoth([1, 2, 3], [4, 5, 6, 2, 1])).toStrictEqual([1, 2]);
// })

// test('return any numbers not in both', () => {
//     expect(numbersNotInBoth([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
//     expect(numbersNotInBoth([1, 2, 3], [3, 4, 5, 6])).toStrictEqual([1, 2, 4, 5, 6]);
// })






// (for), if, function, (array), (objects)
// map, filter, reduce, forEach, countBy, groupBy

//notecards
// get first element from array "names"
// let names = ['steve', 'sam']
//      names[0]

// change 2nd element in array "names"  to be "steve"
// let names = ['horse', 'sam']
//      names[1] = "steve"

// make object with name and address
//      {name: 'steve', address: 'here'}

// two ways to read address from object "person"
// let person = {name: 'steve', address: 'here'}
//      person.address
//      person['address']

// two ways to change name in object "person" to "shannon"
// let person = {name: 'steve', address: 'here'}
//      person.name = "shannon"
//      person["name"] = "shannon"

// two ways get name from first object in an array of objects called "people"
// [{name: 'steve'}, {name: 'jimbob'}]
//      people[0].name
//      people[0]['name']

// adding to
// numbers, strings     +
// arrays               Array.prototype.push 

