let options = ["rock","paper","scissors"];
let contP = 0;
let contCpu = 0;

let getComChoice = function(){
    return options[Math.floor(Math.random() * options.length)]; 
}

let getPlayerChoice = function(){
    pChoice = prompt("Please select from: 'Rock', 'Paper', 'Scissors'",'Rock')
    pChoice = pChoice.toLowerCase()
    if (options.includes(pChoice)){
        return pChoice;
    }else{
        alert("Wrong input, try again!")
        getPlayerChoice();
    }
 
}

let playGame = function(){

    do {
        let comChoice = getComChoice();
        let playerChoice = getPlayerChoice();
        console.log(`You selected: ${playerChoice}, Computer selected ${comChoice}`)
        playRound(comChoice,playerChoice);
    } while (contP <5 && contCpu <5);


}

let playRound = function(comChoice,playerChoice){
       
        if (comChoice == playerChoice){
            console.log("You Tied!")
        }

        else if (playerChoice == "rock" && comChoice == "scissors" ||
                 playerChoice == "scissors" && comChoice == "paper"||
                 playerChoice == "paper" && comChoice == "rock"){
                    console.log("You Won!")
                    contP++
                 }
        else{
            console.log("You Lost!")
            contCpu++
        }    
    
    console.log(`You'r score: ${contP}, Computer's Score:${contCpu}`)

    if (contP ==5){
        alert("You Won The Game!")
        console.log("You Won The Game!")
    }
    else if (contCpu == 5){
        alert("You've Lost The Game!")
        console.log("You Lost The Game!")
    }

}
    playGame();
