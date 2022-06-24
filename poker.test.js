const { parseFaceValue, parseSuit } = require("./poker")

// whole poker kata
// pokerWinner('4D 5S KH 3C 8C', '4D 4S 4H 9C TC') => "player two wins: three of a kind"
// objects, strings, numbers, functions, if statements

// X parseSuit -> string
// parseFaceValue -> number
// parseCard -> object
// parseHand -> object[]
// detectHighCard -> bool
// detectPair -> bool
// detectThreeOfAKind -> bool
// detectStraight -> bool
// detectFlush -> bool
// detectFourOfAKind -> bool
// detectFullHouse -> bool
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



