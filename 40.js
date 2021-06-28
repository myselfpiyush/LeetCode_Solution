// 40. Combination Sum II

var combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  let findCombination = (remain, path, start) => {
    if (remain === 0) {
      result.push([...path]);
      return;
    }

    for (
      let i = start;
      i < candidates.length && remain - candidates[i] >= 0;
      i++
    ) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      findCombination(remain - candidates[i], [...path, candidates[i]], i + 1);
    }
  };
  findCombination(target, [], 0);
  console.log(result);
  //   return result;
};

// --------------OR----------------------------

var combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  let findCombination = (remain, path, start) => {
    if (remain === 0) {
      result.push([...path]);
      return;
    }
    if (remain < 0) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      findCombination(remain - candidates[i], [...path, candidates[i]], i + 1);
    }
  };
  findCombination(target, [], 0);
  return result;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
