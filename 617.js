// 617. Merge Two Binary Trees

var mergeTrees = function (root1, root2) {
  if (root1 === null && root2 === null) return null;

  if (root1 === null && root2 !== null) return root2;

  if (root1 !== null && root2 === null) return root1;

  let sum = new TreeNode(root1.val + root2.val);

  sum.left = mergeTrees(root1.left, root2.left);
  sum.right = mergeTrees(root1.right, root2.right);

  return sum;
};
