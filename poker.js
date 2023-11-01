
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


//loop through each card and compare cards with a nested loop
const detectPair = hand => {
    let parsedHand = parseHand(hand); // [{ suit: 'S', face: 6 }, { suit: 'H', face: 14 },{ suit: 'C', face: 3 }, { suit: 'C', face: 5 },{ suit: 'S', face: 3 } ]
    let allValues = []     // allValues = [ 6, 14, 3, 5, 3 ] (top hand)
    for (i = 0; i < parsedHand.length; i++) {
        let faceValue = parsedHand[i].face;
        allValues.push(faceValue)
    }
let array = allValues
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; i++) {
            if (i !== j) {
                if (array[i] === array[j]) {
                    return true
                } else {
                    continue;
                }
            }
        }
    }

}



module.exports = {
    detectPair, parseHand, parseCard, parseFaceValue, parseSuit,
}