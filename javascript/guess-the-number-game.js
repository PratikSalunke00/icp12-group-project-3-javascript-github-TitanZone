 
        // Game variables
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let guessesLeft = 10;
        let previousGuesses = [];
        let gameOver = false;
        
        // DOM elements
        const guessInput = document.getElementById('guess-input');
        const submitBtn = document.getElementById('submit-btn');
        const resetBtn = document.getElementById('reset-btn');
        const result = document.getElementById('result');
        const guessesLeftElement = document.getElementById('guesses-left');
        const previousGuessesElement = document.getElementById('previous-guesses');
        
        // Focus on input field
        guessInput.focus();
        
        // Function to check the guess
        function checkGuess() {
            if (gameOver) return;
            
            const userGuess = Number(guessInput.value);
            
            // Validate input
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                result.textContent = 'Please enter a valid number between 1 and 100.';
                result.className = 'result';
                guessInput.value = '';
                guessInput.focus();
                return;
            }
            
            // Add to previous guesses
            previousGuesses.push(userGuess);
            previousGuessesElement.textContent = previousGuesses.join(', ');
            
            // Check if guess is correct
            if (userGuess === randomNumber) {
                result.innerHTML = '<span class="congrats">Congratulations! You guessed it!</span>';
                gameOver = true;
                submitBtn.disabled = true;
            } 
            // Check if guess is too high or too low
            else if (userGuess > randomNumber) {
                result.innerHTML = `<span class="low-high">Too high! Try a lower number.</span>`;
                guessesLeft--;
            } 
            else {
                result.innerHTML = `<span class="low-high">Too low! Try a higher number.</span>`;
                guessesLeft--;
            }
            
            // Update guesses left
            guessesLeftElement.textContent = guessesLeft;
            
            // Check if game over
            if (guessesLeft === 0 && userGuess !== randomNumber) {
                result.innerHTML = `<span class="game-over">Game Over! The number was ${randomNumber}.</span>`;
                gameOver = true;
                submitBtn.disabled = true;
            }
            
            // Clear input and focus
            guessInput.value = '';
            guessInput.focus();
        }
        
        // Function to reset the game
        function resetGame() {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            guessesLeft = 10;
            previousGuesses = [];
            gameOver = false;
            
            guessesLeftElement.textContent = guessesLeft;
            previousGuessesElement.textContent = '';
            result.textContent = 'Enter your first guess!';
            result.className = 'result';
            guessInput.value = '';
            submitBtn.disabled = false;
            guessInput.focus();
        }
        
        // Event listeners
        submitBtn.addEventListener('click', checkGuess);
        
        resetBtn.addEventListener('click', resetGame);
        
        guessInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                checkGuess();
            }
        });
    