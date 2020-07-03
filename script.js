const playerParaScore = document.querySelector('p#playerScore');
const computerParaScore = document.querySelector('p#computerScore');
const counters = document.querySelector('div.counters');
const selectedChoices = document.querySelector('p#selectedChoices');

let playerSelected = '';
let computerSelected = '';
let holderPick = '';
let playerScore = 0;
let computerScore = 0;
let totalScore = 0;


function computerPlay() {
  let rpsSpin = ["rock", "paper", "scissors"];
  let ranRpsNum = Math.floor(Math.random() * 3);
  return rpsSpin[ranRpsNum];
}


document.addEventListener('click', function(e) {
    console.log(e.originalTarget.id);
    if ((playerScore == 5 && playerScore > computerScore) ||
        (computerScore == 5 && playerScore < computerScore)) {
      gameSet();
      ++playerScore;
      ++computerScore;
    }
    else if (e.originalTarget.id == 'rockImg' && (computerScore < 5 && playerScore < 5)) {
      holderPick = 'rock';
      game();
      currentComputerScorePara.textContent = `${computerScore}`;
      currentPlayerScorePara.textContent = `${playerScore}`
    }
    else if (e.originalTarget.id == 'paperImg' && (computerScore < 5 && playerScore < 5)) {
      holderPick = 'paper';
      game();
      currentComputerScorePara.textContent = `${computerScore}`;
      currentPlayerScorePara.textContent = `${playerScore}`
    }
    else if (e.originalTarget.id == 'scissorsImg' && (computerScore < 5 && playerScore < 5)) {
      holderPick = 'scissors';
      game();
      currentComputerScorePara.textContent = `${computerScore}`;
      currentPlayerScorePara.textContent = `${playerScore}`
    }
  });


function playRound(playerSelection, computerSelection) {
  playerSelected = playerSelection;
  computerSelected = computerSelection;
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "lose";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    return "win";
  }
}

function game() {
      let gameState = playRound(holderPick, computerPlay());
        if (gameState === "win") {
          ++playerScore;
          ++totalScore;
          selectedChoices.textContent = `Player selected ${playerSelected} and computer selected ${computerSelected}`
          console.log(`Player's ${playerSelected} beats computer's ${computerSelected}, player wins this round. Player is at ${playerScore} and computer is at ${computerScore}`)
        } else if (gameState === "lose") {
          ++computerScore;
          ++totalScore;
          selectedChoices.textContent = `Computer selected ${computerSelected} and player selected ${playerSelected}`
          console.log(`Computer's ${computerSelected} beats player's ${playerSelected}, player loses this round. Player is at ${playerScore} and computer is at ${computerScore}`)
        } else {
          ++totalScore;
          selectedChoices.textContent = `Both computer and player selcted ${playerSelected}`
          console.log(`Both computer and player selected ${playerSelected}, it was a tie! Player is at ${playerScore} and computer is at ${computerScore}`)
        }
  if (playerScore > computerScore) {
      return `Player wins! Player had a score of ${playerScore} and computer had ${computerScore} over ${totalScore} rounds.`;
    }
  else if (playerScore < computerScore) {
      return `Player loses! Player had a score of ${playerScore} and computer had ${computerScore} over ${totalScore} rounds.`;
    }
}

const currentPlayerScore = playerScore;
const currentComputerScore = computerScore;
let currentPlayerScorePara = document.createElement('p');
currentPlayerScorePara.classList.add('currentPlayerScorePara');
currentPlayerScorePara.textContent = `${playerScore}`
playerParaScore.appendChild(currentPlayerScorePara);

let currentComputerScorePara = document.createElement('p');
currentComputerScorePara.classList.add('currentComputerScorePara');
currentComputerScorePara.textContent = `${computerScore}`;
computerParaScore.appendChild(currentComputerScorePara);

function gameSet() {
  if (playerScore === 5) {
    currentComputerScorePara.textContent = '';
    currentPlayerScorePara.textContent = '';
    const newPlayerScore = document.createElement('p');
    newPlayerScore.classList.add('newPlayerScore');
    newPlayerScore.textContent = `Player won with ${playerScore} wins to ${computerScore} over ${totalScore} rounds!`
    playerParaScore.appendChild(newPlayerScore);
  }
  else if (computerScore === 5) {
    currentComputerScorePara.textContent = '';
    currentPlayerScorePara.textContent = '';
    const newComputerScore = document.createElement('p');
    newComputerScore.classList.add('newComputerScore');
    newComputerScore.textContent = `Computer won with ${computerScore} wins to ${playerScore} over ${totalScore} rounds!`
    computerParaScore.appendChild(newComputerScore);
  }
}
