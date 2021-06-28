// 897. Increasing Order Search Tree

var increasingBST = function (root) {
  let result = [];
  let dummyNode = new TreeNode(0);
  let returnNode = dummyNode;

  let inOrder = (node) => {
    if (!node) return;
    inOrder(node.left);
    node.left = null;
    dummyNode.right = node;
    dummyNode = dummyNode.right;

    inOrder(node.right);
  };
  inOrder(root);
  return returnNode.right;
};
