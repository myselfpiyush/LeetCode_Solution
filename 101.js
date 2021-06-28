// 101. Symmetric Tree

var isSymmetric = function (root) {
  let helper = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

    return (
      node1.val === node2.val &&
      helper(node1.left, node2.right) &&
      helper(node1.right, node2.left)
    );
  };

  return helper(root, root);
};
