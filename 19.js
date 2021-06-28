// 19. Remove Nth Node From End of List

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  let temp = head;
  let arr = [];

  while (temp != null) {
    arr.push(temp.val);
    temp = temp.next;
  }

  let len = arr.length;
  let removeItemAt = len - n;

  arr.splice(removeItemAt, 1);
  if (arr.length == 0) {
    return null;
  }

  let result, x;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (result == null) {
      result = new ListNode(arr[i]);
    } else {
      x = new ListNode(arr[i]);
      x.next = result;
      result = x;
    }
  }

  return result;
};
