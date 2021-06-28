// 59. Spiral Matrix II

var generateMatrix = function (n) {
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  let value = 1;
  let result = [];

  // while (value <= n * n)
  // -------------OR---------------
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      if (!result[top]) {
        result[top] = [];
      }
      result[top][i] = value++;
      //[[1,2,3]]
      // second time while loop running
      //[[1,2,3][8,9,4][7,6,5]]
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      //top===1
      if (!result[i]) {
        result[i] = [];
      }
      result[i][right] = value++;
      //[[1,2,3][,,4][,,5]]
    }
    right--;

    for (let i = right; i >= left; i--) {
      //right===1
      if (!result[bottom]) {
        result[bottom] = [];
      }
      result[bottom][i] = value++;
      //[[1,2,3][,,4][7,6,5]]
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      //bottom===1
      if (!result[i]) {
        result[i] = [];
      }
      result[i][left] = value++;
      //[[1,2,3][8,,4][7,6,5]]
    }
    left++;
  }
  console.log(result);
  // return result;
};

generateMatrix(3);
