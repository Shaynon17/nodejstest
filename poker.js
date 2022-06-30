// enum
const HandRank = {
    Straight: 'Straight',
    Flush: 'Flush',
    Pair: 'Pair',
    TwoPair: 'Two Pair',
    ThreeOfAKind: 'Three of a kind',
    FullHouse: 'Full House',
    FourOfAKind: 'Four of a kind',
    StraightFlush: 'Straight Flush',
    FiveOfAKind: 'Five of a kind',
    HighCard: 'High Card'
};

module.exports = {
    detectTwoPair,
    detectHand,
    HandRank,
    detectFlush,
    detectFourOfAKind,
    detectStraight,
    detectThreeOfAKind,
    detectFullHouse,
    countFaces,
    detectPair,
    parseHand,
    parseCard,
    parseFaceValue,
    parseSuit,
    detectFiveOfAKind,
    pokerWinner
}

function parseSuit(card) {
    return card.charAt(1)
}
// instead of sync changes open the terminal
//$  cd ~/coding/nodejstest
//$ git push

//learn poker kata with steve,

//then learn react while practicing poker kata on my own
//TOP on my own
//Here we assign a numerical value to the playing card suits
function parseFaceValue(cardString) {
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
function parseCard(cardString) {
    let suit = parseSuit(cardString)
    let face = parseFaceValue(cardString)
    return {
        suit: suit,
        face: face
    }
}

//here we split up an entire hand into individual suits and numbers per card
function parseHand(handString) {
    let splitCards = handString.split(' ')
    let cardObjects = splitCards.map(card => parseCard(card))
    return cardObjects
}

//is a loop that counts how many numbers in each hand
function countFaces(cards) {
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

function detectOfAKind(handString, setSize, howManySets) {
    let cards = parseHand(handString);
    let faceCounts = countFaces(cards);
    let values = Object.values(faceCounts)
    let countMoreThanThree = values.filter(count => count === setSize)
    let hasThreeOfAKind = countMoreThanThree.length === howManySets
    return hasThreeOfAKind;
}

//we parse the hand,
// count how many numbers, then it counts how many pairs
function detectPair(handString) {
    return detectOfAKind(handString, 2, 1)
}

function detectThreeOfAKind(handString) {
    return detectOfAKind(handString, 3, 1)
}

function detectFullHouse(handString) {
    let isPair = detectPair(handString);
    let isThreeOfAKind = detectThreeOfAKind(handString);
    return isPair && isThreeOfAKind;
}

function detectFourOfAKind(handString) {
    return detectOfAKind(handString, 4, 1)
}

function detectFiveOfAKind(handString) {
    return detectOfAKind(handString, 5, 1)
}

function detectTwoPair(handString) {
    return detectOfAKind(handString, 2, 2)
}

function detectStraight(handString) {
    let hand = parseHand(handString);
    let faceCounts = countFaces(hand);
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

function countSuits(cards) {
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

function detectFlush(handString) {
    let cards = parseHand(handString);
    let suitCounts = countSuits(cards);
    let values = Object.values(suitCounts)
    let countSameSuit = values.filter(count => count === 5)
    let isOneSuit = countSameSuit.length === 1
    return isOneSuit;
}


function detectHand(handString) {
    if (detectFiveOfAKind(handString)) {
        return HandRank.FiveOfAKind
    } else if (detectStraight(handString) && detectFlush(handString)) {
        return HandRank.StraightFlush
    } else if (detectFourOfAKind(handString)) {
        return HandRank.FourOfAKind
    } else if (detectFullHouse(handString)) {
        return HandRank.FullHouse
    } else if (detectFlush(handString)) {
        return HandRank.Flush;
    } else if (detectStraight(handString)) {
        return HandRank.Straight;
    } else if (detectThreeOfAKind(handString)) {
        return HandRank.ThreeOfAKind
    } else if (detectTwoPair(handString)) {
        return HandRank.TwoPair
    } else if (detectPair(handString)) {
        return HandRank.Pair;
    } else {
        return HandRank.HighCard;
    }
}

const HandRankToOrder = {
    [HandRank.FiveOfAKind]: 10,
    [HandRank.StraightFlush]: 9,
    [HandRank.FourOfAKind]: 8,
    [HandRank.FullHouse]: 7,
    [HandRank.Flush]: 6,
    [HandRank.Straight]: 5,
    [HandRank.ThreeOfAKind]: 4,
    [HandRank.TwoPair]: 3,
    [HandRank.Pair]: 2,
    [HandRank.HighCard]: 1
}

function pokerWinner(player1HandString, player2HandString) {
    let player1HandRank = detectHand(player1HandString);
    let player2HandRank = detectHand(player2HandString);
    if (HandRankToOrder[player1HandRank] > HandRankToOrder[player2HandRank]) {
        return 'Player 1 wins: ' + player1HandRank + ' beats ' + player2HandRank
    } else if (HandRankToOrder[player1HandRank] < HandRankToOrder[player2HandRank]) {
        return 'Player 2 wins: ' + player2HandRank + ' beats ' + player1HandRank
    } else if (HandRankToOrder[player1HandRank] === HandRankToOrder[player2HandRank]) {
        return 'Tie: both had ' + player1HandRank
    }
}