// declare and initialize array
let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT", "SWIFT", "KOTLIN", "MYSQL", "C++", "JAVA", "RUBY"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let guessedLetters = [];
let wrongGuesses = 0; 
let hangmanImage = 1; 
// game setup works fine --steffen

function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
    document.getElementById("guessed").innerHTML = ""; // Clear guessed letters display
    updateImage(); // Set initial image
}

function updateImage() {
    let imageName = "0" + hangmanImage + ".png";
    document.getElementById("hangman").src = "images/" + imageName; 
}

// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    
    // Check if letter was already guessed
    if (guessedLetters.includes(userLetter)) {
        alert("You already guessed that letter!");
        return;
    }
    
    // Add to guessed letters array
    guessedLetters.push(userLetter);
    document.getElementById("guessed").innerHTML = guessedLetters.join(", ");

    found = false;

    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        let found = false;
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }
        output = output + display[c] + ' ';
    }

    if (found == false) {
        attemptsLeft--;
        wrongGuesses++;
        hangmanImage = wrongGuesses + 1;
        if (hangmanImage > 7) hangmanImage = 7;
        updateImage();
    }
    
    document.getElementById("word").innerHTML = output;
    output = '';

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
        hangmanImage = 7; // Show final hangman image
        updateImage();
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
});


//scirpt connected fine somereason the button and the script are not registering.