let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

function getComputerChoice() {
let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
      return('rock');
    } else if(randomNumber === 1) {
        return ('paper');
    } else if(randomNumber === 2) {
        return ('scissors')
    }
}
function isGameOver() {
   return playerScore === 5 || computerScore === 5
}
function playRound(playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        roundWinner = 'tie'
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        playerScore++
        roundWinner = 'player'
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        playerScore++
        roundWinner = 'player'
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        playerScore++
        roundWinner = 'player'
    } else {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerChoice, computerSelection);
}

const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const rockBtn = document.getElementById("rockbtn");
const paperBtn = document.getElementById("paperbtn");
const scissorsBtn = document.getElementById("scissorsbtn");
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));
restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", closeEndgameModal);

function handleClick(playerChoice) {
    const computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection);
    updateScore();
    if (isGameOver()) {
        openEndgameModal()
      setFinalMessage();
    }
}

function updateScore() {
  if (roundWinner === "tie") {
    scoreInfo.textContent = "It's a tie!";
  } else if (roundWinner === "player") {
    scoreInfo.textContent = "You won!";
  } else if (roundWinner === "computer") {
    scoreInfo.textContent = "You lost!";
  }

  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}
function updateScoreMessage(winner, playerChoice, computerSelection) {
  if (winner === "player") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerChoice
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === "computer") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerChoice
    )} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerChoice
  )} ties with ${computerSelection.toLowerCase()}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function openEndgameModal() {
  endgameModal.classList.add("active");
  overlay.classList.add("active");
}

function closeEndgameModal() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = "You won!")
    : (endgameMsg.textContent = "You lost...");
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = "Choose your weapon";
  scoreMessage.textContent = "First to score 5 points wins the game";
  playerScorePara.textContent = "Player: 0";
  computerScorePara.textContent = "Computer: 0";
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}


