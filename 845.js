// 845. Longest Mountain in Array

// https://www.youtube.com/watch?v=FpO3fY-1mj8

var longestMountain = function (arr) {
  let result = 0;
  let left, right;
  let len = arr.length;

  for (let i = 1; i < len - 1; i++) {
    /* i is starting and ending from 1 and len-1 because array starting and ending
      element is never be the peak of the mountain */

    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      // finding the peak element from the array
      left = right = i;

      // finding the all left element from the peak
      while (left > 0 && arr[left] > arr[left - 1]) {
        left = left - 1;
      }

      // finding the all right element from the peak
      while (right + 1 < len && arr[right] > arr[right + 1]) {
        right = right + 1;
      }
      // finding the max mountain as there may be many mountains in the array
      result = Math.max(result, right - left + 1);
    }
  }
  return result;
};
longestMountain([2, 1, 4, 7, 3, 2, 5]);

// S.C = O(n)
// T.C = constant space
