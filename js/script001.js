

// create an SVG element O
var oSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
oSVG.setAttribute("width", "50");
oSVG.setAttribute("height", "50");

var outerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
outerCircle.setAttribute("cx", "25");
outerCircle.setAttribute("cy", "25");
outerCircle.setAttribute("r", "20");
outerCircle.setAttribute("stroke", "#f1b142");
outerCircle.setAttribute("stroke-width", "4");
outerCircle.setAttribute("fill", "none");
oSVG.appendChild(outerCircle);

var innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
innerCircle.setAttribute("cx", "25");
innerCircle.setAttribute("cy", "25");
innerCircle.setAttribute("r", "15");
innerCircle.setAttribute("fill", "#203540");
oSVG.appendChild(innerCircle);
let oSVG1 = oSVG;


//Display possible SVGs (in the future maybe highlight the one whos turn it is.)
var playerSVGs = document.getElementById("SVGS")
playerSVGs.append(xSVG);
playerSVGs.append(oSVG1);








// Buttons
var cell0 = document.getElementById("cell-0")
cell0.addEventListener("click", function() {
    // append the SVG to the button
    cell0.appendChild(xSVG);
});

var cell1 = document.getElementById("cell-1")
cell1.addEventListener("click", function() {
    cell1.appendChild(oSVG);
});

var cell2 = document.getElementById("cell-2")
cell2.addEventListener("click", function() {
    alert("Cell 3 was clicked!");
});

var restartBtn = document.getElementById("restartBtn")
restartBtn.addEventListener("click", function() {

        // Should add all cell removeChild's here (xSVG) and (oSVG)
});

function createX() {
    var xSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    xSVG.setAttribute("width", "50");
    xSVG.setAttribute("height", "50");
    
    var xLine1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xLine1.setAttribute("x1", "10");
    xLine1.setAttribute("y1", "10");
    xLine1.setAttribute("x2", "40");
    xLine1.setAttribute("y2", "40");
    xLine1.setAttribute("stroke", "#38c4bd");
    xLine1.setAttribute("stroke-width", "4");
    xSVG.appendChild(xLine1); 
    var xLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xLine2.setAttribute("x1", "40");
    xLine2.setAttribute("y1", "10");
    xLine2.setAttribute("x2", "10");
    xLine2.setAttribute("y2", "40");
    xLine2.setAttribute("stroke", "#38c4bd");
    xLine2.setAttribute("stroke-width", "4");
    xSVG.appendChild(xLine2);
}

function createO() {

}


function cellCheck() {
    // Inputs : Who's turn is it (x or o) & what cell was clicked
    // Check if cell is empty
    // D
}




function cellListener() {

    var cell0 = document.getElementById("cell-0")
    cell0.addEventListener("click", function() {
    // what do after click
});

    var cell1 = document.getElementById("cell-1")
    cell1.addEventListener("click", function() {
    // what do after click
});

    var cell2 = document.getElementById("cell-2")
    cell2.addEventListener("click", function() {
    // what do after click
}); 

    var cell3 = document.getElementById("cell-3")
    cell3.addEventListener("click", function() {
    // what do after click
    createX();
    cell3.appendChild(xSVG);
});

    var cell4 = document.getElementById("cell-4")
    cell4.addEventListener("click", function() {
    // what do after click
});

    var cell5 = document.getElementById("cell-5")
    cell5.addEventListener("click", function() {
    // what do after click
});

    var cell6 = document.getElementById("cell-6")
    cell6.addEventListener("click", function() {
    // what do after click
});

    var cell7 = document.getElementById("cell-7")
    cell7.addEventListener("click", function() {
    // what do after click
});
    var cell8 = document.getElementById("cell-8")
    cell8.addEventListener("click", function() {
    // what do after click
});

}

cellListener();