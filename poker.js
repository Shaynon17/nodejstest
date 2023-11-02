
const parseSuit = card => card.charAt(1);

const parseFaceValue = card => {
    let number = card.charAt(0);
    if (number === 'K') {
        return 13;
    } else if (number === 'Q') {
        return 12;
    } else if (number === "J") {
        return 11;
    } else if (number === 'T') {
        return 10
    } else if (number === "A") {
        return 14
    } else {
        return Number(number)
    }
}

const parseCard = card => {
    let object = {
        suit: parseSuit(card),
        face: parseFaceValue(card)
    }
    return object
}

const parseHand = hand => { //hand = "3S AH"
    let cards = hand.split(' '); //Cards = ["3S", "AH",]
    let output = [ ];
    for (i = 0; i < cards.length; i++) {
        let card = cards[i]; //card = each card
        output.push(parseCard(card));
    }
    return output
}

// const handFaceValues = hand => {
//     let parsedHand = parseHand(hand); // [{ suit: 'S', face: 6 }, { suit: 'H', face: 14 },{ suit: 'C', face: 3 }, { suit: 'C', face: 5 },{ suit: 'S', face: 3 } ]
//     let allValues = [] // allValues = [ 6, 14, 3, 5, 3 ] (top hand)
//     for (i = 0; i < parsedHand.length; i++) {
//         let faceValue = parsedHand[i].face;
//         allValues.push(faceValue)
//     }
//     return allValues
// }

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)

//loop through each card and compare cards with a nested loop
const detectPair = hand => {
    let parsedHand = parseHand(hand); // [{ suit: 'S', face: 6 }, { suit: 'H', face: 14 },{ suit: 'C', face: 3 }, { suit: 'C', face: 5 },{ suit: 'S', face: 3 } ]
    let allValues = []     
    for (i = 0; i < parsedHand.length; i++) {
        let faceValue = parsedHand[i].face;
        allValues.push(faceValue)
    } 
    // (after loop) allValues = [ 6, 14, 3, 5, 3 ] (top hand)
    let pairs = toFindDuplicates(allValues);
    // console.log(pairs)
    // console.log(pairs.length)
    if (pairs.length === 1)   {
        return true
    } else {
    return false
    }
}

// let array = allValues
// for (i = 0; i < array.length; i++) {
//     for (j = 0; j < array.length; i++) {
//         if (i !== j) {
//             if (array[i] === array[j]) {
//                 return true
//             } else {
//                 continue;
//             }
//         }
//     }
// }


const detectNumOfPair = hand => {
    let parsedHand = parseHand(hand); // [{ suit: 'S', face: 6 }, { suit: 'H', face: 14 },{ suit: 'C', face: 3 }, { suit: 'C', face: 5 },{ suit: 'S', face: 3 } ]
    let allValues = []     // allValues = [ 6, 14, 3, 5, 3 ] (top hand)
    for (i = 0; i < parsedHand.length; i++) {
        let faceValue = parsedHand[i].face;
        allValues.push(faceValue)
    }
    let pairs = toFindDuplicates(allValues);

    return Number(pairs)
}

const countFaces = input => {
    let output = {
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 1,
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

    for (i = 0; i < input.length; i++) {
        let faceValue = input[i].face;
        output + faceValue
    }
    return output
}

const detectThreeOfAKind = hand => {
    let parsedHand = parseHand(hand); // 
    let allValues = []
    for (i = 0; i < parsedHand.length; i++) {
        let faceValue = parsedHand[i].face;
        allValues.push(faceValue)
    }
    // (after loop) allValues = [ 5, 14, 3, 5, 5 ] (top hand)
    let pairs = toFindDuplicates(allValues);
    if (pairs.length === 2) {
        return true
    } else {
        return false
    }
}

const detectFullHouse = hand => {
    let parsedHand = parseHand(hand); // 
    let allValues = []
    for (i = 0; i < parsedHand.length; i++) {
        let faceValue = parsedHand[i].face;
        allValues.push(faceValue)
    }
    // (after loop) allValues = [ 5, 14, 3, 5, 5 ] (top hand)
    let pairs = toFindDuplicates(allValues);
    if (pairs.length === 3) {
        return true
    } else {
        return false
    }
}

//exact same code as detect fullhouse
const detectFourOfAKind = hand => {
    let parsedHand = parseHand(hand); // 
    let allValues = []
    for (i = 0; i < parsedHand.length; i++) {
        let faceValue = parsedHand[i].face;
        allValues.push(faceValue)
    }
    // (after loop) allValues = [ 5, 14, 3, 5, 5 ] (top hand)
    let pairs = toFindDuplicates(allValues);
    if (pairs.length === 3) {
        return true
    } else {
        return false
    }
}


const detectStraight = hand => {
    let parsedHand = parseHand(hand);
    let allValues = [] //[ 5, 6, 7, 8, 9 ] (first hand in test)
    for (i = 0; i < parsedHand.length; i++) {
        let faceValue = parsedHand[i].face;
        allValues.push(faceValue)
    }

    allValues = allValues.sort((a, b) => a - b)

    //The above lines could be a helper function
    let result = false;
    for (i = 1; i < allValues.length; i++) {
        if (allValues[0] === allValues[i] - i) {
            result = true
        } else {
            return false
        }
    }
    return result
}

//This would definitley make a false positive on certian hands. ie: 2H, 5S, 4H, 8S, 8H, 
const detectAllSameSuit = hand => {
    let parsedHand = parseHand(hand);
    let allSuits = [] //[ 5, 6, 7, 8, 9 ] (first hand in test)
    for (i = 0; i < parsedHand.length; i++) {
        let suit = parsedHand[i].suit;
        allSuits.push(suit)
    }
    // console.log(allSuits) //['S', 'S', 'S', 'S', 'S'] (top hand)
    let joinOriginalSuits = allSuits.join('')
    let reverseAllSuits = allSuits.reverse()
    let joinReversedSuits = reverseAllSuits.join('')

    if (joinOriginalSuits === joinReversedSuits) {
        return true
    } else {
        return false
    }

}

const detectFlush = hand => {
    let parsedHand = parseHand(hand);
    let allValues = [] //[ 5, 6, 7, 8, 9 ] (first hand in test)
    for (i = 0; i < parsedHand.length; i++) {
        let faceValue = parsedHand[i].face;
        allValues.push(faceValue)
    }

    allValues = allValues.sort((a, b) => a - b)

    //The above lines could be a helper function
    let result = false;
    for (i = 1; i < allValues.length; i++) {
        if (allValues[0] === allValues[i] - i) {
            result = true
        } else {
            return false
        }
    }
    let checkSuit = detectAllSameSuit(hand);
    if (checkSuit === true) {
        return true
    } else {
        return false
    }
}

const detectTwoPair = hand => {
    let parsedHand = parseHand(hand); // [{ suit: 'S', face: 6 }, { suit: 'H', face: 14 },{ suit: 'C', face: 3 }, { suit: 'C', face: 5 },{ suit: 'S', face: 3 } ]
    let allValues = []
    for (i = 0; i < parsedHand.length; i++) {
        let faceValue = parsedHand[i].face;
        allValues.push(faceValue)
    }
    // (after loop) 
    let pairs = toFindDuplicates(allValues);
    // console.log(pairs)
    if (pairs.length === 2 && pairs[0] !== pairs[1]) { //cancels out threeof a kind
        return true
    } else {
        return false
    }
}

//Attempt before changing the test
// //rewrite the test?
// //need an object called HandRank ... and the keys are the hand ranks ive done above.
// const detectHand = () => {
//     let HandRank = {
//         Straight: detectStraight
//         // Straight: false
//         // Straight: detectStraight(hand),
//         // Straight: 0,
//     }
//     // if (detectStraight(hand)) {
//     //     // HandRank + HandRank.Straight
//     //     return HandRank.Straight
//     // }

//     // if (HandRank.Straight === true)
//         return HandRank.Straight
// }


module.exports = {
    detectHand, detectTwoPair, detectAllSameSuit, detectFlush, detectStraight, detectFourOfAKind, detectFullHouse, detectThreeOfAKind, countFaces, detectNumOfPair, toFindDuplicates, detectPair, parseHand, parseCard, parseFaceValue, parseSuit,
}