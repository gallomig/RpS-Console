

// Random Num for getComputerChoice function
let randomNumber = Math.floor(Math.random() * 3) + 1;

// Computer makes a choice
function getComputerChoice() {
    let cC;
    if (randomNumber === 1) {
        alert("Computer picked Rock");
        return cC = 1;
    } else if (randomNumber === 2) {
        alert("Computer picked Paper");
        return cC = 2; 
    } else if (randomNumber === 3) {
        alert("Computer picked Scissors");
        return cC = 3;
    }
}

// Player makes a choice
function getPlayerChoice() {
    let pC;
    let playChoice = prompt("Player One, Enter Rock, Paper or Scissors: ");
    if (playChoice === "Rock") {
        alert("You picked Rock");
        return pC = 1;
    } else if (playChoice === "Paper") {
        alert("You picked Paper");
        return pC = 2;
    } else if (playChoice === "Scissors") {
        alert("You picked Scissors");
        return pC = 3;
    } else {
        alert("Wrong Input");
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound() {
    if (playerSelection === 1) {
       if (computerSelection === 1) {
        alert("Draw");
       } else if (computerSelection === 2) {
        alert("You Lose! Paper beats Rock")
       } else if (computerSelection === 3) {
        alert("You Win! Rock beats Scissors");
       }
    } else if (playerSelection === 2) {
        if (computerSelection === 1) {
            alert("You win! Paper beats Rock");
           } else if (computerSelection === 2) {
            alert("Draw")
           } else if (computerSelection === 3) {
            alert("You lose, Scissors beats Paper");
           }
    } else if (playerSelection === 3) {
        if (computerSelection === 1) {
            alert("You lose, Rock beats Scissors");
           } else if (computerSelection === 2) {
            alert("You win, Scissors beats Paper");
           } else if (computerSelection === 3) {
            alert("Draw");
           }
    }
}


//gameplay();
