// 226. Invert Binary Tree

var invertTree = function (root) {
  if (root === null) return null;

  const leftNode = invertTree(root.left);
  const rightNode = invertTree(root.right);

  root.right = leftNode;
  root.left = rightNode;

  return root;
};
