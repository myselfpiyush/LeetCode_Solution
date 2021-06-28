// 80. Remove Duplicates from Sorted Array II

var removeDuplicates = function (nums) {
  let len = nums.length;
  let i = 1;
  let count = 1;
  // count = 1 because our index is starting from 1 which means we already see that element
  while (i < len) {
    if (nums[i] == nums[i - 1]) {
      count++;
    }
    if (nums[i] != nums[i - 1]) {
      count = 1;
    }
    if (count > 2) {
      nums.splice(i, 1);
      i--;
    }
    i++;
    len = nums.length; // we also computing the length because after splice the length decrease
  }
};

removeDuplicates([1, 1, 1, 2, 2, 3, 3]);
