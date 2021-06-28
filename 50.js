// 50. Pow(x, n)

// https://www.youtube.com/watch?v=l0YC3876qxg

var myPow = function (x, n) {
  let result = 1;
  let original_n = n; // so we can store the original n it helps if n is negative
  if (n < 0) {
    n = -1 * n;
  }

  while (n > 0) {
    if (n % 2 == 1) {
      result = result * x;
      n = n - 1;
    } else {
      x = x * x;
      n = n / 2;
    }
  }
  if (original_n < 0) {
    result = 1 / result;
  }

  return result;
};
