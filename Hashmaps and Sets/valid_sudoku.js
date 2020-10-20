/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const validRows = validateRows(board);
  const validCols = validateCols(board);
  let validThreeByThree = true;

  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board[0].length; j += 3) {
      validThreeByThree = validThreeByThree && validate3by3(board, i, j);
    }
  }

  return validRows && validCols && validThreeByThree;
};

function validateRows(board) {
  for (let i = 0; i < board.length; i++) {
    const seen = new Set();
    for (let j = 0; j < board[0].length; j++) {
      const current = board[i][j] === "." ? 0 : Number(board[i][j]);
      if (current && seen.has(current)) {
        return false;
      }
      seen.add(current);
    }
  }
  return true;
}

function validateCols(board) {
  for (let i = 0; i < board.length; i++) {
    const seen = new Set();
    for (let j = 0; j < board[0].length; j++) {
      const current = board[j][i] === "." ? 0 : Number(board[j][i]);
      if (current && seen.has(current)) {
        return false;
      }
      seen.add(current);
    }
  }
  return true;
}

function validate3by3(board, rowInd, colInd) {
  const seen = new Set();
  for (let i = rowInd; i < rowInd + 3; i++) {
    for (let j = colInd; j < colInd + 3; j++) {
      const current = board[i][j] === "." ? 0 : Number(board[i][j]);
      if (current && seen.has(current)) {
        return false;
      }
      seen.add(current);
    }
  }
  return true;
}
