// 34. Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (nums[left] !== target) return [-1, -1];

  let firstValue = left;

  left = 0;
  right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return [firstValue, right - 1];
};

searchRange([5, 7, 7, 8, 8, 10], 8);
