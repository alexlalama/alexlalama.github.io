console.clear();

/*
import { getRandomListItem } from './../js/utils.js';

let dictionary, gameWords, targetWord;
let gameboard = document.querySelector('.gameboard');
let keyboard = document.querySelector('.keyboard');
let gameState = {
  date: '',
  boardState: [],
  status: 'in_progress',
  solution: '',
};
// 1. Fetch all necessary JSON data for our game
async function getData() {
  try {
    let dictionaryResponse = await fetch('./../assets/data/dictionary.json'); //dictionary
    let dictionaryObject = await dictionaryResponse.json();
    let gameWordsResponse = await fetch('./../assets/data/game_words.json');
    let gameWordsObject = await gameWordsResponse.json();

    dictionary = [...dictionaryObject];
    gameWords = [...gameWordsObject];

    return true;
  } catch (err) {
    console.error(`getData error: ${err}`);
    return false;
  }
}

// 2. Once we have all the required JSON data, we need to make sure we get a 
// RANDOM word from our gameWords variable and set it as our targetWord
async function initializeGame() {
  try {
    let currentDate = new Date().toLocaleDateString();
    let dataIsLoaded = await getData();
    if (dataIsLoaded === true) {
      let gameStateLoaded = loadGameState();
      if (gameStateLoaded === true) {
        if (gameState.date === currentDate) {
          targetWord = gameState.solution;
          if (gameState.boardState.length > 0) {
            gameState.boardState.forEach(function (guess) {
              let guessLetters = guess.split('');
              guessLetters.forEach(addLetter());
              submitWordGuess(guess);
            });
          }
          if (gameState.status === 'in_progress') {
            startGame();
          }
        } else {
          targetWord = getRandomListItem(gameWords);
          gameState.solution = targetWord;
          gameState.date = currentDate;
          saveGameState(gameState);
          startGame();
          console.log(`TARGET WORD: ${targetWord}`);
        }
      } else {
        targetWord = getRandomListItem(gameWords);
        gameState.solution = targetWord;
        gameState.date = currentDate;
        saveGameState(gameState);
        startGame();
        console.log(`TARGET WORD: ${targetWord}`);
      }
    }
  } catch (err) {
    console.error(`initializeGame ERROR: ${err}`);
  }
}

function loadGameState() {
  try {
    let savedGameState = localStorage.getItem('alexs-wordle');
    console.log(savedGameState);
    if (savedGameState) {
      gameState = JSON.parse(savedGameState);
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error('loadGameState Error:');
    return false;
  }
}
 function saveGameState(state) {
  localStorage.setItem('alexs-wordle', JSON.stringify(state));
}

initializeGame();

// 3. Start our game by adding event listeners for physical keyboard keypresses and clicks on the virtual keyboard in order to recieve input from the user
function startGame() {
  saveGameState(gameState);
  document.addEventListener('keyup', keypressHandler);
  document.addEventListener('click', clickHandler);
}

// End our game by removing event listeners
function endGame() {
  saveGameState(gameState);
  document.removeEventListener('keyup', keypressHandler);
  document.removeEventListener('click', clickHandler);
}

function keypressHandler(event) {
  if (event.key === 'Enter') {
    submitWordGuess();
  }

  if (event.key === 'Backspace' || event.key === 'Delete') {
    deleteLetter();
  }

  if (event.key.match(/^[a-z]$/i)) {
    addLetter(event.key.toLowerCase());
  }
}

function clickHandler(event) {
  let dataKey = event.target.dataset.key;
  let dataEnter = event.target.dataset.enter;
  let dataDelete = event.target.dataset.delete;

  if (dataEnter === 'enter') {
    submitWordGuess();
  }

  if (dataDelete === 'delete') {
    deleteLetter();
  }

  if (dataKey === event.target.innerText.toLowerCase()) {
    addLetter(dataKey.toLowerCase());
  }
}

// 4. Add a letter to the gameboard:
// -- ONLY IF the current row has an empty tile available
// -- STOP adding letters when the current row has 5 tiles that contain letters
function addLetter(letter) {
  let tilesWithLetter = gameboard.querySelectorAll(
    '.card[data-state="has-letter"]'
  );

  if (tilesWithLetter.length === targetWord.length) {
    return false;
  }

  let nextEmptyTile = gameboard.querySelector('.card:not([data-state])');
  nextEmptyTile.dataset.letter = letter;
  nextEmptyTile.dataset.state = 'has-letter';
  nextEmptyTile.innerText = letter;
}

// 5. Delete the last letter entered:
// -- ONLY from the current row of letters
// -- STOP deleting when there are 5 empty tiles on a row
function deleteLetter() {
  let tilesWithLetter = gameboard.querySelectorAll(
    '.card[data-state="has-letter"]'
  );

  if (tilesWithLetter.length === 0) {
    return false;
  }

  let lastLetterIndex = tilesWithLetter.length - 1;
  let lastTileWithLetter = tilesWithLetter[lastLetterIndex];

  delete lastTileWithLetter.dataset.letter;
  delete lastTileWithLetter.dataset.state;
  lastTileWithLetter.innerText = '';
}

// 6. Submit a word guess
function submitWordGuess() {
  let tilesWithLetter = gameboard.querySelectorAll(
    '.card[data-state="has-letter"]'
  );

  if (tilesWithLetter.length !== targetWord.length) {
    return alert(`Not enough letters, your word guess must contain 5 letters!`);
  }

  let wordGuess = '';

  tilesWithLetter.forEach(function (tile) {
    wordGuess += tile.dataset.letter;
  });

  if (!dictionary.includes(wordGuess)) {
    return alert(
      `Your guess is not a 5 letter word in the English Dictionary! Try Again!`
    );
  }

  if (!gameState.boardState.includes(wordGuess)) {
    gameState.boardState.push(wordGuess);
    saveGameState(gameState);
  }

  // Checking the position of each letter again the letters in our targetWord
  tilesWithLetter.forEach(function (tile, index, nodeList) {
    checkLetterState(tile, index, nodeList, wordGuess);
  });
}

function checkLetterState(tile, index, tilesWithLetter, wordGuess) {
  let letter = tile.dataset.letter;
  let virtualKey = keyboard.querySelector(`button[data-key=${letter}]`);
  let state = '';

  if (targetWord[index] === letter) {
    state = 'correct';
  } else if (targetWord.includes(letter)) {
    state = 'found';
  } else {
    state = 'wrong';
  }

  tile.dataset.state = state;
  if (virtualKey.dataset.state !== 'correct') {
    virtualKey.dataset.state = state;
  }

  if (index === tilesWithLetter.length - 1) {
    checkGameResult(wordGuess);
  }
}

function checkGameResult(wordGuess) {
  if (wordGuess === targetWord) {
    gameState.status = 'won';
    setTimeout(function () {
      alert(`You WON! The correct target word was: ${targetWord}`);
    }, 200);

    return endGame();
  }

  let remainingEmptyTiles = gameboard.querySelectorAll(
    `.card:not([data-letter])`
  );
  if (remainingEmptyTiles.length === 0) {
    gameState.status = 'lost';
    setTimeout(function () {
      alert(`Sorry you ran out of guesses, and you LOST!`);
    }, 200);

    return endGame();
  }
}
*/

function buttonVar(name)
{
  var nameButton = name;
  nameButton  = querySelector(`button#${nameButton}`);
  return nameButton;
}
buttonVar("button0");
buttonVar("button1");
buttonVar("button2");
buttonVar("button3");
buttonVar("button4");
buttonVar("button5");
buttonVar("button6");
buttonVar("button7");
buttonVar("button8");
buttonVar("button9");

console.log(buttonVar("#button0"));
var clear = document.querySelector("button#clear");
var calculatorNumber = document.querySelector("p#calculator-number");
// clear function
clear.addEventListener("click", function(){
    calculatorNumber.innerText = 0;
})
