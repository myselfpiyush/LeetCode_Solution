// 131. Palindrome Partitioning

// Time Complexity : O(N * 2^(N-1))
// Space Complexity: O(2^(N-1))

var partition = function (s) {
  // by this function we are checking the string is palindrome or not
  let isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;

      left++;
      right--;
    }
    return true;
  };

  let result = [];

  let find = (array, str) => {
    // if the str length not exist then we push the final array in the result
    if (!str.length) result.push(array);

    for (let i = 1; i <= str.length; i++) {
      let subString = str.slice(0, i);
      if (isPalindrome(subString)) {
        find([...array, subString], str.slice(i));
      }
    }
  };

  find([], s);
  return result;
};
