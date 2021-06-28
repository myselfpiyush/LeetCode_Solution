// 1721. Swapping Nodes in a Linked List

var swapNodes = function (head, k) {
  let len = head;
  let dummy = head;
  let count = 0;
  let a = null;
  let b = null;

  while (len) {
    count++;
    len = len.next;
  }

  let i = 1;

  while (dummy) {
    if (i == k) {
      a = dummy;
    }

    if (i == count - k + 1) {
      b = dummy;
    }
    i++;
    dummy = dummy.next;
  }

  let temp;

  temp = a.val;
  a.val = b.val;
  b.val = temp;

  return head;
};
