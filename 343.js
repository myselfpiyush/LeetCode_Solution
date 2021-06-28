// 343. Integer Break

// https://www.youtube.com/watch?v=m0OFK5LeEyw

var integerBreak = function (n) {
  let array = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      a = (i - j) * j;
      b = array[i - j] * j;
      c = array[i];
      array[i] = Math.max(a, b, c);
    }
  }
  return array[n];
};
