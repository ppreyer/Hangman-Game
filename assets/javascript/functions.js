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
  difficultyLevel: 'easy'
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
  displayCharacterImage();
  userLoss();
  resetGame();
}


// Create a function to check if letter guessed is in the smash bro character
function checkGuess() {
  if(gameObject.wrongGuesses.indexOf(gameObject.userGuess) > -1) {
    return 
  }
  // Conditional - check if the letter guessed is in the selected character (string)
  if(gameObject.randomCharacter.indexOf(gameObject.userGuess) === -1) {
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

function displayCharacterImage() {
  if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'mario') {
    document.getElementById('title').innerHTML='MARIO - MUSHROOM KINGDOM';
    document.getElementById('character').src='assets/images/mario.png';
    document.getElementById('map').src='assets/images/mushroom_kingdom.jpg';
    document.getElementById('sound').src='assets/sounds/Mario 1.wav';
  } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'captain falcon') {
      document.getElementById('title').innerHTML='CAPTAIN FALCON - PLANET ZEBES';
      document.getElementById('character').src='assets/images/captain_falcon.png';
      document.getElementById('map').src='assets/images/planet_zebes.png';
      document.getElementById('sound').src='assets/sounds/C Falcon 1.wav';
    } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'donkey kong') {
        document.getElementById('title').innerHTML='DONKEY KONG - CONGO JUNGLE';
        document.getElementById('character').src='assets/images/donkey_kong.png';
        document.getElementById('map').src='assets/images/congo_jungle.png';
        document.getElementById('sound').src='assets/sounds/Donkey Kong 1.wav';
      } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'fox') {
          document.getElementById('title').innerHTML='FOX - SECTOR Z';
          document.getElementById('character').src='assets/images/fox.png';
          document.getElementById('map').src='assets/images/sectorz.png';
          document.getElementById('sound').src='assets/sounds/Fox 1.wav';
        } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'jiggly puff') {
            document.getElementById('title').innerHTML='JIGGLY PUFF - SAFFRON CITY';
            document.getElementById('character').src='assets/images/jiggly_puff.png';
            document.getElementById('map').src='assets/images/saffron_city.png';
            document.getElementById('sound').src='assets/sounds/Jigglypuff (USA) 1.wav';
          } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'kirby') {
              document.getElementById('title').innerHTML='KIRBY - DREAM LAND';
              document.getElementById('character').src='assets/images/kirby.png';
              document.getElementById('map').src='assets/images/dream_land.png';
              document.getElementById('sound').src='assets/sounds/Kirby 1.wav';
             } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'link') {
                document.getElementById('title').innerHTML='LINK - HYRULE CASTLE';
                document.getElementById('character').src='assets/images/link.png';
                document.getElementById('map').src='assets/images/hyrule_castle.png';
                document.getElementById('sound').src='assets/sounds/Link 1.wav';
              } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'luigi') {
                    document.getElementById('title').innerHTML='LUIGI - PEACH CASTLE';
                    document.getElementById('character').src='assets/images/luigi.png';
                    document.getElementById('map').src='assets/images/peach_castle.jpg';
                    document.getElementById('sound').src='assets/sounds/Luigi 1.wav';
                  } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'ness') {
                      document.getElementById('title').innerHTML='NESS - SAFFRON CITY';
                      document.getElementById('character').src='assets/images/ness.png';
                      document.getElementById('map').src='assets/images/saffron_city.png';
                      document.getElementById('sound').src='assets/sounds/Ness 1.wav';
                    } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'pikachu') {
                        document.getElementById('title').innerHTML='PIKACHU - SAFFRON CITY';
                        document.getElementById('character').src='assets/images/pikachu.png';
                        document.getElementById('map').src='assets/images/saffron_city.png';
                        document.getElementById('sound').src='assets/sounds/Pikachu 1.wav';
                      } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'samus') {
                          document.getElementById('title').innerHTML='SAMUS - PLANET ZEBES';
                          document.getElementById('character').src='assets/images/samus.png';
                          document.getElementById('map').src='assets/images/planet_zebes.png';
                          document.getElementById('sound').src='assets/sounds/Announcer - Samus.wav';
                        } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'yoshi') {
                            document.getElementById('title').innerHTML='YOSHI - YOSHI\'S ISLAND';
                            document.getElementById('character').src='assets/images/yoshi.png';
                            document.getElementById('map').src='assets/images/yoshi\'s_island.png';
                            document.getElementById('sound').src='assets/sounds/Yoshi 1.wav';
                          }
}

function userLoss() {
  if(gameObject.userStatus === 'lost') {
    document.getElementById('title').innerHTML='MASTER HAND WINS';
    document.getElementById('character').src='assets/images/master_hand.jpg';
    document.getElementById('map').src='assets/images/mh.png';
    document.getElementById('sound').src='assets/sounds/Master Hand - Intro.wav';
  }
}

// Create a function to reset the appropriate values stored in the gameObject's keys
function resetGame() {
  if(gameObject.userStatus === 'winner' || gameObject.userStatus === 'lost') {
    gameObject.guessesLeft = 10;
    gameObject.guessCharacter = [];
    gameObject.randomCharacter = '';
    gameObject.userGuess = '';
    gameObject.wrongGuesses = [];
    gameObject.userStatus = '';
    displayGameElements();
    selectCharacter();
    formatCharacter();
  }
}

function resetButton() {
    gameObject.guessesLeft = 10;
    gameObject.guessCharacter = [];
    gameObject.randomCharacter = '';
    gameObject.userGuess = '';
    gameObject.wrongGuesses = [];
    gameObject.userStatus = '';
    gameObject.wins = 0;
    displayGameElements();
    selectCharacter();
    formatCharacter();
}

