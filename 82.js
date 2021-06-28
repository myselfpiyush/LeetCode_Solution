// 82. Remove Duplicates from Sorted List II

var deleteDuplicates = function (head) {
  let newHead = new ListNode();
  let current = newHead;
  let duplicate = 0;
  while (head) {
    if (head.next && head.val == head.next.val) {
      duplicate++;
    } else {
      if (duplicate == 0) {
        current.next = head;
        current = current.next;
      } else {
        duplicate = 0;
      }
    }
    head = head.next;
  }
  current.next = null;

  return newHead.next;
};
