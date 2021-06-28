// 18. 4Sum

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) {
            left += 1;
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right -= 1;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }

    while (nums[i] === nums[i + 1]) i++;
  }

  console.log(result);
};

fourSum([1, 0, -1, 0, -2, 2], 0);
