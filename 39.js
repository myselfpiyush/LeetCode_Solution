// 39. Combination Sum

var combinationSum = function (candidates, target) {
  let result = [];
  let findCombination = (remain, path, start) => {
    if (remain < 0) {
      return;
    }
    if (remain === 0) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      findCombination(remain - candidates[i], [...path, candidates[i]], i);
    }
  };
  findCombination(target, [], 0);
  //   console.log(result);
  return result;
};

combinationSum([2, 3, 6, 7], 7);
