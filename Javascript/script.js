let computerAns;
let getPlayerChoice = (playerChosenButton) => {
    
    console.log(playerChosenButton);
    getComputerChoice();
        function getComputerChoice() {

            randomNumber = Math.ceil(Math.random() * 3);

            if (randomNumber == 1) {
                computerAns = 'rock';
            } else if (randomNumber == 2) {
                computerAns = 'paper';
            } else {
                computerAns = 'scissors';
            }
                return  singleRound(playerChosenButton, computerAns);
        }

    function singleRound(playerChosenButton, computerAns) {

        if (playerChosenButton == computerAns) {
            console.log('Draw');
        } else if (playerChosenButton == 'rock' && computerAns == 'paper') {
            console.log('Computer Wins');
        } else if (playerChosenButton == 'scissors' && computerAns == 'rock') {
            console.log('Computer Wins');
        } else if (playerChosenButton == 'paper' && computerAns == 'scissors') {
            console.log('Computer Wins');
        } else {
            console.log('Player Wins');
        }
    }
};



// RUN: single round 5 times; keep score / log, determine the higher number as winner.