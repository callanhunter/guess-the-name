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
var userHistory = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var wordBank = ['cool','beans','coding','fun','hurray','happy','another','super']

var gameBox = document.getElementById('gameBox');
var startButton = document.getElementById('start');
var randomWord;
var randomWordArray = [];
var userKey;
var userHistory = [];
var correctInput;
var correctInputArray = [];

document.getElementById("start").addEventListener("click", startGame);

function startGame()  {
   // clearStart()//function to delete start button
   // resetgame()//function to create start button
   // playagain()//function to be outside of win/loss game function created @startGame...use to cheat loss (for test)
    wordGen();
    createTable();
    validateInput();//switched from takeInput
    //pickWord from word Bank
    function wordGen() {
        randomWord = wordBank[Math.floor(Math.random()*wordBank.length)] ;
        console.log(randomWord)
    }
    //adds table for game play
    function createTable() {
        randomWordArray = randomWord.split('');
        for(var i = 0;i < randomWord.length;i++) {
            var newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'letters')//sets class
            newDiv.setAttribute('id','letter:'+(i+1))//sets id to letter number
            newDiv.setAttribute('data-state', 'hidden');//sets to hidden
            newDiv.innerText = '_';
        
            document.body.appendChild(newDiv);
        }
        
    }
    //tracks button clicks and puts them into arrays; userHistory & correctInputArray. 
    //if userInput guesses all letters win is given to console
    function validateInput() {
        document.onkeyup = function(input) {
        userKey = input.key.toLowerCase();  
            if(alphabet.includes(userKey)){
                document.getElementById('userInput').textContent = userKey;
                if(userHistory.includes(userKey)) {
                    
                }
                else{
                userHistory.push(userKey);
                document.getElementById('userHistory').textContent = userHistory;
                }
            }
            else {
                console.log('something')
            }
           if (randomWordArray.includes(userKey)){   
               correctInput = userKey;
               correctInputArray += correctInput;
               for(var i = 0; i<randomWordArray.length;i++) {
                   if(correctInput===randomWordArray[i]){
                    document.getElementById('letter:'+(i+1)).textContent = randomWordArray[i]  
                    document.getElementById('letter:'+(i+1))      
               }
               }   
               if (correctInputArray.length===randomWordArray.length) {
                console.log('you win');
                }
            }
      
        }
    }

// scoreboard

var winCount = 0;

var winAddScore = document.querySelector("#win-add-score");
var winSubtractScore = document.querySelector("#win-subtract-score");
var wins = document.querySelector("#win-count");

function winDisplayCount() {
    wins.textContent = winCount;
}
winAddScore.addEventListener("click", function(e) {
    console.log(e);
    winCount++;
    winDisplayCount();
});

winSubtractScore.addEventListener("click", function() {
    if (winCount > 0) {
        winCount--;
        winDisplayCount();
    }
});


var lossCount = 0;

var lossAddScore = document.querySelector("#loss-add-score");
var lossSubtractScore = document.querySelector("#loss-subtract-score");
var losses = document.querySelector("#loss-count");


function lossDisplayCount() {
    losses.textContent = lossCount;
}
lossAddScore.addEventListener("click", function(l) {
    console.log(l);
    lossCount++;
    lossDisplayCount();
});

lossSubtractScore.addEventListener("click", function() {
    if (lossCount > 0) {
        lossCount--;
        lossDisplayCount();
    }
});


    //     function takeInput() {
//     document.onkeyup = function(input) {
//     var userKey = input.key.toLowerCase();

//         if(alphabet.includes(userKey)){
//             document.getElementById('userInput').textContent = userKey;
//             if(userHistory.includes(userKey)) {
//                 return
//             }
//             else{
//             userHistory.push(userKey);
//             document.getElementById('userHistory').textContent = userHistory;
//             }
//         }
//         else {
//             console.log('something')
//         }
//     }
// }
}











