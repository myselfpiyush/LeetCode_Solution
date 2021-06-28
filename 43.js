// 43. Multiply Strings

var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let x = num1.length;
  let y = num2.length;

  let result = new Array(x + y).fill(0);

  for (i = x - 1; i >= 0; i--) {
    for (j = y - 1; j >= 0; j--) {
      let point_1 = i + j;
      let point_2 = i + j + 1;
      let sum = result[point_2] + Number(num1[i]) * Number(num2[j]);

      result[point_2] = sum % 10;
      result[point_1] += Math.floor(sum / 10);
    }
  }

  if (result[0] === 0) {
    result.shift();
  }
  return result.join("");
};
