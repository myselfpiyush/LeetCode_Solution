// 74. Search a 2D Matrix

var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let column = matrix[0].length;
  let x = -1;

  for (let i = 0; i < row; i++) {
    if (target <= matrix[i][column - 1]) {
      x = i;
      break;
    }
  }
  // this below condition runs when elements in the matrix
  // less than the target value
  // Ex:- [[1,1,1,1,1]], 2
  if (x === -1) {
    return false;
  }

  for (let j = 0; j < column; j++) {
    if (matrix[x][j] === target) {
      return true;
    }
  }
  return false;
};

searchMatrix([[1]], 2);
