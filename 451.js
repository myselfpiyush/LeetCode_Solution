// 451. Sort Characters By Frequency

var frequencySort = function (s) {
  let map = new Map();

  for (let i of s) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i) + 1);
    }
  }
  let newMap = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let newStr = newMap.map((pair) => pair[0].repeat(pair[1])).join("");
  return newStr;
};

frequencySort("tree");
