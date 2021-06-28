// 725. Split Linked List in Parts

var splitListToParts = function (root, k) {
  let result = [];
  let len = findLength(root);

  while (k > 0) {
    let num = Math.ceil(len / k);
    createSubList(num);
    len = len - num;
    k--;
  }

  return result;

  function createSubList(n) {
    let prev = null;
    let current = root;
    for (let i = 0; i < n; i++) {
      prev = current;
      current = current.next;
    }
    if (prev) prev.next = null;

    result.push(root);

    root = current;
  }
};

let findLength = (head) => {
  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }

  return count;
};
