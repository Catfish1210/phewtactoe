# Phewtactoe
## About
This is my personal project to practise Git/HTML/CSS/**JS**
### Status
**Currently the game is in a robust stage**, where you can click the cells to change their value to X and randomly generate an O when f(computerMove) is initialized.
nothing more nothing less.
### Issues
1. Game logic needs to be worked out
2. User can over-ride computer generated O's

#### Logic
Browser based TicTacToe game with HTML, CSS, JS

Here's a more detailed explanation of the logic behind a Tic Tac Toe game:

    Initialize the game state variables:
        board is an array that keeps track of the state of each cell on the game board. Empty cells are represented as empty strings, "X" represents a cell that has been marked by player 1, and "O" represents a cell that has been marked by player 2.
        players is an array that holds the symbols used by each player. In this case, it is an array of two strings, "X" and "O".
        currentPlayer is a variable that keeps track of which player's turn it is. It starts at 0, which represents player 1.

    Create a render() function that updates the game board to reflect the current state of the board array. It loops through the board array and updates the HTML of each cell to match the corresponding element in the array.

    Create a cellClick() function that is called when a cell is clicked. It takes the event object as a parameter. The function gets the cell that was clicked and its index in the board array. It then updates the board array with the symbol of the current player and changes the value of currentPlayer to switch to the other player's turn.

    Add an event listener to each cell that calls the cellClick() function when clicked.

    Call the render() function to initialize the game board.

    Add the logic to check for win, tie, and resetting the game.
        To check for a win, you can check the rows, columns and diagonals of the board if they contain the same symbol and not a empty string.
        To check for a tie you can check if the board have no empty cell remaining and no one have won.
        To reset the game you can simply clear the board array and set the currentPlayer to 0 and call the render function again.

It's also a good idea to handle cases such as clicking a cell that has already been marked and invalid moves.

This is a simple explanation of a Tic Tac Toe game logic, you can also add more advanced features like AI player, difficulty levels and more.
