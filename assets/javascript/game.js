// creates an array that lists all of the options to guess from as an user
var characters = ['Mario', 'Donkey Kong', 'Link', 'Samus', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi', 'Captain Falcon', 'Ness', 'Jigglypuff'];

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
el.innerHTML = guessCharacter.join(' ');
}

// Create a function to have the user input letter guesses
document.onkeyup = function(event) {

// Determines which letter was pressed by the user
var userGuess = event.key;
 
// Iterate through the guessCharacter string
  for(var j = 0; j < guessCharacter.length; j++) {
    // Iterate through the randomCharacter string chosen
    for(var k = 0; k < randomCharacter.length; k++) {
      // Create letter variable
      var letter = randomCharacter[k];
      // Conditional - Check if userGuess === letter
      if(userGuess === letter) {
        // Set guessCharacter = userGuess
        guessCharacter[j] = userGuess;
      }
    }
  }
    
    // Conditional - check if userGuess !== letter
    // if(userGuess !== letter) {
    //   // Push the wrong guess into the wrong guess array
    //   wrongGuesses.push(userGuess);
    //   // Remove one from guessesLeft
    //   guessesLeft--;
    //   // Grab the HTML element
    //   var ele = document.getElementById('wrongGuesses');
    //   // Change HTML to display wrong guessed letter
    //   ele.innerHTML = wrongGuesses.join(' ');
    // }
    }