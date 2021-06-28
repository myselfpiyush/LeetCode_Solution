// 110. Balanced Binary Tree

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isBalanced = function (root) {
  if (root === null) {
    return true;
  }

  return getHeight(root) !== -1;
};
let getHeight = (node) => {
  if (node === null) {
    return 0;
  }

  let left = getHeight(node.left);
  let right = getHeight(node.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
};

isBalanced([1, 2, 2, 3, 3, null, null, 4, 4]);
