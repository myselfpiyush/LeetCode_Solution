// 430. Flatten a Multilevel Doubly Linked List

var flatten = function (head) {
  let stack = [];
  let start = head;

  while (start) {
    if (start.child) {
      if (start.next) {
        stack.push(start.next);
      }
      start.next = start.child;
      start.next.prev = start;
      start.child = null;
    }
    if (start.next == null && stack.length !== 0) {
      start.next = stack.pop();
      start.next.prev = start;
    }

    start = start.next;
  }
  return head;
};
