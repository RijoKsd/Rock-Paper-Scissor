let p = document.createElement('p');
p.textContent = 'Hello World';
document.body.appendChild(p);

function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissor'];
    let randomChoice = Math.floor(Math.random() * computerChoice.length)
    return computerChoice[randomChoice];
}

function getPlayerSelection() {
    let playerChoice = prompt('Enter your choice: rock, paper or scissor', undefined).toLowerCase();
    if (  playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissor') {
        alert('Please enter a valid choice');
        getPlayerSelection();
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Draw");
        p.textContent = "Draw";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log(`You Win ! ${playerSelection} beats ${computerSelection}`);
        p.textContent = `You Win ! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You Win ! ${playerSelection} beats ${computerSelection}`);
        p.textContent = `You Win ! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        console.log(`You Win ! ${playerSelection} beats ${computerSelection}`);
        p.textContent = `You Win ! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You Win ! ${playerSelection} beats ${computerSelection}`);
        p.textContent = `You Win ! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log(`You Win ! ${playerSelection} beats ${computerSelection}`);
        p.textContent = `You Win ! ${playerSelection} beats ${computerSelection}`;
    } else {
        console.log(`You Lose ! ${playerSelection} beats ${computerSelection}`);
        p.textContent = `You Lose ! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}
game();
