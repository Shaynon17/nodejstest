const readline = require('readline');
const { isValidLevel, printMunchkinBoard } = require("./munchkinHelpers");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptForInput(players, playerNumber) {
    rl.question(`Enter Player ${playerNumber}\'s new level: `, function (playerNewLevel) {
        if (isValidLevel(playerNewLevel)) {
            players[playerNumber] = playerNewLevel;
            console.log(printMunchkinBoard(players));
            promptForInput(players, (playerNumber + 1) % 3);
        } else {
            console.log("must be a number, starting OVER!");
        }
    });
}

rl.question('Hit enter to start game: ', function (name) {
    let players = [1, 1, 1];
    promptForInput(players, 0)
});

rl.on('close', function () {
    process.exit(0);
});
