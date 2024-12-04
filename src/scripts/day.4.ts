import { data } from "../data/day.4";

const grid = data.split("\n");
const numRows = grid.length;
const numCols = grid[0].length;
const targetWord = "XMAS";
const targetLength = targetWord.length;

function countHorizontalForward() {
  let count = 0;
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col <= numCols - targetLength; col++) {
      if (grid[row].slice(col, col + targetLength) === targetWord) {
        count++;
      }
    }
  }
  return count;
}

function countHorizontalBackward() {
  let count = 0;
  for (let row = 0; row < numRows; row++) {
    for (let col = numCols - 1; col >= targetLength - 1; col--) {
      if (grid[row].slice(col - targetLength + 1, col + 1) === targetWord.split("").reverse().join("")) {
        count++;
      }
    }
  }
  return count;
}

function countVerticalDown() {
  let count = 0;
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row <= numRows - targetLength; row++) {
      let word = "";
      for (let k = 0; k < targetLength; k++) {
        word += grid[row + k][col];
      }
      if (word === targetWord) {
        count++;
      }
    }
  }
  return count;
}

function countVerticalUp() {
   let count=
