module.exports.parseSuit = (card) => {
    return card.charAt(1)
}
// instead of sync changes open the terminal
//$  cd ~/coding/nodejstest
//$ git push

//learn poker kata with steve,
//then learn react while practicing poker kata on my own
//TOP on my own
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

const detectOfAKind = (handString, howMany) => {
    let cards = this.parseHand(handString);
    let faceCounts = this.countFaces(cards);
    let values = Object.values(faceCounts)
    let countMoreThanThree = values.filter(count => count === howMany)
    let hasThreeOfAKind = countMoreThanThree.length === 1
    return hasThreeOfAKind;
}

//we parse the hand, count how many numbers, then it counts how many pairs
module.exports.detectPair = (handString) => {
    return detectOfAKind(handString, 2)
}

module.exports.detectThreeOfAKind = (handString) => {
    return detectOfAKind(handString, 3)
}

module.exports.detectFullHouse = (handString) => {
    let isPair = this.detectPair(handString);
    let isThreeOfAKind = this.detectThreeOfAKind(handString);
    return isPair && isThreeOfAKind;
}

module.exports.detectFourOfAKind = (handString) => {
    return detectOfAKind(handString, 4)
}

module.exports.detectStraight = (handString) => {
    let hand = this.parseHand(handString);
    let faceCounts = this.countFaces(hand);
    for (let face = 2; face < 11; face++) {
        let count = faceCounts[face];
        let count2nd = faceCounts[face + 1];
        let count3rd = faceCounts[face + 2];
        let count4th = faceCounts[face + 3];
        let count5th = faceCounts[face + 4];
        if (count === 1 && count2nd === 1 && count3rd === 1 && count4th === 1 && count5th === 1) {
            return true;
        }
    }
    return false;
}

module.exports.countSuits = (cards) => {
    let suitCounts = {
        'D': 0,
        'H': 0,
        'C': 0,
        'S': 0,
    }
    for (x = 0; x < cards.length; x++) {
        let card = cards[x]
        suitCounts[card.suit]++
    }
    return suitCounts;
}

module.exports.detectFlush = (handString) => {
    let cards = this.parseHand(handString);
    let suitCounts = this.countSuits(cards);
    let values = Object.values(suitCounts)
    let countSameSuit = values.filter(count => count === 5)
    let isOneSuit = countSameSuit.length === 1
    return isOneSuit;
}

