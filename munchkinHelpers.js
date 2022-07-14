
function printMunchkinBoard(players) {
    return `
    Player 0: ${players[0]}
    Player 1: ${players[1]}
    Player 2: ${players[2]}
    `
    // return `
    // --1-------
    // -----2----
    // ----3-----
    // `;
}

function isValidLevel(playerLevel) {
    if (Number(playerLevel)) {
        return true
    } else {
        return false;
    }
}

module.exports = {
    isValidLevel,
    printMunchkinBoard
}
