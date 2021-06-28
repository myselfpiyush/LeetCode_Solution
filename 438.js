// 438. Find All Anagrams in a String

var findAnagrams = function (s, p) {
  let result = [];
  let mainStr = s.length;
  let comparingStr = p.length;
  let p_sorted = sorting(p);
  let memo = {};

  for (let i = 0; i <= mainStr - comparingStr; i++) {
    let current = s.slice(i, i + comparingStr);

    if (memo[current]) {
      result.push(i);
      continue;
    }

    if (sorting(current) === p_sorted) {
      result.push(i);
      memo[current] = 1;
    }
  }
  return result;
};

let sorting = (str) => {
  return str.split("").sort().join("");
};

findAnagrams("cbaebabacd", "abc");
