const tiles = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;

const boardState = Array(tiles.length);
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", startNewGame);

//Sounds
const gameOverSound = new Audio("sounds/game_over.wav");
const clickSound = new Audio("sounds/click.wav");

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function setHoverText() {
  //remove all hover text
  tiles.forEach((tile) => {
    tile.classList.remove("x-hover");
    tile.classList.remove("o-hover");
  });

  const hoverClass = `${turn.toLowerCase()}-hover`;

  tiles.forEach((tile) => {
    if (tile.innerText == "") {
      tile.classList.add(hoverClass);
    }
  });
}

setHoverText();

function computerMove(boardState) {
  // Check if game is already over
  if (gameOverArea.classList.contains("visible")) {
    return null;
  }

  let randomTurnCell = Math.floor(Math.random() * 9);
  if (boardState[randomTurnCell] === "") {
    return randomTurnCell;
  } else {
    let counter = 0;
    let limit = 9;
    while (counter < limit) {
      randomTurnCell = Math.floor(Math.random() * 9);
      if (boardState[randomTurnCell] === "") {
        return randomTurnCell;
      }
      counter++;
    }
  }
}




function tileClick(event) {
  if (gameOverArea.classList.contains("visible")) {
    return;

  }

  const tile = event.target;
  const tileNumber = tile.dataset.index;
  if (tile.innerText != "") {
    return;
  }

  if (turn === PLAYER_X) {
    tile.innerText = PLAYER_X;
    boardState[tileNumber - 1] = PLAYER_X;
    turn = PLAYER_O;

    clickSound.play();
    setHoverText();
    checkWinner();

    setTimeout(() => {
      computerMoveTile();
      clickSound.play();
      setHoverText();
      checkWinner();
    }, 1000);
  }
}

function computerMoveTile() {
  let randomTurnCell = Math.floor(Math.random() * 9);
  if (boardState[randomTurnCell] === null) {
    tiles[randomTurnCell].innerText = PLAYER_O;
    boardState[randomTurnCell] = PLAYER_O;
    turn = PLAYER_X;
  } else {
    let counter = 0;
    let limit = 9;
    while (counter < limit) {
      randomTurnCell = Math.floor(Math.random() * 9);
      if (boardState[randomTurnCell] === null) {
        tiles[randomTurnCell].innerText = PLAYER_O;
        boardState[randomTurnCell] = PLAYER_O;
        turn = PLAYER_X;
        break;
      }
      counter++;
    }
  }
}





function checkWinner() {
  //Check for winner
  for (const winningCombination of winningCombinations) {
    //Object Destructuring
    const { combo, strikeClass } = winningCombination;
    const tileValue1 = boardState[combo[0] - 1];
    const tileValue2 = boardState[combo[1] - 1];
    const tileValue3 = boardState[combo[2] - 1];

    if (
      tileValue1 != null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      strike.classList.add(strikeClass);
      gameOverScreen(tileValue1);
      tiles.forEach((tile) => tile.removeEventListener("click", tileClick));
      return;
    }
  }

  //Check for draw
  const allTileFilledIn = boardState.every((tile) => tile !== null);
  if (allTileFilledIn) {
    gameOverScreen(null);
    tiles.forEach((tile) => tile.removeEventListener("click", tileClick));
  }
}


function gameOverScreen(winnerText) {
  let text = "Draw!";
  if (winnerText != null) {
    text = `Winner is ${winnerText}!`;
  }
  gameOverArea.className = "visible";
  gameOverText.innerText = text;
  gameOverSound.play();
  
}

function startNewGame() {
  location.reload();
  strike.className = "strike";
  gameOverArea.className = "hidden";
  boardState.fill(null);
  tiles.forEach((tile) => (tile.innerText = ""));
  turn = PLAYER_X;
  setHoverText();
}

const winningCombinations = [
  //row
  { combo: [1, 2, 3], strikeClass: "strike-row-1" },
  { combo: [4, 5, 6], strikeClass: "strike-row-2" },
  { combo: [7, 8, 9], strikeClass: "strike-row-3" },
  //col
  { combo: [1, 4, 7], strikeClass: "strike-column-1" },
  { combo: [2, 5, 8], strikeClass: "strike-column-2" },
  { combo: [3, 6, 9], strikeClass: "strike-column-3" },
  //diag
  { combo: [1, 5, 9], strikeClass: "strike-diagonal-1" },
  { combo: [3, 5, 7], strikeClass: "strike-diagonal-2" },
];