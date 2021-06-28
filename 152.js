// 152. Maximum Product Subarray

var maxProduct = function (nums) {
  if (nums.length < 1) return nums[0];

  let result = nums[0];
  let currentMin = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      let temp = currentMax;
      currentMax = currentMin;
      currentMin = temp;
    }
    currentMax = Math.max(nums[i] * currentMax, nums[i]);
    currentMin = Math.min(nums[i] * currentMin, nums[i]);

    result = Math.max(result, currentMax);
  }

  return result;
};

maxProduct([-2, 0, -1]);
