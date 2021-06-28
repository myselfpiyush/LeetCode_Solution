// 78. Subsets

var subsets = function (nums) {
  let result = [];
  let arr = [];
  let i = 0;
  let helper = (nums, i, arr) => {
    if (i === nums.length) {
      result.push(arr);
      return;
    }
    // take it
    helper(nums, i + 1, [...arr, nums[i]]);
    //don't take
    helper(nums, i + 1, arr);
  };
  helper(nums, i, arr);

  return result;
};

subsets([1, 2, 3]);

//            1 2 3
// 		  /           \
//     	1 			     []
//       /     \           /.  \
//     1 2	     1	       2.    []
//    /  \		/ \       / \    / \
// 123.   12. 13. 1.    23. 2. 3. []
