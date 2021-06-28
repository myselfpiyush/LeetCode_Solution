// 590. N-ary Tree Postorder Traversal

var postorder = function (root) {
  let arr = [];

  let helper = (node) => {
    if (node === null) return;

    node.children.forEach((child) => {
      helper(child);
    });
    arr.push(node.val);
  };

  helper(root);
  return arr;
};
