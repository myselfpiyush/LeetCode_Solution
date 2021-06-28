// 56. Merge Intervals

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  if (intervals.length < 2) return intervals;

  for (let i = 1; i < intervals.length; i++) {
    current = intervals[i];
    previous = intervals[i - 1];

    if (current[0] <= previous[1]) {
      intervals[i] = [
        Math.min(previous[0], current[0]),
        Math.max(current[1], previous[1]),
      ];
      intervals.splice(i - 1, 1);
      i--;
    }
  }

  console.log(intervals);

  return intervals;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
