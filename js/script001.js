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

function computerMove () {
    // Wait 2 secondes before continuing
    setTimeout(function() {
        console.log("Deciding on my move...")
        let cellIndex = randomTurn();
        gameArray[cellIndex] = "O";
        document.getElementById("cell-"+cellIndex).innerHTML = "<h3 class='orange'>O</h3>";
        console.log(gameArray);
    }, 2000);
}

function gameLoop() {

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
        } else {
            
        }
    }
    return winner;
}


function listenUserInput() {
    return new Promise(resolve => {
        for (var i = 0; i <= 8; i++) {
            var cell = document.getElementById("cell-" + i);
            cell.addEventListener("click", function() {
                this.innerHTML = "<h3 class='cyan'>X</h3>"; 
                gameArray[this.id.split('-')[1]] = "X";
                resolve();
            });
        }
    });
}



/*
// If cell clicked, changes its innerHTML and adds it to corresponding element in gameArray[]
function listenUserInput() {
    for (var i = 0; i <= 8; i++) {
        var cell = document.getElementById("cell-" + i);
        cell.addEventListener("click", function() {
            this.innerHTML = "X";
            gameArray[this.id.split('-')[1]] = "X";
        });
    }
}
*/


// Restart Button - Random O positon generation
var restartBtn = document.getElementById("restartBtn")
restartBtn.addEventListener("click", function() {
    //
    // gameLoop();
    listenUserInput();
});

/*GPT
const squareBoxes = document.getElementsByClassName("square-box");

for (let i = 0; i < squareBoxes.length; i++) {
    squareBoxes[i].addEventListener("click", function() {
        if(input === "X"){
            this.innerHTML = "<h1 class='red'>X</h1>";
        }else{
            this.innerHTML = "<h1 class='green'>O</h1>";
        }
    });
}
*/
