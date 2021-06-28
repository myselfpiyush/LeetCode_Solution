// 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
  let str = s.split("");
  let set = new Set();
  let i = 0;
  let j = 0;
  let max = 0;
  while (i < str.length) {
    if (!set.has(str[i])) {
      set.add(str[i]);
      max = Math.max(max, set.size);
      i++;
    } else {
      set.delete(str[j]);
      j++;
    }
  }

  return max;
};
lengthOfLongestSubstring("abcabcbb");
