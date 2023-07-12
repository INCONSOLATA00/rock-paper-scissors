// getPlayerChoice (fixed)

const getPlayerChoice = prompt('type either, rock, paper, or scissors')

// getComputerChoice (random)

function getComputerChoice() {
    randomNumber = Math.ceil(Math.random() * 3);


if (randomNumber == 1) {
    return 'rock';
} else if (randomNumber == 2) {
    return 'paper';
} else {
    return 'scissors';
}

}

// Play single round (list all scenario where the computer wins first to
// eliminate all variables)

function singleRound(getPlayerChoice, getComputerChoice) {

if (getPlayerChoice == getComputerChoice) {
    return 'Draw';
}
else if (getPlayerChoice == 'rock' && getComputerChoice == 'paper') {
    return 'Computer Wins';
}
else if (getPlayerChoice == 'scissors' && getComputerChoice == 'rock') {
    return 'Computer Wins';
}
else if (getPlayerChoice == 'paper' && getComputerChoice == 'scissors') {
    return 'Computer Wins';
} else {
    return 'Player Wins';
}

}

getComputerChoice();

