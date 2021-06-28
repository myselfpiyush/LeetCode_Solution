// 572. Subtree of Another Tree

var isSubtree = function (s, t) {
  if (s === null) return false;
  else if (helper(s, t)) {
    return true;
  } else {
    return isSubtree(s.left, t) || isSubtree(s.right, t);
  }
};

let helper = (s, t) => {
  if (!s && !t) return true;
  if (!s || !t) return false;
  return s.val === t.val && helper(s.left, t.left) && helper(s.right, t.right);
};
