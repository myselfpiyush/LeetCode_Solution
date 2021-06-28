// 993. Cousins in Binary Tree

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isCousins = function (root, x, y) {
  const map = new Map();

  const traverse = (node, level, parent) => {
    if (node === null) return;

    if (node.val === x || node.val === y) {
      map.set(node.val, { level, parent });
    }
    traverse(node.left, level + 1, node);
    traverse(node.right, level + 1, node);
  };

  traverse(root, 0, new TreeNode(-1));

  //   return (
  //     map.get(x).level === map.get(y).level &&
  //     map.get(x).parent !== map.get(y).parent
  //   );
  console.log(
    map.get(x).level === map.get(y).level &&
      map.get(x).parent !== map.get(y).parent
  );
};

isCousins([1, 2, 3, 4]);
