// Create an object to store global values
var gameObject = {
  guessesLeft: 10,
  characters: ['mario', 'donkey kong', 'link', 'samus', 'yoshi', 'kirby', 'fox', 'pikachu', 'luigi', 'captain falcon', 'ness', 'jigglypuff'],
  guessCharacter: [],
  randomCharacter: ''
};

// Create a function to select a character at random from the array in gameObject
function selectCharacter() {
  // Generate a random number based on the length of the characters array in gameObject
  var randomNumber = Math.floor(Math.random() * gameObject.characters.length);
  // Set the randomCharacter key value equal to the index number generated above
  gameObject.randomCharacter = gameObject.characters[randomNumber];
}

// Create a function to format the selected character into '-'
function formatCharacter() {
  // Iterate through  
  for(var i = 0; i < gameObject.randomCharacter.length; i++) {
    // Turn guessCharacter array into the length of the randomCharacter chosen displaying as '-'
    gameObject.guessCharacter[i] = '-';
  }
  document.getElementById('currentGuess').innerHTML = gameObject.guessCharacter.join('');
}


// function formatCharacter() {
//     // var randomNumber = Math.floor(Math.random() * gameObject.characters.length);
//     // var randomCharacter = gameObject.characters[randomNumber];
//     // Iterate through the list of random characters
//     for(var i = 0; i < randomCharacter.length; i++) {
//       // Turn guessCharacter array into the length of the randomCharacter chosen displaying as '-'
//       gameObject.guessCharacter[i] = '-';
//     }
//     document.getElementById('currentGuess').innerHTML = gameObject.guessCharacter.join('');
//   }




// function formatCharacter() {

// selectCharacter();
// // Iterate through the list of random characters
//   for(var i = 0; i < randomCharacter.length; i++) {
//     // Turn guessCharacter array into the length of the randomCharacter chosen displaying as '-'
//     guessCharacter[i] = '-';
//   }

// // Grab the HTML element
// var formatElement = document.getElementById('currentGuess');

// // Change the HTML element to guessCharacter and turn it into a string
// formatElement.innerHTML = guessCharacter.join('');
// }

// function displayGuessesLeft() {
// // Grab HTML Element guessesLeft
// var guessesLeftElement = document.getElementById('guessesLeft');
// // Display current number of guesses left
// guessesLeftElement.innerHTML = gameObject.guessesLeft;
// }

// // Create a function to run when the page is loaded
// window.onload = function() {
//   formatCharacter();
//   displayGuessesLeft();
// } 
