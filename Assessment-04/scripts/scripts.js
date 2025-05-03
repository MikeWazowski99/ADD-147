const targetNumber = Math.floor(Math.random() * 1001);
let attempts = 0;
let previousDiff = 1000;
const feedback = document.getElementById("feedback");
const guessInput = document.getElementById("guess");
const submit = document.getElementById("submit");
const attemptsDisplay = document.getElementById("attempts");
const history = document.getElementById("history");


const heatLvls = [
    {temp: 10, message: "BURNING HOT!!!", color: "rgb(255, 0, 0)"},
    {temp: 20, message: "Very Hot", color: "rgb(255, 128, 0)"},
    {temp: 50, message: "Hot", color: "rgb(255, 178, 101)"},
    {temp: 70, message: "Warmer", color: "rgb(255, 154, 154)"},
    {temp: 100, message: "Cold", color: "rgb(78, 156, 156)"},
    {temp: 200, message: "Very Cold", color: "rgb(0, 119, 255)"},
    {temp: 300, message: "Freezing Cold", color: "rgb(76, 74, 214)"},
    {temp: 500, message: "ICE AGE COLD", color: "rgb(0, 0, 255)"},
];

submit.addEventListener('click', function() {
    const guessValue = guessInput.value.trim();
    
    const guessNum = parseInt(guessValue);

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if(guessNum == targetNumber) {
        feedback.textContent = `Correct!!!! The number was ${targetNumber}`;
        feedback.style.color = "rgb(0, 255, 0)";
        addToHistory(guessNum, "Correct!!!!");
        return;
    }

    const currentDiff = Math.abs(targetNumber - guessNum);
    let heatMessage = "";
    let heatColor = "";

    for (const level of heatLvls) {
        if (currentDiff <= level.temp) { // Fixed property name
            heatMessage = level.message;
            heatColor = level.color;
            break;
        }
    }

    let direction = '';
    if (currentDiff < previousDiff) {
        direction = " (WARMER)";
    } else if (currentDiff > previousDiff) {
        direction = " (COLDER)";
    }

    feedback.textContent = `${heatMessage}${direction}`;
    feedback.style.color = heatColor;

    addToHistory(guessNum, `${heatMessage}${direction}`);

    previousDiff = currentDiff;

    guessInput.value = "";
    guessInput.focus();
});

function addToHistory(guess, result) {
    const historyItem = document.createElement('div');
    historyItem.innerHTML = `${guess}: ${result}`;
    history.prepend(historyItem);
}