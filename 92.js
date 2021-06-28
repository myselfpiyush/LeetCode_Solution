// 92. Reverse Linked List II

// https://www.youtube.com/watch?v=wk8-_M-2fzI

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseBetween = function (head, left, right) {
  let dummy = new ListNode();
  dummy.next = head;
  let previous = dummy;
  for (let i = 0; i < left - 1; i++) {
    previous = previous.next;
  }
  let current = previous.next;
  for (let i = 0; i < right - left; i++) {
    let NEXT = current.next;
    current.next = NEXT.next;
    NEXT.next = previous.next;
    previous.next = NEXT;
  }

  return dummy.next;
};
