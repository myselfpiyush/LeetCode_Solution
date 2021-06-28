// 120. Triangle

var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);

// Each layer passes on knowledge from the previous layer,
// until you reach the top. It is the most efficient solution
// because it's done in O(1) memory and O(elements) time.
// Every element is processed exactly once.
