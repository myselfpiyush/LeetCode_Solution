// 93. Restore IP Addresses

var restoreIpAddresses = function (s) {
  let result = [];

  let helper = (s, array) => {
    if (array.length === 3) {
      /*here we check the array have 3 elements then we are checking  is the
         remaining string or fourth element is valid or not to fit in the array */
      if (isValid(s)) result.push([...array, s]);
      return;
    }

    for (let i = 1; i < 4; i++) {
      let str = s.slice(0, i);
      if (!isValid(str)) continue;

      helper(s.slice(i), [...array, str]);
    }
  };

  let isValid = (str) => {
    if (Number(str) > 255 || !str.length) return false;
    if (str.length > 1 && str[0] === 0) return false;
    /* here we doesn't want that our any digit(s) number contain 0 at the first place 
       like :-    012 , 0223  */
    return true;
  };

  helper(s, []);
  result = result.map((x) => x.join("."));
  return result;
};

restoreIpAddresses("25525511135");
