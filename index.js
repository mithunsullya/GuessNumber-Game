var randomNumber = getrandomNumber();
let historyResult = [];
document.getElementById('check').addEventListener('click', guessNumber);
document.getElementById('reset').addEventListener('click', initGame);

function guessNumber() {
    let guess = document.getElementById('guess-number').value;
    displayResult(guess);
}

function getrandomNumber() {
    let random = Math.random() * 100;
    return Math.floor(random);
}

function displayResult(guess) {
    if( guess == randomNumber) {
        showWon();
    } 
    else if(guess < randomNumber) {
        showLower();
    }
    else {
        showHigher();
    }
}

function initGame() {
    randomNumber = getrandomNumber();
    document.getElementById('result').innerHTML = '';
}

function showWon() {
    let result = '<h1>You won the game</h1>';
    document.getElementById('result').innerHTML = result;
}

function showLower() {
    let result = '<h1>Your guess is too low!!</h1>';
    document.getElementById('result').innerHTML = result;
}

function showHigher() {
    let result = '<h1>Your guess is high</h1>';
    document.getElementById('result').innerHTML = result;
}
