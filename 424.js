// 424. Longest Repeating Character Replacement

var characterReplacement = function (s, k) {
  let len = s.length;
  let left = 0,
    right = 0,
    mostFrequency = 0;
  max = 0;
  let frequency = {};

  for (right = 0; right < len; right++) {
    frequency[s[right]] = frequency[s[right]] + 1 || 1;

    mostFrequency = Math.max(mostFrequency, frequency[s[right]]);

    // right - left =====> it is the length of the sliding window

    /* right - left - mostFrequency + 1 ===> from sliding window we subtract the mostFrequency which are same
       number Character the result produced are the different characters */

    // add 1 because we add new letter through each loop

    // right - left - mostFrequency + 1 === different alphabet in a substring

    /* If the length - mostFreq > k, this means we exceeded our operation limit to make the current window
       a valid string. Thus, we need to shrink left pointers.*/

    while (right - left - mostFrequency + 1 > k) {
      // if the left is greater than k it means the substring have more than k different elements
      /* here we update the "frequency" when windows move after " left++ " so that we have real time data of the {}
         for that particular substring */

      frequency[s[left]] = frequency[s[left]] - 1;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
};

characterReplacement("AABABBA", 1);
