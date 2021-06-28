// 589. N-ary Tree Preorder Traversal

var preorder = function (root) {
  let arr = [];
  if (!root) return [];

  let helper = (node) => {
    if (!node) return;

    arr.push(node.val);

    node.children.forEach((child) => {
      helper(child);
    });
  };

  helper(root);
  return arr;
};
