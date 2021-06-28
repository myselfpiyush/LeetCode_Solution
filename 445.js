// 445. Add Two Numbers II

var addTwoNumbers = function (l1, l2) {
  let head = null;
  let current = null;
  let reverse_list_one = reverseList(l1);
  let reverse_list_two = reverseList(l2);
  let carry = 0;
  let sum = 0;
  while (reverse_list_one || reverse_list_two) {
    sum = 0;
    if (reverse_list_one) {
      sum += reverse_list_one.val;
      reverse_list_one = reverse_list_one.next;
    }
    if (reverse_list_two) {
      sum += reverse_list_two.val;
      reverse_list_two = reverse_list_two.next;
    }

    sum = sum + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    let newNode = new ListNode(sum);

    if (!head) {
      head = newNode;
      current = newNode;
    } else {
      current.next = newNode;
      current = current.next;
    }
  }
  if (carry) {
    let node = new ListNode(carry);
    current.next = node;
    current = current.next;
  }

  return reverseList(head);
};

let reverseList = (head) => {
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
};
