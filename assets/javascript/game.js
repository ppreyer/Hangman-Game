// creates an array that lists all of the options to guess from as an user
var characters = ['mario', 'donkey kong', 'link', 'samus', 'yoshi', 'kirby', 'fox', 'pikachu', 'luigi', 'captain falcon', 'ness', 'jigglypuff'];

// Selects a character from the list of characters for the user to guess from
var randomCharacter = characters[Math.floor(Math.random() * characters.length)];

// Creates an empty array to store random character to display in HTML
var guessCharacter = [];

// Create a variable to store wrong guesses
var wrongGuesses = [];

// Create a variable to store the number of guesses left
var guessesLeft = 15;

// Create a function to run when the page is loaded
window.onload = function() {
// Iterate through the list of random characters
  for(var i = 0; i < randomCharacter.length; i++) {
    // Turn guessCharacter array into the length of the randomCharacter chosen displaying as '-'
    guessCharacter[i] = '-';
  }

// Grab the HTML element
var el = document.getElementById('currentGuess');

// Change the HTML element to guessCharacter and turn it into a string
el.innerHTML = guessCharacter.join('');

// Grab HTML Element guessesLeft
var numberElement = document.getElementById('guessesLeft');
// Display current number of guesses left
numberElement.innerHTML = guessesLeft;
}

// Create a function to have the user input letter guesses
document.onkeyup = function(event) {

// Determines which letter was pressed by the user
var userGuess = event.key;
 
// Iterate through the randomCharacter string
for(var j = 0; j < randomCharacter.length; j++) {
  // Create letter variable
  var letter = randomCharacter[j];
  // Conditional - Check if userGuess === letter
  if(userGuess === letter) {
    // Set guessCharacter index = userGuess
    guessCharacter[j] = userGuess;
    }
  }
  // Conditional - check if userGuess is not in the randomCharacter array
  if(randomCharacter.indexOf(userGuess) === -1) {
    // Push the wrong guess into the wrong guess array
    wrongGuesses.push(userGuess);
    // Remove one from guessesLeft
    guessesLeft--;
    // Grab the HTML element
    var wrongElement = document.getElementById('wrongGuesses');
    // Change HTML to display wrong guessed letter
    wrongElement.innerHTML = wrongGuesses.join(', ');
    // Grab HTML Element guessesLeft
    numberElement = document.getElementById('guessesLeft');
    // Display current number of guesses left
    numberElement.innerHTML = guessesLeft;
  }
  // Conditional - check if there are no guesses remaining
  if(guessesLeft === 0) {
    // Alert the user that they lost
    alert('Time for you to study up on characters from the best game ever!')
  }
  // Conditional - check if each element value of guessCharacter === randomCharacter element values
  if (guessCharacter.every((v,i) => v === randomCharacter[i])) {
    alert('You are a Super Smash Bros master!')
  }  
    // Grab the HTML element
    var correctElement = document.getElementById('currentGuess');
    // Change the HTML element to display the word with the new letter
    correctElement.innerHTML = guessCharacter.join('');

}
    