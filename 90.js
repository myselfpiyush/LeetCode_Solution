// 90. Subsets II

// https://www.youtube.com/watch?v=mcg4qKbAmmY

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let n = nums.length;
  let arr = [];
  let result = [];
  let prev;
  let helper = (nums, i, arr, prev) => {
    if (i === n) {
      result.push(arr);
      return;
    }

    helper(nums, i + 1, arr, false);

    if (i > 0 && nums[i] === nums[i - 1] && !prev) {
      return;
    }
    helper(nums, i + 1, [...arr, nums[i]], true);
  };

  helper(nums, i, arr, false);
  //   console.log(result);
  return result;
};

subsetsWithDup([1, 2, 2]);
