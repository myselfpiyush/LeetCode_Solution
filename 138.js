// 138. Copy List with Random Pointer

// https://www.youtube.com/watch?v=VNf6VynfpdM

var copyRandomList = function (head) {
  let iterator = head;
  let front = head;

  // First round: make copy of each node,
  // and link them together side-by-side in a single list.
  while (iterator) {
    front = iterator.next;
    let copy = new ListNode(iterator.val);
    iterator.next = copy;
    copy.next = front;
    iterator = front;
  }

  // Second round: assign random pointers for the copy nodes.

  iterator = head;

  while (iterator) {
    if (iterator.random !== null) {
      iterator.next.random = iterator.random.next;
    }

    iterator = iterator.next.next;
  }
  // Third round: restore the original list, and extract the copy list.

  iterator = head;

  let dummy = new ListNode();

  copy = dummy;

  while (iterator) {
    front = iterator.next.next;
    copy.next = iterator.next;
    copy = copy.next;
    iterator.next = front;
    iterator = front;
  }

  return dummy.next;
};
