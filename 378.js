// 378. Kth Smallest Element in a Sorted Matrix

// total Time Complexity O(n^2 log m)
// n = number of rows/cols
// m = number of integers between the smallest and largest numbers

// T.C O(log m)
var kthSmallest = function (matrix, k) {
  let len = matrix.length;
  let low = matrix[0][0];
  let high = matrix[len - 1][len - 1];

  let mid, count;

  while (low < high) {
    mid = Math.floor((low + high) / 2);
    count = counting(matrix, mid);

    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

// T.C O(n*n)
// In counting we are calculating the number of values less than or equals to the calculating mid
let counting = (matrix, mid) => {
  let len = matrix.length;
  let count = 0;
  let i;
  matrix.forEach(function (row) {
    for (i = 0; i < len; i++) {
      if (row[i] <= mid) {
        continue;
      } else {
        break;
      }
    }
    count = count + i;
  });

  return count;
};

kthSmallest(
  [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  8
);
