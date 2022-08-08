function parseSuit(cardString) {
    return cardString.charAt(1)
}

function parseFaceValue(cardString) {
    let face = cardString.charAt(0);
    if (face === 'T') {
        return 10
    } else if ( face === 'J') {
        return 11
    } else if (face === 'Q') {
        return 12
    } else if (face === 'K') {
        return 13
    } else if (face === 'A') {
        return 14
    } else {
        return parseInt(face)
    }
}

function parseCard(cardString) {
    let card = {
        suit: parseSuit(cardString),
        face: parseFaceValue(cardString),

    }
    return card
}

function parseHand(handString) {
let splitHand = handString.split(' ')
let cards = splitHand.map(card => parseCard(card))
return cards
}

// function detectPair(cardString) {
//     let parse = parseHand(cardString)
//     let check = 
//     let hand = {
//         '2': 0,
//         '3': 0,
//         '4': 0,
//         '5': 0,
//         '6': 0,
//         '7': 0,
//         '8': 0,
//         '9': 0,
//         '10': 0,
//         '11': 0,
//         '12': 0,
//         '13': 0,
//         '14': 0
//     }
//     for (i = 0; i < parse.length; i++) {
//         let card = parse[i].face
//         hand[card]++
//     }
//     if (hand.filter())
// }

module.exports = {
    parseSuit, parseFaceValue, parseCard, parseHand, detectPair,
    }