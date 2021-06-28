// 404. Sum of Left Leaves

var sumOfLeftLeaves = function (root) {
  let sum = 0;
  if (root === null) return null;

  let helper = (node) => {
    if (node === null) return;
    if (node.left && node.left.left === null && node.left.right === null) {
      sum += node.left.val;
    }
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  return sum;
};
