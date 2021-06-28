// 33. Search in Rotated Sorted Array

var search = function (nums, target) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[left]) {
      if (target <= nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

search([1, 3], 1);
