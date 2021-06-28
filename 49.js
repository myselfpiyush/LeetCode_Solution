// 49. Group Anagrams

var groupAnagrams = function (strs) {
  let map = new Map();

  for (let i of strs) {
    let str = i.split("").sort().join("");

    if (!map.get(str)) {
      map.set(str, []);
    }

    map.get(str).push(i);
  }

  return Array.from(map.values());
};

groupAnagrams(["eat", "tea"]);
// , "tan", "ate", "nat", "bat"
