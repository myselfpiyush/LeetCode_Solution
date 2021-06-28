// 2. Add Two Numbers

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let head = null;
  let current = null;
  let sum = 0;
  let carry = 0;
  let num;
  let node = null;

  while (l1 || l2) {
    sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry;

    num = parseInt(sum % 10);
    carry = parseInt(sum / 10);

    node = new ListNode(num);
    if (!head) {
      head = node;
    }

    if (current) {
      current.next = node;
    }
    current = node;
  }
  if (carry) {
    node = new ListNode(carry);
    current.next = node;
    current = node;
  }

  return head;
};
