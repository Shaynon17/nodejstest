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

// function parseCard(cardString) {
//     let 
// }


    module.exports = {
        parseSuit, parseFaceValue,
    }