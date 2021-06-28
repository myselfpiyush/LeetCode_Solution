// 73. Set Matrix Zeroes

// https://www.youtube.com/watch?v=M65xBewcqcI

var setZeroes = function (matrix) {
  let col = 1;
  let rows = matrix.length;
  let columns = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) col = 0;
    for (let j = 1; j < columns; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = columns - 1; j > 0; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (col === 0) {
      matrix[i][0] = 0;
    }
  }

  console.log(matrix);
};

setZeroes([
  [-4, -2147483648, 6, -7, 0],
  [-8, 6, -8, -6, 0],
  [2147483647, 2, -9, -6, -10],
]);
