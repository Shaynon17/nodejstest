
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



module.exports = {
    parseHand, parseCard, parseFaceValue, parseSuit,
}