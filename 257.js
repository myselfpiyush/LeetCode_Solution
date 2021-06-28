// 257. Binary Tree Paths

var binaryTreePaths = function (root) {
  if (!root) return [];
  return objOfGetHelper(root, "", []);
};

function getHelper(node, path, result) {
  path += node.val;

  if (!node.left && !node.right) {
    result.push(path);
  }
  if (node.left) {
    getHelper(node.left, path + "->");
  }
  if (node.right) {
    getHelper(node.right, path + "->");
  }

  return result;
}
