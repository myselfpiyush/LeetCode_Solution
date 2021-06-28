// 322. Coin Change

// T.C :- O(amount * coins)
// S.C :- O(amount + 1)

var coinChange = function (coins, amount) {
  // array[i] represents the least amount of coins that can make the value equals to the i
  /*
  here we create amount + 1 array because first we consider each index as small amount and
  0 index we need no coin and if the ith value is same as the coin value then i - coin is 0 which means that
  the this amount of coin is present in the coins array
   */
  const array = Array(amount + 1).fill(Infinity);
  array[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        array[i] = Math.min(array[i], array[i - coin] + 1);
      }
    }
  }

  return array[amount] === Infinity ? -1 : array[amount];
};

coinChange([1, 2, 5], 11);
