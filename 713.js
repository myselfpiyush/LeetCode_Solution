// 713. Subarray Product Less Than K

var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let result = 0;
  let product = 1;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    product *= nums[right];

    while (product >= k) {
      product = product / nums[left];
      left++;
    }
    result += right - left + 1;
    right++;
  }
  return result;
};
numSubarrayProductLessThanK([10, 5, 2, 6], 100);

// T.C: O(N)
// S.C: O(1)
