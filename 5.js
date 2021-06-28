// 5. Longest Palindromic Substring

// there are two cases in palindrome
//  first :- abba ==> ab ba
//  second :- racecar => rac e car

var longestPalindrome = function (s) {
  let longest = "";

  if (s == null || s.length < 1) return "";

  let helper = (str, left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    let strOne = helper(s, i, i); // case for racecar
    let strTwo = helper(s, i, i + 1); // case for abba
    let longerPalindrome = strOne.length > strTwo.length ? strOne : strTwo;

    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
};

longestPalindrome("babad");
