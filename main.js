let userInput = "paper";

function getUserChoice() {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput;
} else {
    return "Please choose 'rock', 'paper', or 'scissors.'";
}
}

function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3); 
    
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    
}
let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
// userChoice === computerChoice returns a "tie"


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return "The computer wins.";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "The user wins.";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return "The computer wins.";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "The user wins.";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        return "The computer wins.";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "The user wins.";
    } else if (userChoice ==="bomb") {
        return "WINNER WINNER CHICKEN DINNER";
    }
    }

    function playGame() {
        var userChoice = getUserChoice("paper", "rock", "scissors");
        console.log(userChoice);
        var computerChoice = getComputerChoice();
        console.log(computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
    }
    console.log(playGame());
