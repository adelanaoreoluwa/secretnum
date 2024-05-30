function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 101);
    let attempts = 3;

    while (attempts > 0) {
        const guess = prompt("Guess the number (between 0 and 100):");

        if (guess === secretNumber) {
            alert( 'Congratulation! You Won' );
            return;
        } else if (guess > secretNumber) {
            alert("Higher! You have " + (attempts - 1) + " guesses left.");
        } else {
            alert("Lower! You have " + (attempts - 1) + " guesses left.");
        }

        attempts--;
    }
    alert("Out of attempts! The number was " + secretNumber + ". Try again");
}
guessNumber();
