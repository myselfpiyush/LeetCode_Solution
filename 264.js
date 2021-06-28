// 264. Ugly Number II

// https://www.youtube.com/watch?v=kSDI_iOiGQY link for concept understanding

// https://www.youtube.com/watch?v=uLctkg4Yf8M link for code understanding

var nthUglyNumber = function (n) {
  let ugly_list = [1];

  let two_position = 0;
  let three_position = 0;
  let five_position = 0;

  while (ugly_list.length < n) {
    by2 = ugly_list[two_position] * 2;
    by3 = ugly_list[three_position] * 3;
    by5 = ugly_list[five_position] * 5;

    let minimum = Math.min(by2, by3, by5);

    ugly_list.push(minimum);

    if (minimum == by2) {
      two_position++;
    }
    if (minimum == by3) {
      three_position++;
    }
    if (minimum == by5) {
      five_position++;
    }
  }

  return ugly_list[n - 1];
};
