function getChoices() {
    // userChoice = window.prompt("Do you choose rock, paper or scissors?").toLowerCase();
    var output = document.getElementById('jsOutput');
    computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);
    compare(userChoice, computerChoice);
    output.innerHTML = result;
}

function compare(choice1, choice2) {
   result = " ";
    
    if (choice1 === choice2) {
        result = "The result is a tie!";
        getChoices();
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            result = "rock wins!";
        } else {
            result = "paper wins!"
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            result = "rock wins!";
        } else {
            result = "scissors wins!"
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            result = "paper wins!";
        } else {
            result = "scissors wins!"
        }
    } else {
        result = "That's not an option....."; // If user inputs something other than an explicit option
    }
}

/*   1. Select Choice
     2. Remove other choices from view
     3. Countdown from 3 to 1
     4. Display Computer's choice
     5. Display Win/Lose screen
     6. Add to Score if won | Reset score to zero if lose
    */

