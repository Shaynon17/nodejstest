
module.exports = {
    parseSuit,
    parseFaceValue,
    parseCard,
    parseHand,
    detectPair,
}

function parseSuit(cardString) {
    return cardString.charAt(1)
}

function parseFaceValue(cardString) {
    let faceCharacter = cardString.charAt(0);
    if (faceCharacter === 'T') {
        return 10
    } else if (faceCharacter === 'J') {
        return 11
    } else if (faceCharacter === 'Q') {
        return 12
    } else if (faceCharacter === 'K') {
        return 13
    } else if (faceCharacter === 'A') {
        return 14
    } else {
        return parseInt(faceCharacter);
    }
}

function parseCard(cardString) {
    let card = {
        suit: parseSuit(cardString),
        face: parseFaceValue(cardString)
    };
    return card;
}

function parseHand(cardString) {
    let splitHand = cardString.split(' ')
    let parseEaechCard = splitHand.map(hand => parseCard(hand))
    return parseEaechCard
}

function detectPair(cardString) {
    let hand = parseHand(cardString)
    let faces = []
    for (x = 0; x < hand.length; x++) {
        let card = hand[x]
        let cardNum = card.face
        if (faces.includes(cardNum)) {
            return true
        }
        faces.push(cardNum)
    }
    return false;
}