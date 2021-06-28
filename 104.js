// 104. Maximum Depth of Binary Tree

var maxDepth = function (root) {
  if (root === null) return 0;

  let LeftNode = maxDepth(root.left);
  let rightNode = maxDepth(root.right);

  return Math.max(LeftNode, rightNode) + 1;
};
