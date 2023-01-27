let gameArray = Array(8).fill("");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let gameState = true;

function randomTurn() {
    let randomTurnCell = Math.floor(Math.random() * 8);
    if (gameArray[randomTurnCell] == "") {
        return randomTurnCell;
    } else {
        let counter = 0;
        let limit = 8;
        while (counter < limit) {
            randomTurnCell = Math.floor(Math.random() * 8);
            if (gameArray[randomTurnCell] == "") {
                return randomTurnCell;
            }
            counter++;
        }
    }
}

function computerMove() {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log("Deciding on my move...")
            let cellIndex = randomTurn();
            gameArray[cellIndex] = "O";
            document.getElementById("cell-"+cellIndex).innerHTML = "<h3 class='orange'>O</h3>";
            console.log(gameArray);
            resolve();
        }, 2000);
    });
}


let turnIndex = createTurn();
async function gameLoop() {
    while (gameState === true) {
        // 0 - X aka. player
        if (turnIndex === 0) {
            displayMove(0);
            await listenUserInput();
            disableCells();

            if (checkWin(gameArray) === '') {
                turnIndex = 1; //update the turnIndex here
                continue;

            } else {
                console.log('game over!');
                console.log('winner is');
                console.log(checkWin(gameArray));
                gameState = false;
                disableCells();
            }
            
        // 1 - O aka. computer
        } else if (turnIndex === 1) {
            displayMove(1);
            await computerMove();

            if (checkWin(gameArray) === '') {
                turnIndex = 0; //update the turnIndex here
                continue;

            } else {
                console.log('game over!');
                console.log('winner is');
                console.log(checkWin(gameArray));
                gameState = false;
                disableCells();
            }

        } else {
            console.log('gameloop else ERROR')
        }
    }
}




function displayMove(currentTurn) {
    let turnIndicator = document.getElementById("turnIndicator");
    if (currentTurn === 1) {
        turnIndicator.innerHTML = "O's Turn"
    } else if (currentTurn === 0) {
        turnIndicator.innerHTML = "X's Turn"
    } else {
        console.log('display Move input ERROR')
        console.log(currentTurn)
        console.log(typeof currentTurn)
    }
}

function disableCells() {
    for (var i = 0; i <= 8; i++) {
        var cell = document.getElementById("cell-" + i);
        cell.removeEventListener("click", listenUserInput);
    }
}


function createTurn() {
    let createTurn = Math.round(Math.random());
    return createTurn;
}

function checkWin(gameArray) {
    var i;
    var j;
    var winner = '';
    for (i = 0; i < winConditions.length; i++) {
        var a = winConditions[i][0];
        var b = winConditions[i][1];
        var c = winConditions[i][2];
        if (gameArray[a] === gameArray[b] && gameArray[b] === gameArray[c]) {
            winner = gameArray[a];
            break;
        } 
    }
    if (winner === '') {
        let emptyCells = gameArray.filter(cell => cell === "").length;
        if (emptyCells === 0) {
            console.log("It's a tie!");
        }
    }
    return winner;
}

let userTurn = true;

function listenUserInput() {
    return new Promise(resolve => {
        if(userTurn){
            for (var i = 0; i <= 8; i++) {
                var cell = document.getElementById("cell-" + i);
                cell.addEventListener("click", function() {
                    if (this.innerHTML !== "") return;
                        this.innerHTML = "<h3 class='cyan'>X</h3>"; 
                        gameArray[this.id.split('-')[1]] = "X";
                        userTurn = false;
                        resolve();
                });
            }
        }else{
            // computer move
            userTurn = true;
        }
    });
}





/* OLD
function listenUserInput() {
    return new Promise(resolve => {
        for (var i = 0; i <= 8; i++) {
            var cell = document.getElementById("cell-" + i);
            cell.addEventListener("click", function() {
                if (this.innerHTML !== "") return;
                    this.innerHTML = "<h3 class='cyan'>X</h3>"; 
                    gameArray[this.id.split('-')[1]] = "X";
                    resolve();
                    cell.removeEventListener("click", arguments.callee);
            });
        }
    });
}
*/



// Restart Button - Random O positon generation
var restartBtn = document.getElementById("restartBtn")
restartBtn.addEventListener("click", function() {
    // gameArray = Array(8).fill("");
    // gameState = true
    gameLoop();
});
