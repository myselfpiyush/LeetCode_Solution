// 105. Construct Binary Tree from Preorder and Inorder Traversal

var buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null;

  const root = new TreeNode(preorder.shift());

  const index = inorder.indexOf(root.val);

  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));

  return root;
};
