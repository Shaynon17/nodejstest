function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
        return 'shoot'
    } else if (randomNumber === 1) {
        return 'reload'
    } else if (randomNumber === 2) {
        return 'block'
    } else if (randomNumber === 3) {
        return 'punch'
    }
}

console.log(getComputerChoice())