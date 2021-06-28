// 31. Next Permutation

// https://www.youtube.com/watch?v=TOvWyFT0xCw


var nextPermutation = function (nums) {
  let idx = -1;
  for (i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      idx = i;
      break;
    }
  }
  if (idx === -1) {
    nums.reverse();
  } else {
    prev = idx;
    for (i = idx + 1; i < nums.length; i++) {
      if (nums[i] > nums[idx - 1] && nums[i] <= nums[prev]) {
        prev = i;
      }
    }
    [nums[idx - 1], nums[prev]] = [nums[prev], nums[idx - 1]];
    let left = idx;
    let right = nums.length - 1;

    while (left < right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      left++;
      right--;
    }

    // console.log(nums);
  }
};

nextPermutation([1, 3, 2]);
// [1, 5, 8, 4, 7, 6, 5, 3, 1]
