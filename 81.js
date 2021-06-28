// 81. Search in Rotated Sorted Array II

var search = function (nums, target) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return true;
    }

    if (nums[mid] > nums[left]) {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[right]) {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] == nums[left]) {
      left++;
    } else if (nums[mid] == nums[right]) {
      right--;
    }
  }
  return false;
};
search([2, 5, 6, 0, 0, 1, 2], 3);
