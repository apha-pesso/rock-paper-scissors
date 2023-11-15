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

// Adding some UI
const rock = document.createElement("button");
rock.innerText = "ROCK";
const paper = document.createElement("button");
paper.innerText = "PAPER";
const scissors = document.createElement("button");
scissors.innerText = "SCISSORS";

const body = document.querySelector("body");
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const buttons = document.querySelectorAll("button");

let computerScore = 0;
let playerScore = 0;

// Add div to display result
const gameResult = document.createElement("div");
body.appendChild(gameResult);

buttons.forEach((button) => {
  button.style.margin = "20px";

  button.addEventListener("click", () => {
    // Get player selection
    const playerSelection = button.innerText.toLowerCase();

    // Get computer selection
    const computerSelection = getComputerChoice();

    // Play a round
    const result = playRound(playerSelection, computerSelection);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    } else {
      alert("It's a tie!");
    }

    gameResult.innerText = `PLAYER ${playerScore} Vs ${computerScore} COMPUTER`;
  });
});
