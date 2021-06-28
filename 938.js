// 938. Range Sum of BST

var rangeSumBST = function (root, low, high) {
  if (!root) return null;

  let sum = 0;

  let helper = (node) => {
    if (node === null) return;

    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    helper(node.left);
    helper(node.right);
  };

  helper(root);

  return sum;
};
