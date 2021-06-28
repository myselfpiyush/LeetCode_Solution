// 838. Push Dominoes

var pushDominoes = function (dominoes) {
  let N = dominoes.length;
  let array = new Array(N).fill(0);

  let force = 0;

  // when we loop through left to right we account for right dominoes
  for (let i = 0; i < N; i++) {
    if (dominoes[i] == "R") {
      force = N;
    } else if (dominoes[i] == "L") {
      force = 0;
    } else {
      force = Math.max(force - 1, 0); // 0 is the balanced dominoes value

      /*  if we doesn't include 0 then if dominoes[i] == "L" then force becomes 0 then force turn
       into 0-1=-1 which shows that a dominoe with "L" apply the force to fall its right dominoe*/
    }
    array[i] += force; // + because we are adding the forces to initial array
  }

  force = 0;

  // when we loop through right to left  we account for left dominoes
  for (let i = N - 1; i >= 0; i--) {
    if (dominoes[i] == "L") {
      force = N;
    } else if (dominoes[i] == "R") {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    array[i] -= force;
    /*  because we are opposing the right forces , so what we get in the array is of
    right forces and we subtract the left forces to obtain the direction of falling  */

    //  we also say that we consider negative or - sign as opposite direction
  }

  let temp = "";
  for (let i of array) {
    if (i > 0) {
      temp += "R";
    } else if (i < 0) {
      temp += "L";
    } else {
      temp += ".";
    }
  }
  return temp;
};
pushDominoes(".L.R...LR..L..");
