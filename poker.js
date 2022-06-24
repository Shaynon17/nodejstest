module.exports.parseSuit = (card) => {
    return card.charAt(1)
}

module.exports.parseFaceValue = (cardString) => {
    let firstCharacter = cardString.charAt(0);
    let faceValue = parseInt(firstCharacter);
    if (firstCharacter === 'T') {
        return 10
    } else if (firstCharacter === 'J') {
        return 11
    } else if (firstCharacter === 'Q') {
        return 12
    } else if (firstCharacter === 'K') {
        return 13
    } else if (firstCharacter === 'A') {
        return 14
    } else {
        return faceValue
    }
}
