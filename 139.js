// 139. Word Break

var wordBreak = function (s, wordDict) {
  let map = new Map();
  let canStringBrokeDown = false;

  let helper = (str) => {
    if (map.has(str)) {
      return map.get(str);
    }
    /* str.length === 0 means that we successfully get all the combination from the string as same as in
    the wordDict and we reach the end of the string */
    if (str.length === 0) {
      canStringBrokeDown = true;
    }
    for (let i = 1; i <= str.length; i++) {
      let left = str.substring(0, i);

      if (wordDict.includes(str.substring(0, i))) {
        map.set(str, true);
        helper(str.substring(i));
      }
    }
  };

  helper(s);
  return canStringBrokeDown;
};

wordBreak("leetcode", ["leet", "code"]);
