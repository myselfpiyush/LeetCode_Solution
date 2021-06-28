// 287. Find the Duplicate Number

// Floyd's Cycle Finding Algorithm

// https://www.codingninjas.com/blog/2020/09/09/floyds-cycle-detection-algorithm/

var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  // in the do while loop we trying to make a linked list

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

findDuplicate([1, 1, 2]);
