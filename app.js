const compChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

//The forEach() method calls a function for each element in an array.
possibleChoices.forEach(button => button.addEventListener('click',(e) =>{
    userChoice  = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    userChoiceDisplay.style.color = "brown";

    generateComputerChoice();

    getResult();

}));

function generateComputerChoice(){
    var randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    else if(randomNumber === 2){
        computerChoice = 'paper';
    }
    else if(randomNumber === 3){
        computerChoice = 'scissors';
    }
    compChoiceDisplay.innerHTML = computerChoice;
    compChoiceDisplay.style.color = "brown";
} 

function getResult(){
    if(computerChoice === userChoice){
        result = "It's a draw!";
    }
    else if(computerChoice === "rock" && userChoice === "paper"){
        result = "You Win!";
    }
    else if(computerChoice === "rock" && userChoice === "scissors"){
        result = "You Lost!";
    }
    else if(computerChoice === "paper" && userChoice === "rock"){
        result = "You Lost!";
    }
    else if(computerChoice === "paper" && userChoice === "scissors"){
        result = "You Win!";
    }
    else if(computerChoice === "scissors" && userChoice === "paper"){
        result = "You Lost!";
    }
    else if(computerChoice === "scissors" && userChoice === "rock"){
        result = "You Win!";
    }

    resultDisplay.innerHTML = result;

    if(resultDisplay.innerHTML=="You Win!"){
          resultDisplay.style.color = "green";
    }
    else if(resultDisplay.innerHTML=="You Lost!"){
        resultDisplay.style.color = "red";
    }
    else{
        resultDisplay.style.color = "blue";
    }
}