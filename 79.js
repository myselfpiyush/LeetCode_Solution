// 79. Word Search

var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (word.charAt(0) === board[i][j] && helper(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
};

let helper = (board, i, j, count, word) => {
  if (count === word.length) {
    return true;
  }

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    board[i][j] !== word[count]
  ) {
    return false;
  }
  //The same letter cell may not be used more than once. Ex:- word="BCCE" for below given matrix
  let temp = board[i][j];
  board[i][j] = " ";

  let found =
    helper(board, i + 1, j, count + 1, word) ||
    helper(board, i - 1, j, count + 1, word) ||
    helper(board, i, j + 1, count + 1, word) ||
    helper(board, i, j - 1, count + 1, word);

  board[i][j] = temp;

  return found;
};

exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  "ABCCED"
);
