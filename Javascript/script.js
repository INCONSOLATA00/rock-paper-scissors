const result = document.querySelector('.result');
const finalResult = document.querySelector('.finalResult');

let isComputer = 0;
let isPlayer = 0;

let narration;
let round = 0;

let computerAns;
let getPlayerChoice = (playerChosenButton) => { // PLAYER

    console.log(playerChosenButton);
    getComputerChoice();

    function getComputerChoice() { //COMPUTER

        randomNumber = Math.ceil(Math.random() * 3);

        if (randomNumber == 1) {
            computerAns = 'rock';
        } else if (randomNumber == 2) {
            computerAns = 'paper';
        } else {
            computerAns = 'scissors';
        }
        return singleRound(playerChosenButton, computerAns);
    }

    function singleRound(playerChosenButton, computerAns) {

        if (playerChosenButton == computerAns) { // *CONTAINS: monetary results*
            narration = "it's a draw";
        } else if (playerChosenButton == 'rock' && computerAns == 'paper') {
            narration = 'the computer wins this round!'
            isComputer += 1;
        } else if (playerChosenButton == 'scissors' && computerAns == 'rock') {
            narration = 'the computer wins this round!'
            isComputer += 1;
        } else if (playerChosenButton == 'paper' && computerAns == 'scissors') {
            narration = 'the computer wins this round!'
            isComputer += 1;
        } else {
            narration = 'the player wins this round!'
            isPlayer += 1;
        }
    }
    round += 1;
    console.log(round);
    finalFunc();
};

function finalFunc() {
    result.innerText = `round ${round}/5`;
    document.querySelector('p').innerText = `result: ${narration}`;

    if (round == 5 && isPlayer > isComputer) {
        result.remove();
        finalResult.innerText = 'congratulations, you won!';
        round = 0;

    } else if (round == 5 && isPlayer < isComputer) {
        result.remove();
        finalResult.innerText = 'you lost bud, better luck next time';
        round = 0;

    } else if (round == 5 && isPlayer == 5 && isComputer == 5) {
        result.remove();
        finalResult.innerText = 'it was a tie!';
        round = 0;
    }
}