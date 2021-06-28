// 543. Diameter of Binary Tree

var diameterOfBinaryTree = function (root) {
  let ans = 0;
  getHelper(root);
  return ans === 0 ? 0 : ans - 1;
};

let getHelper = (node) => {
  if (node === null) return 0;

  let leftNode = getHelper(node.left);
  let rightNode = getHelper(node.right);

  ans = Math.max(ans, leftNode + rightNode + 1);

  return Math.max(leftNode, rightNode) + 1;
};
