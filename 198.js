// 198. House Robber

var rob = function (nums) {
  const myrobObj = myrob();
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(...nums);
  let a = myrobObj(nums, 0, nums.length - 2, {});
  let b = myrobObj(nums, 1, nums.length - 1, {});

  return Math.max(a, b);
};

function myrob() {
  return function myrobDP(nums, i, ending, mem) {
    if (i in mem) {
      return mem[i];
    } else {
      if (i > ending) return 0;
      else {
        mem[i] = Math.max(
          myrobDP(nums, i + 2, ending, mem) + nums[i],
          myrobDP(nums, i + 1, ending, mem)
        );
        return mem[i];
      }
    }
  };
}

rob([2, 3]);
