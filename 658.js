// 658. Find K Closest Elements

// Link for understanding the concept
// https://leetcode.com/problems/find-k-closest-elements/discuss/106426/JavaC%2B%2BPython-Binary-Search-O(log(N-K)-%2B-K

var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return arr.slice(left, left + k);
};

// Time Complexity: O(log (N-k))
// Space Complexity: O(1)
