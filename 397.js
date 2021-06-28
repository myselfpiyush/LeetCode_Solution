// 397. Integer Replacement

var integerReplacement = function (n) {
  let helper = (n) => {
    if (n === 1) return 0;
    if (n === 2) return 1;

    if (n % 2 === 0) {
      return 1 + helper(n / 2);
    } else {
      return 1 + Math.min(helper(n + 1), helper(n - 1));
    }
  };

  return helper(n);
};

integerReplacement(7);
