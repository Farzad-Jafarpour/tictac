// Representing the Tic-Tac-Toe board as a 2D array
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";
let gameActive = true;

function checkWinner() {
  // Check rows, columns, and diagonals for a winner
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === currentPlayer &&
        board[i][1] === currentPlayer &&
        board[i][2] === currentPlayer) ||
      (board[0][i] === currentPlayer &&
        board[1][i] === currentPlayer &&
        board[2][i] === currentPlayer)
    ) {
      return true; // Winner found in row or column
    }
  }

  if (
    (board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer) ||
    (board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer)
  ) {
    return true; // Winner found in diagonals
  }

  return false; // No winner found
}

function checkTie() {
  for (let row of board) {
    if (row.includes("")) {
      return false; // The board is not full
    }
  }
  return true; // The board is full, and it's a tie
}

function handleClick(row, col) {
  if (!gameActive || board[row][col] !== "") {
    return;
  }

  board[row][col] = currentPlayer;
  document.getElementById(`cell-${row}-${col}`).textContent = currentPlayer;

  if (checkWinner()) {
    document.getElementById(
      "result"
    ).textContent = `برد ${currentPlayer}بازیکن `;
    gameActive = false;
  } else if (checkTie()) {
    document.getElementById("result").textContent = "برابر شد";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function initializeBoard() {
  const boardElement = document.getElementById("board");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.id = `cell-${i}-${j}`;
      cell.addEventListener("click", () => handleClick(i, j));
      boardElement.appendChild(cell);
    }
  }
}

initializeBoard();
