// 15. 3Sum

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue; // skip same elements to avoid duplicate triplets
    }
    let start = i + 1,
    var end = nums.length - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];

      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while (start < end && nums[start] === nums[start - 1]) {
          start += 1; // skip same elements to avoid duplicate triplets
        }
        while (start < end && nums[end] === nums[end + 1]) {
          end -= 1; // skip same elements to avoid duplicate triplets
        }
      } else if (sum < 0) {
        start++;
      } else {
        end--;
      }
    }
  }

  return result;
};
