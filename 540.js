// 540. Single Element in a Sorted Array

var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  let helper = (left, right) => {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
        return nums[mid];
      }

      let a = helper(left, mid - 1);
      let b = helper(mid + 1, right);

      if ((a == 0 && b == undefined) || (a == undefined && b == 0)) {
        return 0;
      }
      /*
      if we pass 0 with undefined in the or (||) condition the undefined is the
      output thats why to overcome this we use the above if condition
      */
      return a || b;
    }
  };
  return helper(left, right);
};

singleNonDuplicate([0, 1, 1]);
