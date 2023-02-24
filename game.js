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

function playRound() {
     let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
     let computerSelection = getComputerChoice();
    if (playerChoice === computerSelection) {
        console.log('draw')
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        console.log(`You win ${playerChoice} beats ${computerSelection}`)
        playerScore++
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        console.log(`You win ${playerChoice} beats ${computerSelection}`)
        playerScore++
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        console.log(`You win ${playerChoice} beats ${computerSelection}`)
        playerScore++
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerChoice}`)
        computerScore++
    }
}




for(let i = 0; i < 5; i++) {
    playRound();
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore)
  }
  


