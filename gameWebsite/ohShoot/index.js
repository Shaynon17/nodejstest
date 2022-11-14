// must be in this directiory PS C:\Users\shann\coding\nodejstest\gameWebsite\ohShoot> then to rune code type in terminal: node index.js

function getUserChoice(userInput) {
    userInput = userInput.toLowercase();
    if (userInput === 'shoot' ||
        userInput === 'reload' ||
        userInput === 'block' ||
        userInput === 'punch' 
        ) {
        return userInput;
    } else {
        console.log('error');
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
        return 'punch'
    } else if (randomNumber === 1) {
        return 'reload'
    } else if (randomNumber === 2) {
        return 'block'
    } else if (randomNumber === 3) {
        return 'shoot'
    }
    //for getComputerChoice, if the clip has 0 then let randomNumber = Math.floor(Math.random() * 4)
}


// // function getUserChoice

// function player1() {
//     let bullets = {
//         holster: 5,
//         clip: 0,
//     }
//     return bullets
//     //the below is a better output 
//     // return `player 1 has ${bullets.holster} bullets in their holster, and
//     // ${bullets.clip} bullets in their clip`
// }

// function player2() {
//     let bullets = {
//         holster: 5,
//         clip: 0,
//     }
//     return bullets
// }

// function bulletTransfer() {
//     player3.holster -= 1
//     return player3
// }

function bulletTransfer(loser, winner) {
loser.holster -= 1;
winner.holster += 1;
}

function reload(reloader) {
    reloader.holster -= 1;
    reloader.clip += 1;
}

let player1 = {
    holster: 6,
    clip: 0
}

let player2 = {
    holster: 5,
    clip: 0
}

function shoot(shooter) {
    shooter.clip -= 1;
    shooter.holster += 1;
}





// bulletTransfer(player2, player1)
// reload(player1)
// shoot(player1)
// reload(player1)

// console.log(getComputerChoice())
// console.log(player1())
console.log(player1)
console.log(player2)
// console.log(bulletTransfer())