
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

   //compare the user choice with the random choices, base on that will output one of the variables declared. 
    switch (playerSelection) {

        //first check if both are the same and declare a tie 
        case computerSelection:
            console.log(tie)

        //with every comparison return a message to use later to determine scores and winner.
            return "tie"
            break
        
        //If is not a tie will be two possibilities to compare with the random choice to determine if the user wins or lose.
        //Hence with every value the user could choose nest a comparison with the other two options.
        case "rock":
            switch (computerSelection) {
                case "paper":
                    console.log(lose) 
                    return "loser"
                    break
                case "scissors":
                    console.log(win)
                    return "winner" 
                    break
            }
        case "paper":
            switch (computerSelection) {
                case "scissors":
                    console.log(lose)
                    return "loser"
                    break
                case "rock":
                    console.log(win)
                    return "winner"
                    break
            }
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    console.log(lose)
                    return "loser" 
                    break
                case "paper":
                    console.log(win)
                    return "winner"
                    break
            }
    }
}



//Allow different rounds, keep scores and display winner at the end.
function game() {
    let computerScore = 0
    let userScore = 0
    for (let i = 0; i < 5; i++) {

        // the prompt will show up every time the loop runs.
        let player = prompt("What is your bet, Rock, Paper or Scissors?").toLowerCase()
        let round = playRound(player, getComputerChoice())

        //Based on the computerchoice function's return will store score for both
        if (round == "loser") {
            computerScore += 1
        } else if (round == "winner") {
            userScore += 1
        }
        console.log(`Machine score: ${computerScore}`)
        console.log(`Your score: ${userScore}`)
    }

    //Compare scores and determine who will be the winner
    if (userScore > computerScore) {
        return "Congratulations! You beat the machine"
    } else if (userScore < computerScore){
        return "You lost but let's go for revenge"
    } else {
        return "It is a tie"
    }
}




console.log(game())