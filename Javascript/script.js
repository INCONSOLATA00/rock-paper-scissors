const wrapper = document.querySelector('.wrapper');
const result = document.querySelector('#result');
const score = document.querySelector('#score');

const buttons = document.querySelector('.buttons');
const finalResult = document.querySelector('#finalResult');
finalResult.remove();

let isComputer = 0;
let isPlayer = 0;

let narration;
let round = 0;

let initializer = 0;
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
    initializer += 1;
    score.innerText = `round ${round}/5`;

    console.log(`round ${round}`);
    console.log(`initializer ${initializer}`)


    finalFunc();
};

function finalFunc() {
    document.querySelector('p').innerText = `result: ${narration}`; // Score gets overridden with the final result narration.

    if (round == 5 && isPlayer > isComputer) {
        result.remove();
        buttons.append(finalResult);
        finalResult.appendChild(score);
        finalResult.innerText = 'congratulations, you won!';

        round = 0;
        if (initializer ==  6) {
            finalResult.remove()
            finalResult.append(result);
            finalResult.appendChild(score);
        }

    } else if (round == 5 && isPlayer < isComputer) {
        result.remove();
        buttons.append(finalResult);
        finalResult.appendChild(score);
        finalResult.innerText = 'you lost bud, better luck next time';

        round = 0;
        if (initializer == 6) {
            finalResult.remove()
            finalResult.append(result);
            finalResult.appendChild(score);
        }

    } else if (round == 5 && isPlayer == 5 && isComputer == 5) {
        result.remove();
        buttons.append(finalResult);
        finalResult.appendChild(score);
        finalResult.innerText = 'it was a tie!';

        round = 0;
        if (initializer == 6) {
            finalResult.remove()
            finalResult.append(result);
            finalResult.appendChild(score);
        }
    }
}