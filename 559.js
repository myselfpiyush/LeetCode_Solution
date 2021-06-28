// 559. Maximum Depth of N-ary Tree

var maxDepth = function (root) {
  let maxDepth = 0;

  const findingDepth = (node, depth) => {
    if (root === null) return depth;
    // OR
    if (root === null) return;

    depth += 1;

    maxDepth = depth > maxDepth ? depth : maxDepth;
    // OR
    // if (depth > maxDepth) {
    //     maxDepth = depth;
    // }

    node.children.forEach((child) => {
      findingDepth(child, depth);
    });
  };

  findingDepth(root, 0);

  return maxDepth;
};
