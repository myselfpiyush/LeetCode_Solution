// 973. K Closest Points to Origin

var kClosest = function (points, k) {
  let distance = 0;
  let result = [];
  let final = [];

  for (let i = 0; i < points.length; i++) {
    distance = points[i][0] ** 2 + points[i][1] ** 2;

    result.push([distance, points[i]]);
  }

  result.sort((a, b) => a[0] - b[0]);

  for (let j = 0; j < result.length; j++) {
    final.push(result[j][1]);
  }

  return final;
};

kClosest(
  [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  (k = 2)
);
