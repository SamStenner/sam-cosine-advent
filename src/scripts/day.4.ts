import { data } from "../data/day.4";

const rows = data.split("\n");
const numRows = rows.length;
const numCols = rows[0].length;
const targetWord = "XMAS";
const targetLength = targetWord.length;

let count = 0;

// Function to check if the word exists in a given direction
function checkDirection(row: number, col: number, rowDir: number, colDir: number): boolean {
  for (let i = 0; i < targetLength; i++) {
    const newRow = row + i * rowDir;
    const newCol = col + i * colDir;
    if (
      newRow < 0 ||
      newRow >= numRows ||
      newCol < 0 ||
      newCol >= numCols ||
      rows[newRow][newCol] !== targetWord[i]
    ) {
      return false;
    }
  }
  return true;
}

// Check all cells in the grid
for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numCols; col++) {
    if (rows[row][col] === "X") {
      // Check all 8 directions
      if (checkDirection(row, col, 0, 1)) count++; // Right
      if (checkDirection(row, col, 0, -1)) count++; // Left
      if (checkDirection(row, col, 1, 0)) count++; // Down
      if (checkDirection(row, col, -1, 0)) count++; // Up
      if (checkDirection(row, col, 1, 1)) count++; // Down-Right
      if (checkDirection(row, col, 1, -1)) count++; // Down-Left
      if (checkDirection(row, col, -1, 1)) count++; // Up-Right
      if (checkDirection(row, col, -1, -1)) count++; // Up-Left
    }
  }
}

console.log(`Total occurrences of XMAS: ${count}`);
