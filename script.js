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

// Adding UI for gameplay
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

// Add text to button
rock.innerText = "Rock";
paper.innerText = "Paper";
scissors.innerText = "Scissors";

// Get the body
const body = document.querySelector("body");

// Attach buttons to the body

function appends(parent, children) {
  children.forEach((child) => {
    parent.appendChild(child);
  });
}

appends(body, [rock, paper, scissors]);

const buttons = document.querySelectorAll("button");

let computerScore = 0;
let playerScore = 0;
// Play game with button click

buttons.forEach((button) => {
  button.style.margin = "20px";

  button.addEventListener("click", () => {
    const playerSelection = button.innerText.toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    // alert(result);

    // Scores
    if (result.includes("win")) {
      ++playerScore;
    } else if (result.includes("lose")) {
      ++computerScore;
    }

    // Add text to div
    scores.innerText = `${result}\nPlayer ${playerScore} vs ${computerScore} Computer`;

    if (playerScore == 5) {
      alert(`Player wins!\nPlayer ${playerScore} vs ${computerScore} Computer`);
      location.reload();
    } else if (computerScore == 5) {
      alert(
        `Computer wins!\nPlayer ${playerScore} vs ${computerScore} Computer`
      );

      location.reload();
    }
  });
});

const scores = document.createElement("div");
body.appendChild(scores);
