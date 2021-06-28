// 1022. Sum of Root To Leaf Binary Numbers

var sumRootToLeaf = function (root) {
  let helper = (node, str) => {
    if (node === null) return 0;

    str += node.val;
    if (!node.left && !node.right) return parseInt(str, 2);
    return helper(node.left, str) + helper(node.right, str);
  };
  helper(root, "");
};
