let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let rpsSpin = ['rock', 'paper', 'scissors'];
  let ranRpsNum = Math.floor(Math.random() * 3);
  return rpsSpin[ranRpsNum];
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        return `Player loses, ${computerSelection} beats ${playerSelection}`
      }
  else if ((playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'rock' && computerSelection === 'scissors')) {
        playerScore++;
        return `Player wins, ${playerSelection} beats ${computerSelection}`
      }
  else {
    return 'It was a tie!';
  }
}

function game() {
  let playerSelection = prompt('Enter rock, paper, or scissors').toLowerCase();

  for(let i = 0; i > 5; i++) {
    playRound(playerSelection, computerPlay());
    return i;
  }

}

console.log(game());
