// 567. Permutation in String

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let s1Count = new Array(26).fill(0);
  let window = new Array(26).fill(0);

  for (let char of s1) {
    let id = char.charCodeAt() - 97;
    s1Count[id]++;
  }

  // construct window

  for (let i = 0; i < s1.length; i++) {
    let id = s2[i].charCodeAt() - 97;
    window[id]++;
  }
  let start = 0;
  let end = s1.length - 1;
  /*
  end is equal to this because we already done some work on the window
  array in the upper for loop and "while" will continue it further
  we can't do all the work in while because by the upper for loop we get some content of the same length of s1
   in window to add and remove items in it
  */

  while (end < s2.length) {
    if (window.join("") === s1Count.join("")) return true;

    end++;

    if (end === s2.length) break;

    let startIndex = s2[start].charCodeAt() - 97;
    let endIndex = s2[end].charCodeAt() - 97;

    window[startIndex]--;
    window[endIndex]++;

    start++;
  }
  return false;
};

checkInclusion("ab", "eidbaooo");
