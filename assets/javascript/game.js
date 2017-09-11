// Create an object to store global values
var gameObject = {
  guessesLeft: 10,
  characters: ['mario', 'donkey kong', 'link', 'samus', 'yoshi', 'kirby', 'fox', 'pikachu', 'luigi', 'captain falcon', 'ness', 'jiggly puff'],
  guessCharacter: [],
  randomCharacter: '',
  userGuess: '',
  wrongGuesses: [],
  userStatus: '',
  wins: 0,
  difficultyLevel: 'Easy'
};

function displayGameElements() {
  document.getElementById('guessesLeft').innerHTML = gameObject.guessesLeft;
  document.getElementById('wins').innerHTML = gameObject.wins;
  document.getElementById('wrongGuesses').innerHTML = gameObject.wrongGuesses.join('');
}

// Create a function to select a character at random from the array in gameObject
function selectCharacter() {
  // Generate a random number based on the length of the characters array in gameObject
  var randomNumber = Math.floor(Math.random() * gameObject.characters.length);
  // Set the randomCharacter key value equal to the index number generated above
  gameObject.randomCharacter = gameObject.characters[randomNumber];
}

// Create a function to format the selected character into '-'
function formatCharacter() {
  // Iterate through the random character chosen in the gameObject
  for(var i = 0; i < gameObject.randomCharacter.length; i++) {
    // Turn guessCharacter array into the length of the randomCharacter chosen displaying as '-'
    gameObject.guessCharacter[i] = '-';
  }
  // Grab the HTML element and turn the array of dashes into a string with no spaces
  document.getElementById('currentGuess').innerHTML = gameObject.guessCharacter.join('');
}

window.onload = function() {
  selectCharacter();
  formatCharacter();
  displayGameElements();
}

// Create a function to store the user's guess in the gameObject
var letterGuess = document.onkeyup = function(event) {
  gameObject.userGuess = event.key.toLowerCase();
  checkGuess();
  checkGameStatus();
  displayCharacterImage('mario', 'mushroom kingdom', 'assets/images/mario.png', 'assets/images/mushroom_kingdom.jpg', 'assets/sounds/Mario 1.wav');
  displayCharacterImage('captain falcon', 'planet zebes', 'assets/images/captain_falcon.png', 'assets/images/planet_zebes.png', 'assets/sounds/C Falcon 1.wav');
  displayCharacterImage('donkey kong', 'congo jungle', 'assets/images/donkey_kong.png', 'assets/imagescd/congo_jungle.png', 'assets/sounds/Donkey Kong 1.wav');
  displayCharacterImage('fox', 'sector z', 'assets/images/fox.png', 'assets/images/sectorz.png', 'assets/sounds/Fox 1.wav');
  displayCharacterImage('jiggly puff', 'saffron city', 'assets/images/jiggly_puff.png', 'assets/images/saffron_city.png', 'assets/sounds/Jigglypuff (USA) 1.wav');
  displayCharacterImage('kirby', 'dream land', 'assets/images/kirby.png', 'assets/images/dream_land.png', 'assets/sounds/Kirby 1.wav');
  displayCharacterImage('link', 'hyrule castle', 'assets/images/link.png', 'assets/images/hyrule_castle.png', 'assets/sounds/Link 1.wav');
  displayCharacterImage('luigi', 'peach castle', 'assets/images/luigi.png', 'assets/images/peach_castle.jpg', 'assets/sounds/Luigi 1.wav');
  displayCharacterImage('ness', 'saffron city', 'assets/images/ness.png', 'assets/images/saffron_city.png', 'assets/sounds/Ness 1.wav');
  displayCharacterImage('pikachu', 'saffron city', 'assets/images/pikachu.png', 'assets/images/saffron_city.png', 'assets/sounds/Pikachu 1.wav');
  displayCharacterImage('samus', 'planet zebes', 'assets/images/samus.png', 'assets/images/planet_zebes.png', 'assets/sounds/Announcer - Samus.wav');
  displayCharacterImage('yoshi', 'Yoshi Island', 'assets/images/yoshi.png', 'assets/images/yoshi\'s_island.png', 'assets/sounds/Yoshi 1.wav');
  userLoss('master hand', 'assets/images/master_hand.jpg', 'assets/images/master_hand.jpg', 'assets/sounds/Master Hand - Intro.wav');
  resetGame();
}


// Create a function to check if letter guessed is in the smash bro character
function checkGuess() {
  if(gameObject.wrongGuesses.indexOf(gameObject.userGuess) > -1) { 
    return;
  // Conditional - check if the letter guessed is in the selected character (string)
  } else if(gameObject.randomCharacter.indexOf(gameObject.userGuess) === -1) {
    // If not then push the user's guess into the wrong guess array
    gameObject.wrongGuesses.push(gameObject.userGuess);
    // Subtract one from guesses left for the user
    gameObject.guessesLeft--;
    // Display the wrong guess array as a string separated by ','
    document.getElementById('wrongGuesses').innerHTML = gameObject.wrongGuesses.join(', ').toUpperCase();
    // Display the remaining guesses left to the user
    document.getElementById('guessesLeft').innerHTML = gameObject.guessesLeft;
  } else {
      // Iterate through the random character string chosen stored in gameObject
      for(var j = 0; j < gameObject.randomCharacter.length; j++) {
        // Store each index as a letter
        var letter = gameObject.randomCharacter[j];
        // Conditional - check if user guess equals the letter index
        if(gameObject.userGuess === letter) {
          // If yes then set the index in the array filled with dashes equal to the user's guess
          gameObject.guessCharacter[j] = gameObject.userGuess;  
        }
      }
      // Outside of the loop display the correct guessed letter and turn the array into a string without any separation
      document.getElementById('currentGuess').innerHTML = gameObject.guessCharacter.join('').toUpperCase();
    }
}

// Create a function to check if the user has won or lost
function checkGameStatus() {
  // Conditional - check if user has any remaining guesses
  if(gameObject.guessesLeft <= 0) {
    // If not then change the user status to lost
    gameObject.userStatus = 'lost';
    // Else check if the character guess (convert to string) matches the random character selected (string)
  } else if(gameObject.guessCharacter.join('') === gameObject.randomCharacter) {
    // If yes then add one to the user's win count
    gameObject.wins++;
    // Change the user's status to winner
    gameObject.userStatus = 'winner';
  }
}

function displayCharacterImage(character, map, charImage, mapImage, sound) {
  if((gameObject.userStatus === 'winner') && (gameObject.randomCharacter === character)) {
  character = character.toUpperCase();
  map = map.toUpperCase();
  document.getElementById('title').innerHTML = character + ' - ' + map;
  document.getElementById('character').src = charImage;
  document.getElementById('map').src = mapImage;
  document.getElementById('sound').src = sound;
  }
}



function userLoss(character, charImage, mapImage, sound) {
  if(gameObject.userStatus === 'lost') {
  character = character.toUpperCase();
  document.getElementById('title').innerHTML = character + ' - WINS';
  document.getElementById('character').src = charImage;
  document.getElementById('map').src = mapImage;
  document.getElementById('sound').src = sound;
  }
}

// Create a function to reset the appropriate values stored in the gameObject's keys
function resetGame() {
    if(gameObject.userStatus === 'winner' || gameObject.userStatus === 'lost') {
    checkDifficulty();
    displayLevel();
    gameObject.guessCharacter = [];
    gameObject.randomCharacter = '';
    gameObject.userGuess = '';
    gameObject.wrongGuesses = [];
    gameObject.userStatus = '';
    displayGameElements();
    selectCharacter();
    formatCharacter();
  } else {
    return;
    }
}

function resetButton() {
    checkDifficulty();
    displayLevel();
    gameObject.guessCharacter = [];
    gameObject.randomCharacter = '';
    gameObject.userGuess = '';
    gameObject.wrongGuesses = [];
    gameObject.userStatus = '';
    gameObject.wins = 0;
    displayGameElements();
    selectCharacter();
    formatCharacter();
    getElementsByClassName('.panel-body').focus(); 
}


// Function to enable game level button dropdown
$(document).ready(function(){
    $(".btn_btn-success_dropdown-toggle").dropdown();
});

// Function to set game difficulty level
$(document).ready(function() {
  var easyButton = $('.easy');
  var mediumButton = $('.medium');
  var difficultButton = $('.difficult');

  $('#easy').on('click', function(){
          gameObject.difficultyLevel = 'Easy';
          gameObject.guessesLeft = 10;
          displayGuesses();
          displayLevel();
        })

  $('#medium').on('click', function(){
          gameObject.difficultyLevel = 'Medium';
          gameObject.guessesLeft = 5;
          displayGuesses();
          displayLevel();
        })

  $('#difficult').on('click', function(){
          gameObject.difficultyLevel = 'Hard';
          gameObject.guessesLeft = 3;
          displayGuesses();
          displayLevel();
        })

})

function displayGuesses() {
  document.getElementById('guessesLeft').innerHTML = gameObject.guessesLeft;
}

function displayLevel() {
    document.getElementById('level').innerHTML = gameObject.difficultyLevel;
}

function checkDifficulty() {
  if(gameObject.difficultyLevel === 'Easy') {
      gameObject.guessesLeft = 10;
    } else if(gameObject.difficultyLevel === 'Medium') {
      gameObject.guessesLeft = 5;
    } else {
      gameObject.guessesLeft = 3;
    }
}