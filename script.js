
// Make the computer select randomly one choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"] 
    let choice = choices[Math.floor(Math.random() * 3)]
    return choice
}

// compare both choices and determine a winner.
function playRound(playerSelection, computerSelection) {
    let win = `You win! ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection}`
    let lose = `You lost! ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection}`
    let tie = "It is a tie"
    switch (playerSelection) {
        case computerSelection:
            return tie
            break
        case "rock":
            switch (computerSelection) {
                case "paper":
                    return lose
                    break
                case "scissors":
                    return  win
                    break
            }
        case "paper":
            switch (computerSelection) {
                case "scissors":
                    return lose
                    break
                case "rock":
                    return win
                    break
            }
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return lose 
                    break
                case "paper":
                    return win
                    break
            }
    }
}


let player = prompt("What is your bet, Rock, Paper or Scissors?").toLowerCase()

console.log(playRound(player, getComputerChoice()))
