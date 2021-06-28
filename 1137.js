// 1137. N-th Tribonacci Number

var tribonacci = function (n, cache = {}) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  if (cache[n]) return cache[n];

  return (cache[n] =
    tribonacci(n - 1, cache) +
    tribonacci(n - 2, cache) +
    tribonacci(n - 3, cache));
};
