function getComputerChice() {
    console.log(Math.floor(Math.random|(2 * 3)));
}

function singleRound(playerSelection, computerSelection) {
    return `You lose! Paper beats Rock`;
}

const playerSelection = "rock";
const computerSelection = getComputerChice();
console.log(singleRound(playerSelection, computerSelection));