// 61. Rotate List

// https://www.youtube.com/watch?v=9VPm6nEbVPA

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var rotateRight = function (head, k) {
  if (head == null || head.next == null || k === 0) return head;

  let current = head;
  let len = 1;
  while (current.next) {
    len++;
    current = current.next;
  }

  current.next = head;
  k = k % len;
  k = len - k;

  while (k > 0) {
    current = current.next;
    k--;
  }
  head = current.next;
  current.next = null;

  return head;
};

// Time Complexity :- O(N) + O(N - (N % k)) => O(N)
