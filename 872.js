// 872. Leaf-Similar Trees

var leafSimilar = function (root1, root2) {
  let sequenceOne = [];
  let sequenceTwo = [];

  let helper = (node, arr) => {
    if (node === null) return;

    if (node.left == null && node.right == null) {
      arr.push(node.val);
    }
    helper(node.left, arr);
    helper(node.right, arr);
  };

  helper(root1, sequenceOne);
  helper(root2, sequenceTwo);
  if (sequenceOne.length !== sequenceTwo.length) {
    return false;
  } else {
    for (let i in sequenceOne) {
      if (sequenceOne[i] !== sequenceTwo[i]) {
        return false;
      }
    }
  }
  return true;
};
