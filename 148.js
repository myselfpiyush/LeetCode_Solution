// 148. Sort List

var sortList = function (head) {
  if (head == null || head.next == null) return head;

  let prev = head;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  let leftSide = sortList(head);
  let rightSide = sortList(slow);
  return merge(leftSide, rightSide);
};

function merge(l1, l2) {
  let sorted = new ListNode(0);
  let current = sorted;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  // after comparing the list elements there is always one big value element is  remain in the end to insert this
  // we use the below two condition  to check in which list l1 or l2 it  is present then we attach the last element
  //to the sorted( user defined linked list in merge method)
  if (l1 != null) {
    current.next = l1;
    l1 = l1.next;
  }
  if (l2 != null) {
    current.next = l2;
    l2 = l2.next;
  }

  return sorted.next;
}
