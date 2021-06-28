// 227. Basic Calculator II

var calculate = function (s) {
  let num = "";
  let stack = [];
  let sign = ""; // by default we take + sign because it helps us to put in stack

  /* in the below for loop I used '=' which shows undefined when i reached the s.length but for isNaN it shows true
 for the undefined value and we use this because the last sign we store in the sign variable is not processed due
  to the end of for loop by this '=' it run for the undefined value and we processed the whole values */

  /* simply when all values end up then this '=' helps and we enter in the if(isNaN(s[i])) condition as we already
  have the num and sign but we want to enter this if condition to process only the last value*/
  for (let i = 0; i <= s.length; i++) {
    //handle space

    if (s[i] === " ") continue;

    //if its  a number
    if (!isNaN(s[i])) num += s[i];

    //if we have a  sign + - / *
    if (isNaN(s[i])) {
      num = Number(num);
      // when a sign comes then we perform stack process for previous sign
      // sign is what previous sign we get
      switch (sign) {
        case "+":
          stack.push(num);
          break;

        case "-":
          //we push any values after the subtraction sign as negative
          stack.push(-num);
          break;

        case "*":
          //we pop the stack then multiply and push back
          stack.push(stack.pop() * num);
          break;

        case "/":
          //we pop the stack then divide and push back
          stack.push(parseInt(stack.pop() / num));
          break;
        /*  Math.floor(-3/2)  output => -2
            parseInt(-3/2, 10)  output => -1
            Thats why we use parseInt here  */
      }
      // update sign with previous sign
      sign = s[i];

      // we reset num
      num = "";
    }
  }
  // in the stack we only have + or - integers as we already done the multiply and divide task
  //we reduce the array adding positive and negative numbers

  return stack.reduce((a, b) => {
    return a + b;
  }, 0);
};

calculate("3+2*2/5-6");
