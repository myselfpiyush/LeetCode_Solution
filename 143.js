// 143. Reorder List

// Do not return anything, modify head in-place instead. Already said in program.

// split in half;
// reverse the second half
// merge first half and reversed second half
var reorderList = function (head) {
  if (!head || !head.next) return;
  let l1 = head;
  let fast = head;
  let slow = head;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  let l2 = reverseTheList(slow);

  merge(l1, l2);
};

function merge(l1, l2) {
  while (l1) {
    l1_next = l1.next;
    l2_next = l2.next;

    l1.next = l2;

    if (l1_next == null) {
      break;
    }
    l2.next = l1_next;
    l1 = l1_next;
    l2 = l2_next;
  }
}

function reverseTheList(head) {
  let prev = null;
  let current = head;
  let nextNode = null;
  while (current) {
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}
