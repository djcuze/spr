score = 0;

function getChoices() {
    var output = document.getElementById('jsOutput');
    var outputContainer = document.getElementById('alert');
    buttons = document.getElementsByTagName('button');
    var hiScore = document.getElementById('hiScore');

    setTimeout(function () {
        output.innerHTML = "You picked..." + userChoice;
    }, 100);

    computerChoice = Math.random();
    console.log("Random number is:" + " " + computerChoice);
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    setTimeout(function () {
        output.innerHTML = "A.I. picked..." + computerChoice;
    }, 1800);

    // ADD DELAY
    outputContainer.className += 'hide';
    setTimeout(function () {
        compare(userChoice, computerChoice);
    }, 1800);
    setTimeout(function() {
    output.innerHTML = result;
        hiScore.innerHTML = score;
    }, 3600);
    // Prevents buttons being clicked more than once
    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

}

function compare(choice1, choice2) {
    result = " ";
    hideElements();
    if (choice1 === choice2) {
        console.log("The result is a tie!"); // Handling a Draw
        resetElements();                    // Calls the resetElements Function
        result = "The result is a tie!";
    } else if (choice1 === "rock") {         // User selects Rock
        if (choice2 === "scissors") {
            result = "rock wins!";
            score++;
        } else {
            result = "paper wins!"
        }
    } else if (choice1 === "scissors") {    // User selects Scissors
        if (choice2 === "rock") {
            result = "rock wins!";
        } else {
            result = "scissors wins!";
            score++;
        }
    } else if (choice1 === "paper") {       // User selects Paper
        if (choice2 === "rock") {
            result = "paper wins!";
            score++;
        } else {
            result = "scissors wins!"
        }
    } else {
        result = "That's not an option....."; // If user inputs something other than an explicit option
    }
}

function hideElements() {   // This hides unselected elements from view.
    scissors = document.getElementById('scissors');
    paper = document.getElementById('paper');
    rock = document.getElementById('rock');

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

function resetElements() {
    var alert = document.getElementById('alert');
    scissors.className = 'option';
    rock.className = 'option';
    paper.className = 'option';
    alert.className = 'hide';
    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

