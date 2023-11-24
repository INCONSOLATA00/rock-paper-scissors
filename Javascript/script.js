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
let computerAns;

let getPlayerChoice = (playerChosenButton) => {

    // console.log(playerChosenButton);
    getComputerChoice();
    console.log('----------');
    console.log(`round: ${round}`);
    console.log(`computer: ${isComputer}`);
    console.log(`player: ${isPlayer}`);

    function getComputerChoice() {
        round += 1;
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

        if (playerChosenButton == computerAns) {
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

    score.innerText = `round ${round}/5`;
    finalFunc();
};

function finalFunc() {
    document.querySelector('p').innerText = `result: ${narration}`;

    if (round == 5 && isPlayer > isComputer) {
        result.remove();
        buttons.append(finalResult); buttons.appendChild(score);
        finalResult.innerText = 'congratulations, you won!';

        round = 0; isComputer = 0; isPlayer =0;

    } else if (round == 5 && isPlayer < isComputer) {
        result.remove();
        buttons.append(finalResult); buttons.appendChild(score);
        finalResult.innerText = 'you lost bud, better luck next time';

        round = 0; isComputer = 0; isPlayer =0;

    } else if (round == 5 && isPlayer == isComputer) {
        result.remove();
        buttons.append(finalResult); buttons.appendChild(score);
        finalResult.innerText = 'it was a tie!';

        round = 0; isComputer = 0; isPlayer =0;

    }

}