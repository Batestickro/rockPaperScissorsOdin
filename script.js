// Variables and selectors to manipulate the DOM, show scores, results and restart the game.
let computerScore
let userScore
let tryAgainBtn 
const results = document.querySelector(".results")
const computer = document.querySelector('.computer')
const user = document.querySelector('.user')
const buttons = document.querySelectorAll('button')
const content = document.querySelector(".content")


// Make the computer select randomly one choice
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


function roundResult(){
    let round = playRound(this.className, getComputerChoice())
    //Based on the computerchoice function's return will store score for both.
    if (round == "loser") {
        computerScore += 1
    } else if (round == "winner") {
        userScore += 1
    }
    computer.textContent = `${computerScore}`
    user.textContent = `${userScore}`

    //Determine a winner.
    if(computerScore > 4 || userScore > 4) {
        buttons.forEach(button => button.removeEventListener('click', roundResult))
        if (userScore > computerScore) {
           results.textContent = "Congratulations! you beat the machine"
        } else if (userScore < computerScore){
            results.textContent = "This time you lose but let's go for revenge!"
        } 

        //Button to restart the game
        tryAgainBtn = document.createElement("button")
        tryAgainBtn.classList.add("try-again-btn")
        tryAgainBtn.textContent = `Try Again`
        content.appendChild(tryAgainBtn)
        tryAgainBtn.addEventListener("click", startGame)
    }
}


//Start game from scratch
function startGame() {
    computerScore = 0
    userScore = 0
    computer.textContent = `${computerScore}`
    user.textContent = `${userScore}`
    results.textContent = ""

    // loop through each button, when a button is clicked, will be called the PlayRound function and show scores.
    buttons.forEach(button => button.addEventListener('click', roundResult))

    if(!!document.querySelector(".try-again-btn")) {
        content.removeChild(tryAgainBtn)
    }

}


startGame()