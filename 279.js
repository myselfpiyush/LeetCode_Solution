// 279. Perfect Squares

//It is solved by using Lagrange's theorem

// https://leetcode.com/problems/perfect-squares/discuss/476318/Math-solution-explained%3A-Beats-100-Javascript-%2B-Whiteboard
// https://www.youtube.com/watch?v=1xfx6M_GqFk

// Time Complexity :- O(√n) this is under root n

var numSquares = function (n) {
  if (isSquare(n)) {
    return 1; //its equal to itself
  }

  // Legendre's three square theorem: A natural number n can be represented as
  // the sum of AT MOST three squares of integers if and only if : n!= 4^x ( 8*m+7)
  while (n % 4 == 0) {
    n = n / 4;
  }

  if (n % 8 == 7) {
    return 4;
  }

  // Manually checking for result 2, because Legendre states  AT MOST 3,
  // so 2 is possible as well
  for (let i = 1; i <= n; i++) {
    // we can also use  Math.floor(Math.sqrt(n)) in place of n in i <= n
    // that's why it's time complexity is O(√n) because of travelling only Math.sqrt(n) as it's the worst comparing to others like 4,3,1 's methods
    if (isSquare(n - i * i)) {
      // here we subtract i*i (which is a square) from n and checking  the remaining from
      return 2; // n-i*i is also a square or not if it's square then n is formed by the sum two numbers which are perfect square
    }
  }

  return 3;
};

let isSquare = (x) => {
  return Math.floor(Math.sqrt(x)) ** 2 === x;
};

numSquares(12);
