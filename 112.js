// 112. Path Sum

var hasPathSum = function (root, targetSum) {
  let helper = (node, sum) => {
    if (node === null) return false;

    if (sum === node.val && node.left === null && node.right === null) {
      return true;
    }

    return (
      helper(node.left, sum - node.val) || helper(node.right, sum - node.val)
    );
  };

  return helper(root, targetSum);
};
