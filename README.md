# TicTacToe
This project is a web-based implementation of the classic game Tic Tac Toe, using JavaScript for the game logic and HTML/CSS for the interface. The game supports two players, X and O, who take turns marking the cells of a 3x3 grid. The goal is to be the first player to place three of their marks in a horizontal, vertical, or diagonal row.

Features:
BASIC GAMEPLAY:
* Players alternate turns to place their marks (X or O) in the grid.
* The game detects win conditions and highlights the winning pattern.
* The game can also detect a draw when all cells are filled without a winner.

WINNING PATTERS:
* The game checks for eight possible winning patterns (three horizontal, three vertical, and two diagonal).

SCORE TRACKING:
* The game keeps track of the scores for both players, X and O, and displays the current scores.

VISUAL EFFECTS:
* The winning cells are highlighted in green.
* A video plays in the background upon a win to enhance the user experience.

DARK MODE:
* The game includes a dark mode toggle button that changes the background and text colors for a different visual experience.

RESET FUNCTION:
* A reset button allows players to start a new game without refreshing the page.
* The game automatically resets a few seconds after a win or a draw.

CODE OVERVIEW:-

* Event Listeners for Boxes:
Each cell (box) in the grid has an event listener that handles the player's move, updates the cell, and checks for a win or draw.

* Win Check Function:
The checkForWin function checks all winning patterns to determine if a player has won. If a win is detected, it highlights the winning cells and updates the score.

* Draw Check Function:
The CheckForDraw function checks if all cells are filled without a winner, declaring the game a draw.

* Reset Function:
The reset function clears the grid, resets the cell styles, and prepares the game for a new round.

* Dark Mode Toggle:
The modebtn event listener toggles the visual mode between light and dark themes.
