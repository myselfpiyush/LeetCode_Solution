// 530. Minimum Absolute Difference in BST

var getMinimumDifference = function (root) {
  let prev = Infinity;
  let min = Infinity;

  let helper = (node) => {
    if (!root) return;

    helper(node.left);
    min = Math.min(min, Math.abs(mode.val - prev));
    prev = node.val;
    helper(node.right);
  };

  helper(root);
  return min;
};
