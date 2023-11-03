// must be in this directiory PS C:\Users\shann\coding\nodejstest\gameWebsite\ohShoot> then to rune code type in terminal: node index.js

// let playerLoaded = 0;
// let playerHolster = 5;
// let enemyLoaded = 0;
// let enemyHolster = 5;

//resets the game and all innerHTML elements to specified values
function resetGame() {
    player.loaded = 0,
        player.holster = 5,
        enemy.loaded = 0,
        enemy.holster = 5,
        document.getElementById("enemyAction").innerHTML = '';
    document.getElementById("playerChoice").innerHTML = '';
    document.getElementById("playerLoaded").innerHTML = 0;
    document.getElementById("playerHolster").innerHTML = 5;
    document.getElementById("announce").innerHTML = "";
    document.getElementById("enemyLoaded").innerHTML = 0;
    document.getElementById("enemyHolster").innerHTML = 5;
}

//its possible to make it to where two punches mean they cant punch again,
//have each objects have a key value pair of lastDecision: (insert last decision)
//after each decision, update the deicison
//if both last deicision === punch, it may not be used.
//i would need another algorythm for punch, or rearrange the other 3 and have punch last,
//and take out punch/math.random changed
const player = {
    loaded: 0,
    holster: 5,
    fullClip: "You may only have 1 bullet loaded at a time"
}

const enemy = {
    loaded: 0,
    holster: 5,
    tsk: 'tsk-tsk'
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
const aggressive = () => {
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


//this determines which alogrithm for the enemy to use
const enemyChoice = () => {
    if (player.loaded === 0 && enemy.loaded === 0) {
        return preparative()
    } else if (player.loaded === 1 && enemy.loaded === 0) {
        return defensive()
    } else {
        return aggressive()
    }
}

//reloads the player
const playerReload = () => {
    player.loaded = 1;
    player.holster -= 1;
    document.getElementById("playerLoaded").innerHTML = player.loaded
    document.getElementById("playerHolster").innerHTML = player.holster;
}

//reloads the enemy
const enemyReload = () => {
    enemy.loaded = 1;
    enemy.holster -= 1;
    document.getElementById("enemyLoaded").innerHTML = enemy.loaded
    document.getElementById("enemyHolster").innerHTML = enemy.holster;
}

//announcement of what is happening in game
function announce(string) {
    document.getElementById("announce").innerHTML = string
}

const playerChoice = (choice) => {
    document.getElementById("playerChoice").innerHTML = choice
}

const updateScore = () => {
    document.getElementById("playerLoaded").innerHTML = player.loaded
    document.getElementById("playerHolster").innerHTML = player.holster;
    document.getElementById("enemyLoaded").innerHTML = enemy.loaded
    document.getElementById("enemyHolster").innerHTML = enemy.holster;
}

const checkWinner = () => {
    if (player.loaded + player.holster === 0) {
       resetGame()
        alert("You LOSE")
    } else if (enemy.loaded + enemy.holster === 0) {
       resetGame()
        alert("You Win!")
    } else {
        updateScore()
    }
}

//"reload" button onClick
const reload = () => {
    playerChoice("reloaded")
    let choice = enemyChoice(); //shuld return a decision
    if (player.loaded === 1) {
        document.getElementById("announce").innerHTML = player.fullClip;
        document.getElementById("enemyAction").innerHTML = enemy.tsk;
    } else if (choice === 'reload') {
        playerReload()
        enemyReload()
        announce("You both reloaded")
    } else if (choice === 'block') {
        playerReload()
        announce("The enemy... blocked?")
    } else if (choice === "shoot") {
        announce("You got shot! You lose one bullet from your holster")
        player.holster -= 1;
        enemy.hoslter += 0;
    } else /* (choice === 'punch')*/ {
        announce("The enemy punched you and negated your reload")
    }
    updateScore() //needed?
}



//"block" button onCLick
const block = () => {
    playerChoice("blocked")
    let choice = enemyChoice(); //shuld return a decision
    if (choice === 'block') {
        // updateScore();
        announce("You both blocked! Nothing happens...")
    } else if (choice === "punch") {
        enemy.holster += 1;
        player.holster -= 1;
        // updateScore();
        announce("Too bad you were prepared to block a bullet and not a punch! Lose 1 bullet from your holster")
    } else if (choice === 'reload') {
        announce("The enemy took advantage of your block and reloaded!")
        enemyReload()
        // updateScore();
    } else if (choice === "shoot") {
        announce("Good thing you blocked! The enemy is reholstering their bullet")
        enemy.holster += 1;
        enemy.loaded = 0;
        // updateScore();
    }
    updateScore()
    checkWinner();
}


//"punch" onClick
const punch = () => {
    playerChoice("punched")
    let choice = enemyChoice(); //shuld return a decision
    if (choice === "punch") {
        announce("I bet that hurt! Nothing significant happens")
    } else if (choice === "block") {
        enemy.holster -= 1;
        player.holster += 1;
        announce("I'll take that! You get 1 bullet from the enemy's holster")
    } else if (choice === 'reload') {
        announce("Ha, good luck with that! You negated the enemies reload")
    } else /*shoot*/ {
        announce("Don't bring a fist to a gun fight. Lose 1 bullet")
        player.holster -= 1;
        enemy.holster += 2;
        enemy.loaded = 0;
    }
    updateScore()
    checkWinner()
}

//"shoot" onClick
// const shoot = () => {

// }
































// const reload = () => {
//     if (player.loaded === 1) {
//         document.getElementById("announce").innerHTML = player.fullClip;
//     } else {
//         player.holster -= 1;
//         player.loaded += 1;
//         document.getElementById("playerLoaded").innerHTML = player.loaded
//         document.getElementById("playerHolster").innerHTML = player.holster;
//         enemyIsNotLoaded();
//     }
// }


// const enemyIsNotLoaded = () => {
//     let choice = Math.floor(Math.random() * 4);
//     let decision = '?'
//     if (choice < 2) {
//         decision = "reload"
//         document.getElementById("enemyAction").innerHTML = "reloaded";
//         enemy.loaded = 1;
//         enemy.holster -= 1;
//         document.getElementById("enemyLoaded").innerHTML = player.loaded
//         document.getElementById("enemyHolster").innerHTML = player.holster;
//     } else if (choice >= 2 && choice < 4) {
//         decision = 'punch'
//         document.getElementById("enemyAction").innerHTML = "punched"
//     } else {
//         decision = 'block'
//         document.getElementById("enemyAction").innerHTML = "blocked"
//     }
//     return decision
// }


// document.getElementById("reloadBtn").onclick = function () {
//     // count -= 10;
//     playerHolster -= 1;
//     document.getElementById("playerHolster").innerHTML = playerHolster;
// }

// document.getElementById("ninetyNine_decreaseBtn").onclick = function () {
//     count -= 10;
//     document.getElementById("ninetyNine_countLabel").innerHTML = count;
// }




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