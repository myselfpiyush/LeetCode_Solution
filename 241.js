// 241. Different Ways to Add Parentheses

//  For concept understanding
// https://www.youtube.com/watch?v=binXv9-uT3A

var diffWaysToCompute = function (expression) {
  let result = [];

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    if (char === "+" || char === "-" || char === "*") {
      let left = diffWaysToCompute(expression.slice(0, i));
      let right = diffWaysToCompute(expression.slice(i + 1));
      //   console.log("left : " + left);
      //   console.log("right : " + right);
      for (let leftValue of left) {
        for (let rightValue of right) {
          switch (char) {
            case "+":
              result.push(Number(leftValue) + Number(rightValue));
              break;
            case "-":
              result.push(Number(leftValue) - Number(rightValue));
              break;
            case "*":
              result.push(Number(leftValue) * Number(rightValue));
              break;
          }
        }
      }
      //   console.log("result", result);
    }
  }

  if (!result.length) return [expression];
  // we return expression as [expression] because we are reading everything as array
  // if single element returns we can read it as array

  return result;
};

diffWaysToCompute("2*3-4*5");
