const { parseSuit, parseHand, parseCard, parseFaceValue } = require("./poker")

// whole poker kata
// pokerWinner('4D 5S KH 3C 8C', '4D 4S 4H 9C TC') => "player two wins: three of a kind"
// objects, strings, numbers, functions, if statements

//  parseSuit -> string
//  parseFaceValue -> number
//  parseCard -> object
//  parseHand -> object[]
//  detectPair -> bool
//  detectThreeOfAKind -> bool
//  detectStraight -> bool
//  detectFlush -> bool
//  detectFourOfAKind -> bool
//  detectFullHouse -> bool
//  detectHand -> string
//  rankHands -> string
//  pokerWinner -> string

// detectHighCard -> bool

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
    expect(parseFaceValue('4S')).toBe(4);
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
/*
test("detectNumOfPair will detect number of pair", () => {
    expect(detectNumOfPair("3S AH 3C 5C 6S")).toBe(3);
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

test("detect a straight test", () => {
    expect(detectStraight("5S 6H 7C 8C 9S")).toBe(true);
    expect(detectStraight("3S AH 4C 5C 6S")).toBe(false);
    expect(detectStraight("TS KH QC JC AS")).toBe(true);
});

test("detect a flush test", () => {
    expect(detectFlush("5S 6S 7S 8S 9S")).toBe(true);
    expect(detectFlush("3S AH 4C 5C 6S")).toBe(false);
});

test("detect a two pair", () => {
    expect(detectTwoPair("5S 5S 8S 8S 9S")).toBe(true);
    expect(detectTwoPair("3S AH 4C 5C 6S")).toBe(false);
});

test("detect poker hand", () => {
    expect(detectHand("5S 6S 7S 8D 9S")).toBe(HandRank.Straight);
    expect(detectHand("5S 3S 5S 8S 9S")).toBe(HandRank.Flush);
    expect(detectHand("5S 3S 5D 8S 9S")).toBe(HandRank.Pair);
    expect(detectHand("5S 8S 5D 8S 9S")).toBe(HandRank.TwoPair);
    expect(detectHand("8S 8S 5D 8S 9S")).toBe(HandRank.ThreeOfAKind);
    expect(detectHand("8S 8S 5D 8S 5S")).toBe(HandRank.FullHouse);
    expect(detectHand("8S 8S 8D 8S 5S")).toBe(HandRank.FourOfAKind);
    expect(detectHand("5S 6S 7S 8S 9S")).toBe(HandRank.StraightFlush);
    expect(detectHand("5S 5S 5S 5S 5S")).toBe(HandRank.FiveOfAKind);
    expect(detectHand("2D 5S 6S 7S QS")).toBe(HandRank.HighCard);
});

test("detect poker winner", () => {
    expect(pokerWinner("5S 6S 7S 8D 9S", "5S 5S 7S 5D 9S")).toBe("Player 1 wins: Straight beats Three of a kind");
    expect(pokerWinner("5S 5S 7S 5D 9S", "5S 6S 7S 8D 9S")).toBe("Player 2 wins: Straight beats Three of a kind");
    expect(pokerWinner("5S 6S 7S 8D 9S", "5S 6S 7S 8D 9S")).toBe("Tie: both had Straight");
});

*/

// 1.1	Five of a kind
// 1.2	Straight flush
// 1.3	Four of a kind
// 1.4	Full house
// 1.5	Flush
// 1.6	Straight
// 1.7	Three of a kind
// 1.8	Two pair
// 1.9	One pair
// 1.10	High card