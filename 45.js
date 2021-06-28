// 45. Jump Game II

var jump = function (nums) {
  let n = nums.length;
  let jumps = 1;

  if (nums[0] === 0 || n === 1) {
    return 0;
  }

  let farthest = nums[0];
  let current = nums[0];

  for (let i = 1; i < n; i++) {
    if (i === n - 1) {
      return jumps;
    }
    farthest = Math.max(farthest, i + nums[i]);
    if (i === current) {
      jumps++;
      current = farthest;
    }
  }

  return jumps;
};
