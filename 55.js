// 55. Jump Game

var canJump = function (nums) {
  let n = nums.length;
  let lastGoodPosition = n - 1;

  for (let i = n - 1; i >= 0; i--) {
    if (i + nums[i] >= lastGoodPosition) {
      lastGoodPosition = i;
    }
  }
  return lastGoodPosition === 0;
};
