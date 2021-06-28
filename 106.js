// 106. Construct Binary Tree from Inorder and Postorder Traversal

var buildTree = function (inorder, postorder) {
  let helper = (inorder) => {
    if (inorder.length === 0) return null;

    const root = new TreeNode(postorder.pop());

    const index = inorder.indexOf(root.val);

    root.right = helper(inorder.slice(index + 1));

    root.left = helper(inorder.slice(0, index));

    return root;
  };
  return helper(inorder);
};
