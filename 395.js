// 395. Longest Substring with At Least K Repeating Characters

var longestSubstring = function (s, k) {
  let helper = (s) => {
    let map = new Map();

    // counting the number of alphabets
    for (let i = 0; i < s.length; i++) {
      if (!map.has(s[i])) {
        map.set(s[i], 1);
      } else {
        map.set(s[i], map.get(s[i]) + 1);
      }
    }
    // finding out the alphabet which have count less than k
    let invalid = [];
    for (let [char, count] of map) {
      if (count < k) {
        invalid.push(char);
      }
    }
    // if there is no invalid character or alphabet which have count less than k
    if (!invalid.length) return s.length;

    let splitter = invalid.join("");

    /*
    RegExp
    Regular expressions are used to perform pattern-matching
    and "search-and-replace" functions on text.
    Generally RegExp provided the expression across which  the splitting takes place with the help of 
    split method
    */

    /*
    this example is only for first loop running
   if splitter = c then regExp = /[c]/
   which helps to split the string across c, if string='ababacb' then
   subStrArray=[ 'ababa', 'b' ]
    */
    let regExp = new RegExp(`[${splitter}]`);
    let subStringArray = s.split(regExp);

    let max = 0;

    for (let subString of subStringArray) {
      let len = helper(subString);
      max = Math.max(max, len);
    }

    return max;
  };
  return helper(s);
};

longestSubstring("ababacbd", 3);
