const { parseFace, parseSuit } = require("./poker")

// let card = { 
//     'suit': 'K', 
//     'face': 3,
//     'plusTwo' : (a) => { return a + 2},
//     'cardInfo': {
//         'cardBack': 'standard',
//         'isGilded': false
//     }
// };

// card.face === 3
// card.suit === 'K'
// card.cardInfo.cardBack === 'standard'
// card.plusTwo(45) === 47

// whole poker kata
// pokerWinner('D4 S5 HK C3 C8', 'D4 S4 H4 C9 CT') => player two wins
// objects, strings, numbers, functions, if statements

// let stringToNumber = {
//     '3' : 3,
//     '2' : 2,
//     'K': 14
// }

test("parseSuit() will return a number for the suit", () => {
    expect(parseSuit('D7')).toBe(1);
    expect(parseSuit('S2')).toBe(2);
    expect(parseSuit('C7')).toBe(3);
    expect(parseSuit('H3')).toBe(4);
});


test("parseFace() will return number for the face", () => {
    expect(parseFace('DA')).toBe(1);
    expect(parseFace('D2')).toBe(2);
    expect(parseFace('D3')).toBe(3);
    expect(parseFace('D4')).toBe(4);
    expect(parseFace('D5')).toBe(5);
    expect(parseFace('D6')).toBe(6);
    expect(parseFace('D7')).toBe(7);
    expect(parseFace('D8')).toBe(8);
    expect(parseFace('D9')).toBe(9);
    expect(parseFace('DT')).toBe(10);
    expect(parseFace('DJ')).toBe(11);
    expect(parseFace('DQ')).toBe(12);
    expect(parseFace('DK')).toBe(13);
});



