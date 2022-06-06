
const suitNumber = {
    'D': 1,
    'S': 2,
    'C': 3,
    'H': 4
}
module.exports.parseSuit = (cardString) => {
    let suit = cardString.charAt(0);
    return suitNumber[suit]
}

const cardLookup = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'T': 10,
    'J': 11,
    'Q': 12,
    'K': 13

}

module.exports.parseFace = (cardString) => {
    //cardString  === 'D7'
    let faceCharacter = cardString.charAt(1);
    // faceCharacter === '7'
    return cardLookup[faceCharacter]
}