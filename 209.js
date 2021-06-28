// 209. Minimum Size Subarray Sum

var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let result = Number.POSITIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    while (sum >= target) {
      result = Math.min(result, i + 1 - left);
      sum = sum - nums[left];
      left++;
    }
  }

  return result !== Number.POSITIVE_INFINITY ? result : 0;
};
