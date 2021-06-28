// 36. Valid Sudoku

// https://www.youtube.com/watch?v=rJ9NFK9s_mI

var isValidSudoku = function (board) {
  let set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      current = board[i][j];
      if (current !== ".") {
        if (
          set.has(current + "found in row" + i) ||
          set.has(current + "found in column" + j) ||
          set.has(
            current +
              "found in the sub box" +
              (Math.floor(i / 3) * 3 + Math.floor(j / 3))
          )
        ) {
          return false;
        } else {
          set.add(current + "found in row" + i);
          set.add(current + "found in column" + j);
          set.add(
            current +
              "found in the sub box" +
              (Math.floor(i / 3) * 3 + Math.floor(j / 3))
          );
        }
      }
    }
  }
  return true;
};
