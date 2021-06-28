// 221. Maximal Square

// For Concept understanding
// https://www.youtube.com/watch?v=RElcqtFYTm0

//  T.C  O(MN)
//  S.C  O(MN)

/*
Note we can't directly fill with the rows since fill uses shallow copy constructor,
therefore all rows would share the same memory...here is example which demonstrates
how each row would be shared

Another way of creating a 2D array but doesn't work due to above reason:-

  let result = new Array(matrix.length + 1).fill(
    new Array(matrix[0].length + 1).fill(0)
  );

*/

var maximalSquare = function (matrix) {
  let result = new Array(matrix.length + 1)
    .fill(0)
    .map((item) => new Array(matrix[0].length + 1).fill(0));
  let max = 0;
  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      if (matrix[i - 1][j - 1] == "1") {
        result[i][j] =
          1 +
          Math.min(result[i - 1][j], result[i][j - 1], result[i - 1][j - 1]);
        max = Math.max(max, result[i][j]);
      }
    }
  }

  return max * max;
};

maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
]);
