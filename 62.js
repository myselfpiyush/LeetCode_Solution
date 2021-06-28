// 62. Unique Paths

var uniquePaths = function (m, n) {
  let helper = (m, n, memo = {}) => {
    let key = m + "," + n;

    if (key in memo) {
      return memo[key];
    }
    if (n === 0 || m === 0) return 0;

    if (m === 1 && n === 1) {
      return 1;
    }

    return (memo[key] = helper(m, n - 1, memo) + helper(m - 1, n, memo));
  };

  //   console.log(helper(m, n));

  return helper(m, n);
};

uniquePaths(3, 7);
