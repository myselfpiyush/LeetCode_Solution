// 75. Sort Colors

var sortColors = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  for (let i = 0; i <= high; i++) {
    if (nums[i] === 0) {
      [nums[low], nums[i]] = [nums[i], nums[low]];
      low++;
    } else if (nums[i] === 2) {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
      i--;
    }
  }
  //   console.log(nums);
};

sortColors([2, 0, 1]);
