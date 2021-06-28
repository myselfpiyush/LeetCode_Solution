// 396. Rotate Function

var maxRotateFunction = function (nums) {
  if (!nums) return 0;
  let len = nums.length;
  let only_nums_sum = 0;
  let first_sum = 0;

  for (let i = 0; i < len; i++) {
    only_nums_sum += nums[i];
    first_sum += i * nums[i];
  }

  let each_sum = first_sum;
  let max_sum = first_sum;
  for (let j = len - 1; j > 0; j--) {
    // here j ends before = to 0 because for 0 we already calculated the sum in above for loop as first_sum

    each_sum = each_sum + only_nums_sum - len * nums[j];

    max_sum = Math.max(each_sum, max_sum);
  }

  // console.log(max_sum);

  return max_sum;
};

maxRotateFunction([4, 3, 2, 6]);
