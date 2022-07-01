
module.exports = {
    parseSuit,
    parseFaceValue,
    parseCard,
}

function parseSuit(cardString) {
    return cardString.charAt(1)
}

function parseFaceValue(cardString) {
    if (cardString.charAt(0) === '2') {
        return 2
    } else if (cardString.charAt(0) === '3') {
        return 3
    } else if (cardString.charAt(0) === '4') {
        return 4
    } else if (cardString.charAt(0) === '5') {
        return 5
    } else if (cardString.charAt(0) === '6') {
        return 6
    } else if (cardString.charAt(0) === '7') {
        return 7
    } else if (cardString.charAt(0) === '8') {
        return 8
    } else if (cardString.charAt(0) === '9') {
        return 9
    } else if (cardString.charAt(0) === 'T') {
        return 10
    } else if (cardString.charAt(0) === 'J') {
        return 11
    } else if (cardString.charAt(0) === 'Q') {
        return 12
    } else if (cardString.charAt(0) === 'K') {
        return 13
    } else if (cardString.charAt(0) === 'A') {
        return 14
    } else {
        return cardString
    }
}

//could not figure this out and had to check github. 
//need more practice with objects
function parseCard(cardString) {
    let suit = parseSuit(cardString)
    let face = parseFaceValue(cardString)
    return {
        suit: suit,
        face: face
    }
}