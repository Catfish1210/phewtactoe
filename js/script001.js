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
};




var cell0 = document.getElementById("cell-0")
cell0.addEventListener("click", function() {
    document.getElementById("cell-0").innerHTML = "X";
    gameArray[0] = "x";
    alert (gameArray);
});
var cell1 = document.getElementById("cell-1")
cell1.addEventListener("click", function() {
    document.getElementById("cell-1").innerHTML = "X";
    gameArray[1] = "x";
    alert (gameArray);
});

var cell2 = document.getElementById("cell-2")
cell2.addEventListener("click", function() {
    document.getElementById("cell-2").innerHTML = "X";
    gameArray[2] = "x";
    alert (gameArray);
}); 

var cell3 = document.getElementById("cell-3")
cell3.addEventListener("click", function() {
    document.getElementById("cell-3").innerHTML = "X";
    gameArray[3] = "x";
    alert (gameArray);
});

var cell4 = document.getElementById("cell-4")
cell4.addEventListener("click", function() {
    document.getElementById("cell-4").innerHTML = "X";
    gameArray[4] = "x";
    alert (gameArray);
});

var cell5 = document.getElementById("cell-5")
cell5.addEventListener("click", function() {
    document.getElementById("cell-5").innerHTML = "X";
    gameArray[5] = "x";
    alert (gameArray);
});

var cell6 = document.getElementById("cell-6")
cell6.addEventListener("click", function() {
    document.getElementById("cell-6").innerHTML = "X";
    gameArray[6] = "x";
    alert (gameArray);
});

var cell7 = document.getElementById("cell-7")
cell7.addEventListener("click", function() {
    document.getElementById("cell-7").innerHTML = "X";
    gameArray[7] = "x";
    alert (gameArray);
});

var cell8 = document.getElementById("cell-8")
cell8.addEventListener("click", function() {
    document.getElementById("cell-8").innerHTML = "X";
    gameArray[8] = "x";
    alert (gameArray);
    
});


// Restart Button
var restartBtn = document.getElementById("restartBtn")
restartBtn.addEventListener("click", function() {
    let cellIndex = randomTurn();
    gameArray[cellIndex] = "O";
    document.getElementById("cell-"+cellIndex).innerHTML = "O";
    alert('Restart Button has been clicked');
});



