let player1Score = 0;
let player2Score = 0;


const updateGame = () => {
    document.getElementById("player1").innerHTML = player1Score;
    document.getElementById("player2").innerHTML = player2Score;
}

const increasePlayer1 = () => {
player1Score += 1;
updateGame();
}

const decreasePlayer1 = () => {
    player1Score -= 1;
    updateGame();
}

const increasePlayer2 = () => {
    player2Score += 1;
    updateGame();
}

const decreasePlayer2 = () => {
    player2Score -= 1;
    updateGame();
}


const resetGame = () => {
    player1Score = 0;
    player2Score = 0;
    updateGame()
}


// const increaseplayer1 = () => {

// }