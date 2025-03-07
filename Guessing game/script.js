let randomNumber = Math.floor(Math.random() * 100)+ 1;
let attempts = 10;
function checkGuess() { 
    const inputElement = document.getElementById('guess');
    const feedbackElement = document.getElementById('feedback');
    const attemptsElement = document.getElementById('attempts-left');
    const replayButton = document.getElementById('replay-button');
    let guess = parseInt (inputElement.value);
    attempts--;

    if (randomNumber === guess) {
        feedbackElement.innerHTML = 'Congratulations!';
        feedbackElement.style.color = 'green';
        attempts = 0;
        inputElement.disabled = true;
        replayButton.style.display = "inline";
    } else if (guess < randomNumber) {
        feedbackElement.innerHTML = 'Not quite! Too low!';
        feedbackElement.style.color = 'red';
    } else {
        feedbackElement.innerHTML = "Not quite! Too high!"; 
        feedbackElement.style.color ="red";
    }
    if (attempts <=0 && randomNumber !== guess) {
        feedbackElement.innerHTML += " No more attempts left";
        feedbackElement.style.color = "red";
        inputElement.disabled = true;
        replayButton.style.display = "inline";
        }
        attemptsElement.innerHTML = `Attempts left: ${attempts}`;
    }

    function replayGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 10;

        const inputElement = document.getElementById('guess');
        const feedbackElement = document.getElementById('feedback');
        const attemptsElement = document.getElementById('attempts-left');
        const replayButton = document.getElementById('replay-button');

        inputElement.disabled = false;
        inputElement.value = '';
        feedbackElement.innerHTML = '';
        attemptsElement.innerHTML = `Attempts left: 10`;
        replayButton.style.display = 'none';
    }

