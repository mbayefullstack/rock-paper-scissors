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

alert(getComputerChoice())