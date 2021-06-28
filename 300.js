// 300. Longest Increasing Subsequence

// Time: O(N Log N)
// Space: O(N)

var lengthOfLIS = function (nums) {
  const array = Array(nums.length).fill(Infinity);

  function binarySearch(target) {
    let low = 0;
    let high = array.length - 1;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (array[mid] >= target) high = mid;
      else low = mid + 1;
    }
    return low;
  }

  for (let n of nums) {
    const idx = binarySearch(n);
    array[idx] = n;
  }
  const result = array.indexOf(Infinity);
  return result === -1 ? nums.length : result;
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
