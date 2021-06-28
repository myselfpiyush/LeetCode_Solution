// 454. 4Sum II

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let len = nums1.length;
  let map = new Map();
  let count = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let sum = nums3[i] + nums4[j];
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let sum = nums1[i] + nums2[j];
      if (map.has(-sum)) {
        count += map.get(-sum);
      }
    }
  }

  return count;
};
