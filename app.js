function getChoices() {
    var output = document.getElementById('jsOutput');
    var buttons = document.getElementsByTagName('button');

    computerChoice = Math.random();
    console.log("Random number is:" + " " + computerChoice);
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    compare(userChoice, computerChoice);

    output.innerHTML = result;

    // Prevents buttons being clicked more than once
    for ( i = 0; i < buttons.length; i++ ) {
        buttons[i].disabled = true;
    }
}

function compare(choice1, choice2) {
    result = " ";
    hideElements();
    if (choice1 === choice2) {
        console.log("The result is a tie!");
        getChoices();
    } else if (choice1 === "rock") { // User selects Rock

        if (choice2 === "scissors") {
            result = "rock wins!";
        } else {
            result = "paper wins!"
        }
    } else if (choice1 === "scissors") {    // User selects Scissors
        if (choice2 === "rock") {
            result = "rock wins!";
        } else {
            result = "scissors wins!"
        }
    } else if (choice1 === "paper") {       // User selects Paper
        if (choice2 === "rock") {
            result = "paper wins!";
        } else {
            result = "scissors wins!"
        }
    } else {
        result = "That's not an option....."; // If user inputs something other than an explicit option
    }
}

/*              |1. Select Choice
                |2. Remove other choices from view

 INSERT A DELAY -- !

 3. Countdown from 3 to 1
 4. Display Computer's choice
 5. Display Win/Lose screen
 6. Handle a Draw
 6. Add to Score if won | Reset score to zero if lose
 */

function hideElements() {   // This hides unselected elements from view.
    var scissors = document.getElementById('scissors');
    var paper = document.getElementById('paper');
    var rock = document.getElementById('rock');


    var man =  document.getElementById('man');
    var machine =  document.getElementById('machine');

    if (userChoice === "scissors") {
        scissors.className += ' player';
        if (computerChoice === "paper") {
            rock.className += ' hide';
            paper.className += ' computer';
        } else {
            paper.className += ' hide';
            rock.className += ' computer';
        }
    } else if (userChoice === "paper") {
        paper.className += ' player';
        if (computerChoice === "rock") {
            scissors.className += ' hide';
            rock.className += ' computer';
        } else {
            rock.className += ' hide';
            scissors.className += ' computer';
        }
    } else if (userChoice === "rock") {
        rock.className += ' player';
        if (computerChoice === "scissors") {
            paper.className += ' hide';
            scissors.className += ' computer';
        } else {
            scissors.className += ' hide';
            paper.className += ' computer';
        }
    }
}