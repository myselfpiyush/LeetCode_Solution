// 997. Find the Town Judge

var findJudge = function (N, trust) {
  const counts = new Array(N + 1).fill(0);

  for (let [i, j] of trust) {
    counts[i] -= 1;

    counts[j] += 1;
  }

  for (let i = 1; i < counts.length; i++) {
    if (N - 1 === counts[i]) {
      return i;
    }
  }

  return -1;
};

findJudge(4, [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
]);
