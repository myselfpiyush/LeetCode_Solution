// 1019. Next Greater Node In Linked List

var nextLargerNodes = function (head) {
  let result = [];
  let travel = head.next;
  let start = head;
  let len = 0;
  let prev = null;

  while (start) {
    prev = start;
    len++;
    start = start.next;
  }

  while (travel) {
    let current = head;

    if (travel.val > current.val) {
      result.push(travel.val);
      head = head.next;
      travel = head.next;
    } else {
      if (travel == prev) {
        result.push(0);

        head = head.next;
        travel = head.next;
      } else {
        travel = travel.next;
      }
    }
  }
  result.push(0);

  return result;
};

//---------------ANOTHER SOLUTION ---------------------------------------------------------------------------------------

var nextLargerNodes = function (head) {
  let result = [];
  let travel = head.next;

  while (travel) {
    let current = head;

    if (travel.val > current.val) {
      result.push(travel.val);
      head = head.next;
      travel = head.next;
    } else {
      if (travel.next != null) {
        travel = travel.next;
      } else {
        result.push(0);

        head = head.next;
        travel = head.next;
      }
    }
  }
  result.push(0);

  return result;
};
