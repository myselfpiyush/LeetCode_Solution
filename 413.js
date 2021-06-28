// 413. Arithmetic Slices

// https://www.youtube.com/watch?v=IShCyNmsoL8  for concept understanding only

var numberOfArithmeticSlices = function (nums) {
  len = nums.length;

  if (len <= 2) return 0;
  if (len === 3) return 1;
  let sum = 0;
  let count = 0;
  let i = 1;

  while (i < len) {
    if (nums[i] - nums[i - 1] === nums[i + 1] - nums[i]) {
      /* here we implement the dynamic programing concept of using the previous subproblem solution
         for the next subproblem, in the below code line we update the the count by using the previous count value */

      count = count + 1;
      sum = sum + count;
    } else {
      count = 0;
    }
    i++;
  }

  return sum;
};

numberOfArithmeticSlices([1, 2, 3, 4, 5]);
