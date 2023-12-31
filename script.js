let options = ["rock","paper","scissors"];
let contP = 0;
let contCpu = 0;

let getComChoice = function(){
    return options[Math.floor(Math.random() * options.length)]; 
}

let resetGame = function(){
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    contCpu=0;
    contP=0;
    result.textContent="Make a choice and play!"
    playerIcon.textContent="❓"
    computerIcon.textContent="❓"
    playerScore.textContent= `Player: ${contP}`
    computerScore.textContent=`Computer: ${contCpu}`
}

let rockBtn = document.getElementById("rockBtn")
let paperBtn = document.getElementById("paperBtn")
let scissorsBtn = document.getElementById("scissorsBtn")
let resetBtn = document.getElementById("resetBtn")
let result = document.getElementById("headtext")
let playerIcon = document.getElementById("playerIcon")
let computerIcon = document.getElementById("computerIcon")
let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore")

rockBtn.addEventListener("click",()=> startGame("rock"));
paperBtn.addEventListener("click",()=> startGame("paper"));
scissorsBtn.addEventListener("click",()=> startGame("scissors"));
resetBtn.addEventListener("click",()=> resetGame())

let startGame = function(playerChoice){
    let comChoice = getComChoice();
    updateIcons(comChoice,playerChoice)
    playRound(comChoice,playerChoice);
}

let updateIcons = function(comChoice,playerChoice){  
    switch(playerChoice){
        case "rock":
            playerIcon.textContent="✊"
            break
        case "paper":
            playerIcon.textContent="✋"
            break
        case "scissors":
            playerIcon.textContent="✌️"
            break
    }

    switch(comChoice){
        case "rock":
            computerIcon.textContent="✊"
            break
        case "paper":
            computerIcon.textContent="✋"
            break
        case "scissors":
            computerIcon.textContent="✌️"
            break
    }
}

let playRound = function(comChoice,playerChoice){
       
    if (comChoice == playerChoice){
        console.log("You Tied!")
        result.textContent="You Tied!"
    }

    else if (playerChoice == "rock" && comChoice == "scissors" ||
             playerChoice == "scissors" && comChoice == "paper"||
             playerChoice == "paper" && comChoice == "rock"){
                console.log("You Won!")
                result.textContent="You Won!"
                contP++
             }
    else{
        console.log("You Lost!")
        result.textContent="You Lost!"
        contCpu++
    }    

    playerScore.textContent= `Player: ${contP}`
    computerScore.textContent=`Computer: ${contCpu}`

if (contP ==5){
    alert("You Won The Game!")
    console.log("You Won The Game!")
    document.querySelectorAll(".gameButtons").forEach(e => e.setAttribute("disabled",true))
}
else if (contCpu == 5){
    alert("You've Lost The Game!")
    console.log("You Lost The Game!")
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}
}