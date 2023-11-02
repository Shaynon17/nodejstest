// must be in this directiory PS C:\Users\shann\coding\nodejstest\gameWebsite\ohShoot> then to rune code type in terminal: node index.js

// let playerLoaded = 0;
// let playerHolster = 5;
// let enemyLoaded = 0;
// let enemyHolster = 5;


const player = {
    loaded: 0,
    holster: 5,
    fullClip: "You may only have 1 bullet loaded at a time"
}

const enemy = {
    loaded: 0,
    holster: 5,
}

//alogorithm 1 : reload: 40% | punch: 40% | block: 20% 
const preparative = () => {
    let choice = Math.floor(Math.random() * 5);
    let decision = '?'
    if (choice < 2) {
        decision = "reload"
        document.getElementById("enemyAction").innerHTML = "reloaded";
        // enemy.loaded = 1;
        // enemy.holster -= 1;
        // document.getElementById("enemyLoaded").innerHTML = player.loaded
        // document.getElementById("enemyHolster").innerHTML = player.holster;
    } else if (choice >= 2 && choice < 4) {
        decision = 'punch'
        document.getElementById("enemyAction").innerHTML = "punched"
    } else {
        decision = 'block'
        document.getElementById("enemyAction").innerHTML = "blocked"
    }
    return decision
}

//alogorithm 2 : shoot: 33% | punch: 33% | block: 33% 
const agressive = () => {
    let choice = Math.floor(Math.random() * 3);
    let decision = '?'
    if (choice === 0) {
        decision = "shoot"
        document.getElementById("enemyAction").innerHTML = "shoot";
        // enemy.loaded -= 1;
        // document.getElementById("enemyLoaded").innerHTML = player.loaded
        // document.getElementById("enemyHolster").innerHTML = player.holster;
    } else if (choice === 1) {
        decision = 'punch'
        document.getElementById("enemyAction").innerHTML = "punched"
    } else {
        decision = 'block'
        document.getElementById("enemyAction").innerHTML = "blocked"
    }
    return decision
}

//alogorithm 3 : reload: 33% | punch: 33% | block: 33% 
const defensive = () => {
    let choice = Math.floor(Math.random() * 3);
    let decision = '?'
    if (choice === 0) {
        decision = "reload"
        document.getElementById("enemyAction").innerHTML = "reload";
        // enemy.loaded = 1;
        // enemy.holster -= 1;
        // document.getElementById("enemyLoaded").innerHTML = player.loaded
        // document.getElementById("enemyHolster").innerHTML = player.holster;
    } else if (choice === 1) {
        decision = 'punch'
        document.getElementById("enemyAction").innerHTML = "punched"
    } else {
        decision = 'block'
        document.getElementById("enemyAction").innerHTML = "blocked"
    }
    return decision
    // return decision && document.getElementById("enemyAction").innerHTML = `${decision}`
}


const enemyChoice = () => {

    if (player.loaded === 0 && enemy.loaded === 0) {
        return preparative()
    }

}


function resetGame() {
    player.loaded = 0,
        player.holster = 5,
        enemy.loaded = 0,
        enemy.holster = 5,
        document.getElementById("liveAction").innerHTML = "Duel!";
    document.getElementById("playerLoaded").innerHTML = 0;
    document.getElementById("playerHolster").innerHTML = 5;
    document.getElementById("enemyLoaded").innerHTML = 0;
    document.getElementById("enemyHolster").innerHTML = 5;
    document.getElementById("enemyAction").innerHTML = '';

}

// const enemyChoice = () => {
//     let factor = 3
//     let choice = Math.floor(Math.random() * factor);

// }

const bothNotLoaded = () => {

}


const enemyIsNotLoaded = () => {
    let choice = Math.floor(Math.random() * 4);
    let decision = '?'
    if (choice < 2) {
        decision = "reload"
        document.getElementById("enemyAction").innerHTML = "reloaded";
        enemy.loaded = 1;
        enemy.holster -= 1;
        document.getElementById("enemyLoaded").innerHTML = player.loaded
        document.getElementById("enemyHolster").innerHTML = player.holster;
    } else if (choice >= 2 && choice < 4) {
        decision = 'punch'
        document.getElementById("enemyAction").innerHTML = "punched"
    } else {
        decision = 'block'
        document.getElementById("enemyAction").innerHTML = "blocked"
    }
    return decision
}

const reload = () => {
    if (player.loaded === 1) {
        document.getElementById("liveAction").innerHTML = player.fullClip;
    } else {
    player.holster -= 1;
    player.loaded += 1;
        document.getElementById("playerLoaded").innerHTML = player.loaded
    document.getElementById("playerHolster").innerHTML = player.holster;
        enemyIsNotLoaded();
    }

}

document.getElementById("reloadBtn").onclick = function () {
    // count -= 10;
    playerHolster -= 1;
    document.getElementById("playerHolster").innerHTML = playerHolster;
}

document.getElementById("ninetyNine_decreaseBtn").onclick = function () {
    count -= 10;
    document.getElementById("ninetyNine_countLabel").innerHTML = count;
}




//old docuement for reference IF i need it
// function getUserChoice(userInput) {
//     userInput = userInput.toLowercase();
//     if (userInput === 'shoot' ||
//         userInput === 'reload' ||
//         userInput === 'block' ||
//         userInput === 'punch'
//         ) {
//         return userInput;
//     } else {
//         console.log('error');
//     }
// }

// function getComputerChoice() {
//     let randomNumber = Math.floor(Math.random() * 4);
//     if (randomNumber === 0) {
//         return 'punch'
//     } else if (randomNumber === 1) {
//         return 'reload'
//     } else if (randomNumber === 2) {
//         return 'block'
//     } else if (randomNumber === 3) {
//         return 'shoot'
//     }
//     //for getComputerChoice, if the clip has 0 then let randomNumber = Math.floor(Math.random() * 4)
// }


// // // function getUserChoice

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

// function bulletTransfer(loser, winner) {
// loser.holster -= 1;
// winner.holster += 1;
// }

// function reload(reloader) {
//     reloader.holster -= 1;
//     reloader.clip += 1;
// }

// let player1 = {
//     holster: 6,
//     clip: 0
// }

// let player2 = {
//     holster: 5,
//     clip: 0
// }

// function shoot(shooter) {
//     shooter.clip -= 1;
//     shooter.holster += 1;
// }





// bulletTransfer(player2, player1)
// reload(player1)
// shoot(player1)
// reload(player1)

// console.log(getComputerChoice())
// console.log(player1())
console.log(player1)
console.log(player2)
// console.log(bulletTransfer())