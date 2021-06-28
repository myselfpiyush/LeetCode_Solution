// 309. Best Time to Buy and Sell Stock with Cooldown

// For code and concept understanding
// https://www.youtube.com/watch?v=N-zlfQJWbYE

var maxProfit = function (prices) {
  let map = new Map();
  /* second argument indicate that if it is 0 then we are in the situation that we already buy the stock
    and if it is 1 then we are in the situation of selling the stock */
  let helper = (i, buyOrSell, prices, map) => {
    if (i >= prices.length) {
      return 0;
    }
    let key = i + "maxProfit" + buyOrSell;

    let max = 0;
    if (map.has(key)) {
      return map.get(key);
    }

    if (buyOrSell === 0) {
      let buy = helper(i + 1, 1, prices, map) - prices[i];
      let noBuy = helper(i + 1, 0, prices, map);
      max = Math.max(buy, noBuy);
    } else {
      let sell = helper(i + 2, 0, prices, map) + prices[i];
      let noSell = helper(i + 1, 1, prices, map);

      max = Math.max(sell, noSell);
    }

    map.set(key, max);

    return max;
  };

  return helper(0, 0, prices, map);
};
