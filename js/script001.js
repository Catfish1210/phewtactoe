let gameArray = Array(8).fill("");

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
    // remove clicking property (pointer events) from user
    let squareBox = document.querySelector('.square-box');
    squareBox.classList.remove('.square-box:hover');


    // Wait 2 secondes before continuing
    setTimeout(function() {
        console.log("Deciding on my move...")
        let cellIndex = randomTurn();
        gameArray[cellIndex] = "O";
        document.getElementById("cell-"+cellIndex).innerHTML = "O";

    // restores clicking property for user
        squareBox.classList.add('.square-box:hover');

    }, 2000);
}

/*
function gameLoop() {
    if (trackTurn() = 1) {
        computerMove();
        



    } else {

    }
}
*/
function declareWinner() {
    
}

function trackTurn() {
    let trackTurn = Math.round(Math.random());
    return trackTurn;
}
















// If cell clicked, changes its innerHTML and adds it to corresponding element in gameArray[]
for (var i = 0; i <= 8; i++) {
    var cell = document.getElementById("cell-" + i);
    cell.addEventListener("click", function() {
        this.innerHTML = "X";
        gameArray[this.id.split('-')[1]] = "X";
    });
}







// Restart Button - Random O positon generation
var restartBtn = document.getElementById("restartBtn")
restartBtn.addEventListener("click", function() {
    //
});




