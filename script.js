function playerTest() {
  let rpsSpin = ['rock', 'paper', 'scissors'];
  let ranRpsNum = Math.floor(Math.random() * 3);
  return rpsSpin[ranRpsNum];
}


function computerPlay() {
  let rpsSpin = ['rock', 'paper', 'scissors'];
  let ranRpsNum = Math.floor(Math.random() * 3);
  return rpsSpin[ranRpsNum];
}


function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return `Player loses, ${computerSelection} beats ${playerSelection}`
      }
  else if ((playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'rock' && computerSelection === 'scissors')) {
        return `Player wins, ${playerSelection} beats ${computerSelection}`
      }
  else {
    return 'It was a tie!';
  }
}

playerSelection = prompt('Enter rock, paper, or scissors');

console.log(playRound(playerSelection, computerPlay()));
