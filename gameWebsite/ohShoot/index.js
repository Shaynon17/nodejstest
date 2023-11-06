// must be in this directiory PS C:\Users\shann\coding\nodejstest\gameWebsite\ohShoot> then to rune code type in terminal: node index.js


//resets the game and all innerHTML elements to specified values
function resetEasy() {
    player.loaded = 0,
        player.holster = 5,
        enemy.loaded = 0,
        enemy.holster = 5,
        gameMode.difficulty = "Easy";
    document.getElementById("enemyAction").innerHTML = '';
    document.getElementById("playerChoice").innerHTML = '';
    document.getElementById("playerLoaded").innerHTML = 0;
    document.getElementById("playerHolster").innerHTML = 5;
    document.getElementById("announce").innerHTML = "First one to have all 10 bullets is the winner";
    document.getElementById("announce2").innerHTML = "";
    document.getElementById("enemyLoaded").innerHTML = 0;
    document.getElementById("enemyHolster").innerHTML = 5;
    document.getElementById("mode").innerHTML = gameMode.difficulty;
}

//its possible to make it to where two punches mean they cant punch again,
//have each objects have a key value pair of lastDecision: (insert last decision)
//after each decision, update the deicison
//if both last deicision === punch, it may not be used.
//i would need another algorythm for punch, or rearrange the other 3 and have punch last,
//and take out punch/math.random changed

//Used across all modes
const player = {
    loaded: 0,
    holster: 5,
    fullClip: "You may only have 1 bullet loaded at a time"
}

//used across all modes
const enemy = {
    loaded: 0,
    holster: 5,
    tsk: 'tsk-tsk'
}

//algorthim 1 is easy | .# is which algorithim in easy mode

//alogorithm 1.1 : reload: 40% | punch: 40% | block: 20% 
//For easy mode
const preparative = () => {
    let choice = Math.floor(Math.random() * 5);
    let decision = '?'
    if (choice < 2) {
        decision = "reload"
        document.getElementById("enemyAction").innerHTML = "reloaded";
    } else if (choice >= 2 && choice < 4) {
        decision = 'punch'
        document.getElementById("enemyAction").innerHTML = "punched"
    } else {
        decision = 'block'
        document.getElementById("enemyAction").innerHTML = "blocked"
    }
    return decision
}

//alogorithm 1.2 : shoot: 33% | punch: 33% | block: 33%
//For easy mode
const aggressive = () => {
    let choice = Math.floor(Math.random() * 3);
    let decision = '?'
    if (choice === 0) {
        decision = "shoot"
        document.getElementById("enemyAction").innerHTML = "shoot";
    } else if (choice === 1) {
        decision = 'punch'
        document.getElementById("enemyAction").innerHTML = "punched"
    } else {
        decision = 'block'
        document.getElementById("enemyAction").innerHTML = "blocked"
    }
    return decision
}

//alogorithm 1.3 : reload: 33% | punch: 33% | block: 33%
//For easy mode
const defensive = () => {
    let choice = Math.floor(Math.random() * 3);
    let decision = '?'
    if (choice === 0) {
        decision = "reload"
        document.getElementById("enemyAction").innerHTML = "reload";
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


//this determines which alogrithm for the enemy to use (for easy mode)
const enemyChoiceEasy = () => {
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
}



//reloads the enemy
const enemyReload = () => {
    enemy.loaded = 1;
    enemy.holster -= 1;
}

//announcement of what is happening in game
function announce(string) {
    document.getElementById("announce").innerHTML = string
}


const playerChoice = (choice) => {
    document.getElementById("playerChoice").innerHTML = choice
    gameMode.lastPlayerChoice = choice //needed for medium mode
}

//used for all modes
const updateScore = () => {
    document.getElementById("playerLoaded").innerHTML = player.loaded
    document.getElementById("playerHolster").innerHTML = player.holster;
    document.getElementById("enemyLoaded").innerHTML = enemy.loaded
    document.getElementById("enemyHolster").innerHTML = enemy.holster;
}

const checkWinner = () => {
    if (player.loaded + player.holster === 0) {
        resetEasy()
        alert("You LOSE")
    } else if (enemy.loaded + enemy.holster === 0) {
        resetEasy()
        alert("You Win!")
    } else {
        updateScore()
    }
}

//"reload" button onClick
const reloadEasy = () => {
    playerChoice("reloaded") //Updates playerChoice.innerHTML and gameMode.lastPlayerChoice
    let choice = enemyChoiceEasy(); //shuld return a decision
    if (player.loaded === 1) {
        document.getElementById("announce").innerHTML = player.fullClip;
        document.getElementById("enemyAction").innerHTML = enemy.tsk;
    } else if (choice === 'reload') {
        enemy.loaded = 1;
        enemy.holster -= 1;
        player.loaded = 1;
        player.holster -= 1;
        announce("You both reloaded")
    } else if (choice === 'block') {
        player.loaded = 1;
        player.holster -= 1;
        announce("The enemy... blocked?")
    } else if (choice === "shoot") {
        announce("You got shot! You lose one bullet from your holster")
        player.holster -= 2;
        player.loaded = 1;
        enemy.holster += 2;
        enemy.loaded = 0;
    } else if (choice === "punch") {
        announce("The enemy punched you and negated your reload")
    } else {
        announce("Bug in code => check reload function")
    }

    clearAnnounce2()
    updateScore() //needed?
    checkWinner()
}



//"block" button onCLick
const blockEasy = () => {
    playerChoice("blocked")
    let choice = enemyChoiceEasy(); //shuld return a decision
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
    clearAnnounce2()
    updateScore()
    checkWinner();
}


//"punch" onClick
const punchEasy = () => {
    playerChoice("punched")
    let choice = enemyChoiceEasy(); //shuld return a decision
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
    clearAnnounce2()
    updateScore()
    checkWinner()
}

const announce2 = (string) => {
    document.getElementById("announce2").innerHTML = string
}

const clearAnnounce2 = () => {
    document.getElementById("announce2").innerHTML = ""
}


//"shoot" onClick
const shootEasy = () => {
    playerChoice("shoot")
    let choice = enemyChoiceEasy(); //shuld return a decision
    if (player.loaded === 0 && choice === "block") {
        announce("CLICK! You didn't have a bullet loaded!");
        announce2("Oh well, they blocked anyway");
    } else if (player.loaded === 1 && choice === "block") {
        announce("Miss! What a waste of a shot! Time to reload")
        player.loaded = 0;
        player.holster += 1;
        clearAnnounce2();
    } else if (player.loaded === 1 && choice === "reload") {
        announce("Good shot! Enjoy that prize bullet!")
        player.loaded = 0;
        player.holster += 2;
        enemy.holster -= 2;
        enemy.loaded = 1;
        clearAnnounce2()
    } else if (player.loaded === 0 && choice === "reload") {
        announce("CLICK! You didn't have a bullet loaded!");
        announce2("But they do now...")
        enemy.loaded = 1;
        enemy.holster -= 1;
    } else if (player.loaded === 1 && choice === "punch") {
        announce("BOOM! Take that free bullet!")
        enemy.holster -= 1;
        player.holster += 2;
        player.loaded = 0;
        clearAnnounce2()
    } else if (player.loaded === 0 && choice === "punch") {
        announce("CLICK! You didn't have a bullet loaded! That would have gone in your favor...");
        announce2("The enemy gets a free bullet from your mistake.")
        enemy.holster += 1;
        player.holster -= 1;
    } else if (player.loaded === 1 && choice === "shoot") {
        announce("You both shot and negated the other");
        player.loaded = 0;
        player.holster += 1;
        enemy.loaded = 0;
        enemy.holster += 1
        clearAnnounce2()
    } else if (player.loaded === 0 && choice === "shoot") {
        announce("CLICK! You didn't have a bullet loaded!");
        announce2("Thats rough, lose 1 bullet")
        enemy.loaded = 0;
        enemy.holster += 2
        player.holster -= 1;
    }
    updateScore()
    checkWinner()
}

//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)
//ABOVE is for easy mode (mode 1)

//Determines which game mode we are in which dictaces which algorithms to use

const gameMode = {
    difficulty: "Easy",
    lastEnemyChoice: "", //needed to keep track of when both players punch each other
    lastPlayerChoice: "", //needed to keep track of when both players punch each other
}


function resetMedium() {
    player.loaded = 1,
        player.holster = 4,
        enemy.loaded = 1,
        enemy.holster = 4,
        gameMode.difficulty = "Medium";
    document.getElementById("enemyAction").innerHTML = '';
    document.getElementById("playerChoice").innerHTML = '';
    document.getElementById("playerLoaded").innerHTML = 1;
    document.getElementById("playerHolster").innerHTML = 4;
    document.getElementById("announce").innerHTML = "First one to have all 10 bullets is the winner";
    document.getElementById("announce2").innerHTML = "";
    document.getElementById("enemyLoaded").innerHTML = 1;
    document.getElementById("enemyHolster").innerHTML = 4;
    document.getElementById("mode").innerHTML = gameMode.difficulty;
}


const reload = () => {
    if (gameMode.difficulty === "Easy") {
        reloadEasy()
    } else if (gameMode.difficulty === "Medium") {
        reloadMedium()
    }
}


const reloadMedium = () => {
    playerChoice("reloaded");
    let choice = enemyChoiceMedium();
    if (player.loaded === 1 && choice === "block") { 
        document.getElementById("announce").innerHTML = "You are already loaded, and the enemy blocked. Nothing happens";
    } else if (player.loaded === 1 && choice === "punch") {
        document.getElementById("announce").innerHTML = "You are already loaded, the enemy punched you. Nothing happens";
    } else if (player.loaded === 1 && choice === "shoot") {
        document.getElementById("announce").innerHTML = "You are already loaded, but the enemy shot you. The enemy gains 1 bullet";
        player.holster -= 1;
        enemy.loaded = 0;
        enemy.holster += 2;
    }  else if (choice === 'reload') {
        enemy.loaded = 1;
        enemy.holster -= 1;
        player.loaded = 1;
        player.holster -= 1;
        announce("You both reloaded");
    } else if (choice === "shoot") {
        announce("You got shot! You lose one bullet from your holster");
        player.holster -= 2;
        player.loaded = 1;
        enemy.holster += 2;
        enemy.loaded = 0;
    } else if (choice === "punch") {
        announce("The enemy punched you and negated your reload");
    }
    // document.getElementById("announce").innerHTML = "test"; //test
    clearAnnounce2()
    updateScore()
    checkWinner()
}


const block = () => {
    if (gameMode.difficulty === "Easy") {
        blockEasy()
    } else if (gameMode.difficulty === "Medium") {
        blockMedium()
    }
}

const blockMedium = () => {
    playerChoice("blocked")
    let choice = enemyChoiceMedium(); //shuld return a decision
    if (choice === 'block') {
        announce("You both blocked! Nothing happens...")
    } else if (choice === "punch") {
        enemy.holster += 1;
        player.holster -= 1;
        announce("Too bad you were prepared to block a bullet and not a punch! Lose 1 bullet from your holster")
    } else if (choice === 'reload') {
        announce("The enemy took advantage of your block and reloaded!")
        enemyReload()
    } else if (choice === "shoot") {
        announce("Good thing you blocked! The enemy is reholstering their bullet")
        enemy.holster += 1;
        enemy.loaded = 0;
    }
    clearAnnounce2()
    updateScore()
    checkWinner();
}



const punch = () => {
    if (gameMode.difficulty === "Easy") {
        punchEasy()
    } else if (gameMode.difficulty === "Medium") {
        punchMedium()
    }
}


const punchMedium = () => {
    playerChoice("punched")
    let choice = enemyChoiceMedium(); //shuld return a decision
    if(gameMode.lastPlayerChoice === "punched" && gameMode.lastEnemyChoice === "punched") {
        announce("You can't keep punching each other. Let your hand recover!")
    } else if (choice === "punch") {
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
    clearAnnounce2()
    updateScore()
    checkWinner()
}




//alrogruthms for medium below


// Algorithm 2.1 defensiveAggresion
// Neither loaded. reload 50%, punch 50%
// 2.1.P reload 100%
const defensiveAggresion = () => {
    let choice = Math.floor(Math.random() * 2);
    let decision = "";
    if (gameMode.lastEnemyChoice === "punch" && gameMode.lastPlayerChoice === "punch") {
        decision = "reload";
        // document.getElementById("enemyAction").innerHTML = "reload"; //missing piece from last mode's algo to this one
    } else if (choice === 0) {
        decision = "punch";
    } else if (choice === 1) {
        decision = "reload"
    }
    gameMode.lastEnemyChoice = decision
    return decision
}


// Algorithm 2.2 mixedAction
// Both are loaded. Block: 33%, Punch: 33%. Shoot: 33%.
//2.2.P Block: 50%, Shoot: 50%.
const mixedAction = () => {
    let choice = Math.floor(Math.random() * 2);
    let decision = "";
    if (gameMode.lastEnemyChoice === "punch" && gameMode.lastPlayerChoice === "punch") {
        mixedActionPunched()
    } else if (choice === 0) {
        decision = "block"
    } else if (choice === 1) {
        decision = "shoot"
    } else if (choice === 2) {
        decision = "punch"
    }
    gameMode.lastEnemyChoice = decision
    return decision
}

//2.2P
const mixedActionPunched = () => {
    let choice = Math.floor(Math.random() * 2);
    let decision = "";
    if (choice === 0) {
        decision = "block"
    } else if (choice === 1) {
        decision = "shoot"
    }
    gameMode.lastEnemyChoice = decision
    return decision
}



// Algorithm 2.3 defensiveMedium
// Neither loaded. Reload 40%, Block: 40%, Punch: 20%
// 2.3.P Block: 90%, Reload: 10%.
const defensiveMedium = () => {
    let choice = Math.floor(Math.random() * 5);
    let decision = "";
    if (gameMode.lastEnemyChoice === "punch" && gameMode.lastPlayerChoice === "punch") {
        defensiveMediumPunched() //2.3.P
    } else if (choice < 2) {
        decision = "reload"
    } else if (choice < 4) {
        decision = "block"
    } else if (choice === 4) {
        decision = "punch"
    }
    gameMode.lastEnemyChoice = decision
    return decision
}

//2.3P
const defensiveMediumPunched = () => {
    let choice = Math.floor(Math.random() * 10);
    let decision = "";
    if (choice < 9) {
        decision = "block"
    } else if (choice === 9) {
        decision = "reload"
    }
    gameMode.lastEnemyChoice = decision
    return decision
}

// Algorithm 2.4 aggresiveMeidum
// Neither loaded. Shoot: 50%, Punch: 50%.
// 2.4.P Shoot: 100%
const aggresiveMeidum = () => {
    let choice = Math.floor(Math.random() * 2);
    let decision = "";
    if (gameMode.lastEnemyChoice === "punch" && gameMode.lastPlayerChoice === "punch") { //2.4.P
        decision = "shoot";
    } else if (choice === 0) {
        decision = "shoot";
    } else if (choice === 1) {
        decision = "punch";
    }
    gameMode.lastEnemyChoice = decision
    return decision
}





const enemyChoiceMedium = () => {
    if (player.loaded === 0 && enemy.loaded === 0) {
        defensiveAggresion();
    } else if (player.loaded === 1 && enemy.loaded === 1) {
        mixedAction();
    } else if (player.loaded === 0 && enemy.loaded === 1) {
        aggresiveMeidum();
    } else if (player.loaded === 1 && enemy.loaded === 0) {
        defensiveMedium();
    }
}






//just so the easy version still works for now until  medium is complete.



const shoot = () => {
    shootEasy();
}








