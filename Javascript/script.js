let isComputer = 0;
let isPlayer = 0;

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
    
        if (playerChosenButton == computerAns) { // *CONTAINS: monetary results*
            console.log('Draw');
            final = 'Draw';
        } else if (playerChosenButton == 'rock' && computerAns == 'paper') {
            console.log('Computer Wins');
            isComputer += 1;
        } else if (playerChosenButton == 'scissors' && computerAns == 'rock') {
            console.log('Computer Wins');
            isComputer += 1;
        } else if (playerChosenButton == 'paper' && computerAns == 'scissors') {
            console.log('Computer Wins');
            isComputer += 1;
        } else {
            console.log('Player Wins');
            isPlayer += 1;
        }
    }
    console.log(`is final ${final}`);   // ??
};

const alsoResult = document.querySelector('.result');
const resultText = document.createElement('p');
resultText.textContent = final;



// initialize and append results to corresponding elements.