module.exports.parseSuit = (card) => {
    return card.charAt(1)
}
// instead of sync changes open the terminal
//$  cd ~/coding/nodejstest
//$ git push

//Here we assign a numerical value to the playing card suits
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

//here we devide up each card into its suit and number
module.exports.parseCard = (cardString) => {
    let suit = this.parseSuit(cardString)
    let face = this.parseFaceValue(cardString)
    return { suit: suit, face: face }
}

//here we split up an entire hand into individual suits and numbers per card
module.exports.parseHand = (handString) => {
    let splitCards = handString.split(' ')
    let cardObjects = splitCards.map(card => this.parseCard(card))
    return cardObjects
}

//this is a loop that counts how many numbers in each hand
module.exports.countFaces = (cards) => {
    let faceCounts = {
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
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
    for (x = 0; x < cards.length; x++) {
        let card = cards[x]
        faceCounts[card.face]++
    }
    return faceCounts;
}
//we parse the hand, count how many numbers, then it counts how many pairs
module.exports.detectPair = (handString) => {
    let cards = this.parseHand(handString);
    let faceCounts = this.countFaces(cards);
    let values = Object.values(faceCounts)
    let countMoreThanTwo = values.filter(count => count > 1)
    let moreThanZeroPairs = countMoreThanTwo.length > 0
    return moreThanZeroPairs;
}