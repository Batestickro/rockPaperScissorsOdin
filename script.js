// Make the computee select randomly one choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"] 
    let choice = choices[Math.floor(Math.random() * 3)]
    return choice
}



// compare both choices and determine a winner.
function playRound(playerSelection, computerSelection) {
    let win = `You win! ${playerSelection} beats ${computerSelection}`
    let lose = `You lost! ${computerSelection} beats ${playerSelection}`
    let tie = "It is a tie"

   //compare the user choice with the random choices, base on that will output one of the variables declared. 
    switch (playerSelection) {

        //first check if both are the same and declare a tie 
        case computerSelection:
            results.textContent = tie

        //with every comparison return a message to use later to determine scores and winner.
            return "tie"
            break
        
        //If is not a tie will be two possibilities to compare with the random choice to determine if the user wins or lose.
        //Hence with every value the user could choose nest a comparison with the other two options.
        case "rock":
            switch (computerSelection) {
                case "paper":
                    results.textContent = lose
                    return "loser"
                    break
                case "scissors":
                    results.textContent = win
                    return "winner" 
                    break
            }
        case "paper":
            switch (computerSelection) {
                case "scissors":
                    results.textContent = lose
                    return "loser"
                    break
                case "rock":
                    results.textContent = win
                    return "winner"
                    break
            }
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    results.textContent = lose
                    return "loser" 
                    break
                case "paper":
                    results.textContent = win
                    return "winner"
                    break
            }
    }
}



function clickHandler(){
    let round = playRound(this.className, getComputerChoice())
    //Based on the computerchoice function's return will store score for both
    if (round == "loser") {
        computerScore += 1
    } else if (round == "winner") {
        userScore += 1
    }
    computer.textContent = `${computerScore}`
    user.textContent = `${userScore}`

    if(computerScore > 4 || userScore > 4) {
        buttons.forEach(button => button.removeEventListener('click', clickHandler))
        if (userScore > computerScore) {
           results.textContent = "Congratulations! you beat the machine"
        } else if (userScore < computerScore){
            results.textContent = "This time you lose but let's go for revenge!"
        } 
    }
}



let computerScore = 0
let userScore = 0

// Set the selectors to manipulate the DOM and show scores and results while playing.
const results = document.querySelector(".results")
results.style.color = 'white'
const computer = document.querySelector('.computer')
const user = document.querySelector('.user')
const buttons = document.querySelectorAll('button')

// loop through each button, when a button is clicked, will be called the PlayRound function and then show scores.
buttons.forEach(button => button.addEventListener('click', clickHandler))