// 881. Boats to Save People

var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);

  let numberOfBoats = 0;
  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
      j--;
    } else {
      j--;
    }
    numberOfBoats++;
  }
  return numberOfBoats;
};

numRescueBoats([3, 5, 3, 4], 5);
