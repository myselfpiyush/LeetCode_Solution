// 328. Odd Even Linked List

var oddEvenList = function (head) {
  if (head == null || head.next == null) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};
