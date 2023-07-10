let computerChoseCard = document.querySelector("#computer-choice");
let playerChoseCard = document.querySelector("#player-choice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result = document.querySelector("#result");
let winOrLose = document.querySelector("#win-or-lose");
let currentPlayerScore = document.querySelector("#current-player-score");
let currentComputerScore = document.querySelector("#current-computer-score");
let playAgain = document.querySelector("#restart-btn");

let winnerBox = document.querySelector("#winner-box");
let winStatus = document.querySelector("#win-status");

rock.addEventListener("click", getPlayerSelection);
paper.addEventListener("click", getPlayerSelection);
scissor.addEventListener("click", getPlayerSelection);

// Random computer choice
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissor"];
  let randomChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomChoice];
}

//  Player choice
function getPlayerSelection(e) {
  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice();
  updateUI(playerChoice, computerChoice);
  playRound(playerChoice, computerChoice);
}

//  call after user click event
function updateUI(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      playerChoseCard.textContent = "👊";
      break;
    case "paper":
      playerChoseCard.textContent = "🤚";
      break;
    case "scissor":
      playerChoseCard.textContent = "✌";
      break;
  }
  switch (computerChoice) {
    case "rock":
      computerChoseCard.textContent = "👊";
      break;
    case "paper":
      computerChoseCard.textContent = "🤚";
      break;
    case "scissor":
      computerChoseCard.textContent = "✌";
      break;
  }
}

function stopConfetti() {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

function isGameOver(playerScore, computerScore) {
  if (playerScore === 5) {
    dialogBox();
    winStatus.textContent = "You Win !";
    confetti();
  } else if (computerScore === 5) {
    dialogBox();
    winStatus.textContent = "You Lose !";
  }
}

let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result.textContent = "Draw";
    winOrLose.textContent = ` ${playerSelection} draw with  ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result.textContent = "You Win ! ";

    winOrLose.textContent = ` ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    currentPlayerScore.textContent = playerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result.textContent = "You Win ! ";
    winOrLose.textContent = ` ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    currentPlayerScore.textContent = playerScore;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    result.textContent = "You Win ! ";

    winOrLose.textContent = ` ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    currentPlayerScore.textContent = playerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result.textContent = "You Win ! ";

    winOrLose.textContent = ` ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    currentPlayerScore.textContent = playerScore;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    result.textContent = "You Win ! ";

    winOrLose.textContent = ` ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    currentPlayerScore.textContent = playerScore;
  } else {
    result.textContent = "You Lose! ! ";
    winOrLose.textContent = `${computerSelection} beats ${playerSelection}`;
    computerScore++;
    currentComputerScore.textContent = computerScore;
  }
  isGameOver(playerScore, computerScore);
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}
// game();



function dialogBox() {
    winnerBox.classList.add('active')
    document.querySelectorAll('body > *:not(#winner-box)').forEach(el => {
        el.style.filter = "blur(10px)";
        }
    )

    removeEvent();
  }
  
  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }
  function removeEvent() {
    rock.removeEventListener("click", getPlayerSelection);
    paper.removeEventListener("click", getPlayerSelection);
    scissor.removeEventListener("click", getPlayerSelection);
  }


function newGame() {
    winnerBox.classList.remove('active');

    document.querySelectorAll('body > *:not(#winner-box)').forEach(el => {
        el.style.filter = "blur(0px)";
        }
    )
    rock.addEventListener("click", getPlayerSelection);
    paper.addEventListener("click", getPlayerSelection);
    scissor.addEventListener("click", getPlayerSelection);
    
        playerScore = 0;
    computerScore = 0;
    currentPlayerScore.textContent = playerScore;
    currentComputerScore.textContent = computerScore;
    result.textContent = "";
    winOrLose.textContent = "Score 5 points to win";
    playerChoseCard.textContent = "❔";
    computerChoseCard.textContent = "❔";
}
  playAgain.addEventListener("click",newGame);