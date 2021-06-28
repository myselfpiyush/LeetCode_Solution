// 24. Swap Nodes in Pairs

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  let node = new ListNode(null);
  node.next = head;
  let previous = node;

  while (previous.next && previous.next.next) {
    let first = previous.next;
    let second = previous.next.next;

    first.next = second.next;
    second.next = first;
    previous.next = second;

    previous = first;
  }

  return node;
};
