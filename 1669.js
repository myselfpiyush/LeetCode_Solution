// 1669. Merge In Between Linked Lists

var mergeInBetween = function (list1, a, b, list2) {
  let head = list1;
  let count = 0;
  let previous = null;

  let end = list2;
  let previous2 = null;
  while (end) {
    previous2 = end;
    end = end.next;
  }
  while (head) {
    if (count == a) {
      previous.next = list2;
    }
    if (count == b) {
      previous2.next = head.next;
      head.next = null;
    }
    previous = head;
    head = head.next;
    count++;
  }
  return list1;
};
