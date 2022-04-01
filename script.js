// * As a user, I want to start the game by clicking on a button.
// add event listener to change to game page

// * As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.
// create input boxes for missing letters in the generated word using .length function

// * As a user, I want the game to be timed.
// setInveral() refer to chapters 9 - 10
// this interval should end game when it hits 0

// * As a user, I want to win the game when I have guessed all the letters in the word.
// store users input to localStorage() and check if correct
// render an incorrect when user guesses wrong

// * As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
// ties in with setInterval() above

// * As a user, I want to see my total wins and losses on the screen.
// make win/loss conditions
// store win/loss to localStorage()

// * When a user presses a letter key, the user's guess should be captured as a key event.
// record the keys that user inputed
// store the incorrect/correct keys separatly
// incorrect keys will be placed in wrongGuess()
// correct keys will automatically be placed in generated word

// * When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear.
// ties in with step right above

// * When a user wins or loses a game, a message should appear and the timer should stop.
// endGame() if time strikes 0, Game Over, and store loss to localStorage() and increment loss
// endGame() if user wins game, You Win!, and store win to localStorage() and increment win

// * When a user clicks the start button, the timer should reset.
// when game is over, redirect user to start page, keeping score

// * When a user refreshes or returns to the brower page, the win and loss counts should persist.
// ties in with step above, keep score unless user decides to start over












