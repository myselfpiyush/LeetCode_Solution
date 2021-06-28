// 700. Search in a Binary Search Tree

var searchBST = function (root, val) {
  let arr = [];

  if (root === null) return null;
  if (root.val === val) return root;
  else if (val < root.val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};
