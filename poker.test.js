const { detectFourOfAKind, detectThreeOfAKind, detectFullHouse, countFaces, detectPair, parseHand, parseCard, parseFaceValue, parseSuit } = require("./poker")

// whole poker kata
// pokerWinner('4D 5S KH 3C 8C', '4D 4S 4H 9C TC') => "player two wins: three of a kind"
// objects, strings, numbers, functions, if statements

// X parseSuit -> string
// X parseFaceValue -> number
// X parseCard -> object
// X parseHand -> object[]
// X detectPair -> bool
// detectThreeOfAKind -> bool
// detectStraight -> bool
// detectFlush -> bool
// detectFourOfAKind -> bool
// detectFullHouse -> bool
// detectHighCard -> bool
// pokerWinner -> string

test("parseSuit() will return a number for the suit", () => {
    expect(parseSuit('3S')).toBe('S');
});

test("parseFaceValue() will return the number of the card", () => {
    expect(parseFaceValue('3S')).toBe(3);
    expect(parseFaceValue('TS')).toBe(10);
    expect(parseFaceValue('JS')).toBe(11);
    expect(parseFaceValue('QS')).toBe(12);
    expect(parseFaceValue('KS')).toBe(13);
    expect(parseFaceValue('AS')).toBe(14);
});

test("parseCard will return a card object", () => {
    let expected =
    {
        suit: 'S',
        face: 3
    };
    expect(parseCard("3S")).toStrictEqual(expected);
});

test("parseHand an array of card objects", () => {
    let expected = [
        {
            suit: 'S',
            face: 3
        },
        {
            suit: 'H',
            face: 14
        }
    ];
    expect(parseHand("3S AH")).toStrictEqual(expected);
});

test("detectPair will detect pairs", () => {
    expect(detectPair("3S AH 3C 5C 6S")).toBe(true);
    expect(detectPair("3S AH 4C 5C 6S")).toBe(false);
    expect(detectPair("3S AH 3C 5C 3S")).toBe(false);
});

test("countFaces does what it should", () => {

    let expected = {
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 1,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0
    }
    let input = [
        { face: 4 },
        { face: 5 },
        { face: 4 },
    ]
    expect(countFaces(input)).toStrictEqual(expected);
});



test("detectThreeOfAKind test", () => {
    expect(detectThreeOfAKind("5S AH 3C 5C 5S")).toBe(true);
    expect(detectThreeOfAKind("3S AH 4C 5C 6S")).toBe(false);
    expect(detectThreeOfAKind("3S 3H 3C 3C 6S")).toBe(false);
});

test("detect a full house test", () => {
    expect(detectFullHouse("5S 3H 3C 5C 5S")).toBe(true);
    expect(detectFullHouse("3S AH 4C 5C 6S")).toBe(false);
    expect(detectFullHouse("5S 5H 4C 5C 6S")).toBe(false);
});

test("detect a four of a kind test", () => {
    expect(detectFourOfAKind("5S 5H 3C 5C 5S")).toBe(true);
    expect(detectFourOfAKind("3S AH 4C 5C 6S")).toBe(false);
}); 