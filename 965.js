// 965. Univalued Binary Tree

var isUnivalTree = function (root) {
  let value = root.val;

  let helper = (node, value) => {
    if (node === null) return true;
    return (
      node.val === value &&
      helper(node.left, value) &&
      helper(node.right, value)
    );
  };

  return helper(root, value);
};
