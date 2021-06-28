// 86. Partition List

var partition = function (head, x) {
  let sort = new ListNode();
  let org = new ListNode();

  let p = sort;
  let q = org;
  while (head) {
    if (head.val < x) {
      p.next = head;
      p = p.next;
    } else {
      q.next = head;
      q = q.next;
    }
    head = head.next;
  }

  p.next = org.next;

  q.next = null;

  return sort.next;
};
