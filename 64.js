// 64. Minimum Path Sum

var minPathSum = function (grid) {
  let row = grid.length - 1;
  let column = grid[0].length - 1;

  let helper = (m, n, memo = {}) => {
    let key = m + "," + n;
    if (key in memo) {
      return memo[key];
    }
    if (m < 0 || n < 0 || m > row || n > column) {
      return Infinity;
    }
    if (m === 0 && n === 0) {
      return grid[m][n];
    }
    return (memo[key] =
      grid[m][n] + Math.min(helper(m, n - 1, memo), helper(m - 1, n, memo)));
  };

  //   console.log(helper(row, column));

  return helper(row, column);
};

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
