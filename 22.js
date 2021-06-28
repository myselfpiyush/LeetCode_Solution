// 22. Generate Parentheses

// https://www.youtube.com/watch?v=sz1qaKt0KGQ  ==> for understanding  the concept

// https://www.youtube.com/watch?v=N-3fyoKD8-k  ==> for code

var generateParenthesis = function (n) {
  let result = [];

  let helper = (result, str, open, close, n) => {
    if (str.length == 2 * n) {
      result.push(str);
      return;
    }

    if (open < n) {
      helper(result, str + "(", open + 1, close, n);
    }
    if (close < open) {
      helper(result, str + ")", open, close + 1, n);
    }
  };

  helper(result, "", 0, 0, n);
  return result;
};

generateParenthesis(3);
