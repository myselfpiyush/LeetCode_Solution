// 653. Two Sum IV - Input is a BST

var findTarget = function (root, k) {
  let set = new Set();

  let helper = (node, k) => {
    if (!node) return;

    if (set.has(k - node.val)) return true;
    set.add(node.val);

    return helper(node.left, k) || helper(node.right, k);
  };

  return helper(root, k) || false;
};
