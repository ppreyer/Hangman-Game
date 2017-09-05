// creates an array that lists all of the options to guess from as an user
var characters = ['Mario', 'Donkey Kong', 'Link', 'Samus', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi', 'Captain Falcon', 'Ness', 'Jigglypuff']

// This function is run whenever a user presses a key
document.onkeyup = function(event) {

  // Determines which key was pressed
  var userGuess = event.key;

  // Selects a character from the list of characters for the user to guess from
  var computerGuess = characters[Math.floor(Math.random() * characters.length)];

  // Iterate through the computer guess
  for(var i = 0; i < computerGuess; i++) {
    // Create letter variable
    var letter = computerGuess[i];
    // Conditional: Check if the letter the user guessed is in the computerGuess.
    if(letter === userGuess) {
      //
    }
  } 


}