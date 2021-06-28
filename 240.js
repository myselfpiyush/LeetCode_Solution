// 240. Search a 2D Matrix II

// There are two solutions of this problem  one is of T.C  O(m logn) and other is of T.C  O(m + n)

/*
If one of the arrays is much larger than the other, then you might want to consider the binary search approach.
for example if number of rows is much larger than number of columns or the vice-versa
*/

// Time Complexity O(m logn)

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  //O(m)
  for (let i = 0, j = n - 1; i < m; i++) {
    if (
      matrix[i][j] === target ||
      (matrix[i][j] > target && binarySearch(matrix[i], target))
    ) {
      return true;
    }
  }

  return false;
};

//O(logn)
let binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
//---------------------------------------------------

// Time Complexity = O(m + n)

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let i = 0;
  let j = n - 1;

  while (i >= 0 && i < m && j >= 0 && j < n) {
    if (matrix[i][j] == target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};
