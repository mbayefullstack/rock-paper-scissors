//Get the computer choice.

function getComputerChoice() {
    let choice = "";
    const choiceComputer = Math.floor(Math.random() * 3) + 1;

    if(choiceComputer === 1) {
        choice = "rock"
    } else if(choiceComputer === 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}


// Get the user choice.

function getHumanChoice() {
    let promptHuman = prompt("What's your choice?");
    promptHuman = promptHuman.toLocaleLowerCase()
    if(promptHuman === "") {
        alert("Can you write a good choice?")
        promptHuman = prompt("What's your choice?");
    } else if(promptHuman == "Rock".toLowerCase()) {
        promptHuman = "Rock";
    } else if(promptHuman == "Paper".toLowerCase()) {
        promptHuman = "Paper";
    } else if (promptHuman == "Scissors".toLowerCase()) {
        promptHuman = "Scissors";
    } else {
        alert("Can you write a good choice?");
        promptHuman = prompt("What's your choice?");
    }
    return promptHuman;

}
console.log(getHumanChoice())
