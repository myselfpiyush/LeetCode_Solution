// 142. Linked List Cycle II

// https://www.youtube.com/watch?v=Qq-vnKmzJR0

var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let cycle = false;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      cycle = true;
      break;
    }
  }
  if (cycle) {
    slowDummy = head;
    while (slowDummy != slow) {
      slowDummy = slowDummy.next;
      slow = slow.next;
    }
    return slow; // or slowDummy
  }

  return null;
};
