// 63. Unique Paths II

var uniquePathsWithObstacles = function (obstacleGrid) {
  let row = obstacleGrid.length - 1;
  let column = obstacleGrid[0].length - 1;

  let helper = (m, n, memo = {}) => {
    let key = m + "," + n;
    if (key in memo) {
      return memo[key];
    }
    if (m < 0 || n < 0 || m > row || n > column || obstacleGrid[m][n] === 1) {
      return 0;
    }
    if (m === 0 && n === 0) {
      return 1;
    }
    return (memo[key] = helper(m, n - 1, memo) + helper(m - 1, n, memo));
  };

  //   console.log(helper(row, column));

  return helper(row, column);
};

uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);
