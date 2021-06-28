// 111. Minimum Depth of Binary Tree

var minDepth = function (root) {
  let result;
  if (!root) return null;

  let helper = (node) => {
    if (node === null) return 0;

    let a = helper(node.left);
    let b = helper(node.right);

    result = 1 + ((a && b && Math.min(a, b)) || a || b);

    return result;
  };

  helper(root);
  return result;
};
