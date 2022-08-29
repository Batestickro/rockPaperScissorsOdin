
// Make the computer select randomly one choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"] 
    let choice = choices[Math.floor(Math.random() * 3)]
    return choice
}

// compare both choices and determine a winner.
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case computerSelection:
            return "It is a tie"
            break
        case "rock":
            switch (computerSelection) {
                case "paper":
                    return "You lost! Rock is beaten by paper."
                    break
                case "scissors":
                    return "You win! Rock beats scissors."
                    break
            }
        case "paper":
            switch (computerSelection) {
                case "scissors":
                    return "You lost! Paper is beaten by scissors."
                    break
                case "rock":
                    return "You win! Paper beats rock."
                    break
            }
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You lost! Scissors is beaten by rock"
                    break
                case "paper":
                    return "You win! Scissors beats paper"
                    break
            }
    }
}


let player = prompt("What is your bet, Rock, Paper or Scissors?").toLowerCase()

console.log(playRound(player, getComputerChoice()))
