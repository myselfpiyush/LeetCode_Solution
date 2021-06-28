// 1171. Remove Zero Sum Consecutive Nodes from Linked List

// https://www.youtube.com/watch?v=tss5biw6ctI   (only see the concept not the code from the respective video)

var removeZeroSumSublists = function (head) {
  if (!head) return head;

  let node = new ListNode(0);

  node.next = head;
  const map = new Map();
  let current = node;
  let sum = 0;

  while (current) {
    sum += current.val;
    map.set(sum, current);
    current = current.next;
  }

  current = node;
  sum = 0;

  while (current) {
    sum += current.val;
    current.next = map.get(sum).next;
    current = current.next;
  }

  return node.next;
};
