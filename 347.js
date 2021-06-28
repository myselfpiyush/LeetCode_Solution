// 347. Top K Frequent Elements

var topKFrequent = function (nums, k) {
  let map = new Map();
  let result = [];
  for (let i of nums) {
    if (!map.has(i)) {
      map.set(i, 0);
    }
    map.set(i, map.get(i) + 1);
  }

  let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sortedArray[i][0]);
  }
  return result;
};

topKFrequent([1, 1, 2, 2, 2, 3], 0);
