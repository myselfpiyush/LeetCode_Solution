// 153. Find Minimum in Rotated Sorted Array

var findMin = function (nums) {
  if (nums.length == 0) return -1;
  if (nums.length == 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let midpoint = Math.floor((left + right) / 2);
    if (nums[midpoint] > nums[right]) {
      left = midpoint + 1;
    } else {
      right = midpoint;
    }
  }

  return nums[left];
};
