import { data } from "../data/day.4";

// Convert the input data into a 2D array
const grid = data.split("\n").map((line) => line.split(""));

const numRows = grid.length;
const numCols = grid[0].length;
const targetWord = "XMAS";
const targetLength = targetWord.length;

let count = 0;
const visited = new Set<string>();

// Function to check if a word exists in a given direction
const checkDirection = (
  row: number,
  col: number,
  rowDir: number,
  colDir: number
): boolean => {
  let word = "";
  const positions = [];
  for (let i = 0; i < targetLength; i++) {
    const newRow = row + i * rowDir;
    const newCol = col + i * colDir;
    if (
      newRow < 0 ||
      newRow >= numRows ||
      newCol < 0 ||
      newCol >= numCols
    ) {
      return false;
    }
    word += grid[newRow][newCol];
    positions.push(`${newRow},${newCol}`);
  }
  if (word === targetWord) {
    positions.forEach((pos) => visited.add(pos));
    return true;
  }
  return false;
};

// Check all possible directions for each cell in the grid
for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numCols; col++) {
    if (!visited.has(`${row},${col}`)) {
      if (
        checkDirection(row, col, 0, 1) || // Horizontal right
        checkDirection(row, col, 1, 0) || // Vertical down
        checkDirection(row, col, 1, 1) || // Diagonal down-right
        checkDirection(row, col, -1, -1) || // Diagonal up-left
        checkDirection(row, col, 0, -1) || // Horizontal left
        checkDirection(row, col, -1, 0) || // Vertical up
        checkDirection(row, col, -1 , +1 )||// Diagonal up-right 
        checkDirection(row,+col,+ + ,-)//Diagonal down-left 
) {count++;
    }
  }
}

console.log(`Total occurrences of XMAS: ${count}`);
