// 316. Remove Duplicate Letters

// link for concept understanding
// https://www.youtube.com/watch?v=2ayws5Y-WM4

// link for code understanding
// https://leetcode.com/problems/remove-duplicate-letters/discuss/977608/Use-stack-to-solve-by-JS-94.89-fast-100-less-memory-with-explaination

var removeDuplicateLetters = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // if s[i] already appears in stack, jump to next loop
    if (stack.indexOf(char) > -1) continue;

    while (
      /* when stack is not empty , we are checking this condition so to confirm its length exist
        and we pop out element */
      stack.length > 0 &&
      // when top of stack letter is greater than current character
      stack[stack.length - 1] > char &&
      // checking that top of stack letter still appears in "s" not iterated yet on these letters
      s.indexOf(stack[stack.length - 1], i) > i
      /* in indexOf we also allot the second argument 'i' which specifies the searching
       of the specified char starts from 'i' in the string */
    ) {
      // remove top of stack
      stack.pop();
    }

    // put s[i] into top of stack
    stack.push(char);
  }

  return stack.join("");
};

removeDuplicateLetters("cbacdcbc");
