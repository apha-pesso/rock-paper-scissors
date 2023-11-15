// getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You lose! Scissors beats Paper";
    } else {
      return "You win! Paper beats Rock";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats Scissors";
    } else {
      return "You win! Scissors beats Paper";
    }
  }
}

// const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// alert(playRound(playerSelection, computerSelection));

// Play 5 rounds

function game(count = 5) {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < count; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    // console.log(result);
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    } else {
      continue;
    }
  }

  if (computerScore > playerScore) {
    alert("Computer wins the game!");
  } else if (computerScore == playerScore) {
    alert("Game ends in a tie!");
  } else {
    alert("Player wins!");
  }
}

game();
