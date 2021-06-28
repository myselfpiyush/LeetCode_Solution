// 983. Minimum Cost For Tickets

// Link for concept and code understanding :-
// https://www.youtube.com/watch?v=MWJ7lwy1HF4

var mincostTickets = function (days, costs) {
  // created the array to keep record
  let array = new Array(days.length).fill(0);

  let helper = (days, costs, i, array) => {
    if (i >= days.length) return 0;

    // initially array stores zeroes
    /* if it have any value at the mentioned index it returns the value because we are storing the minimum
     value for that index from multiple cases for that index */
    if (array[i]) return array[i];

    // for option one we add the value and move towards the next index
    let optionOne = costs[0] + helper(days, costs, i + 1, array);

    // this below 'for' loop is for the second option
    /* here we are finding the next index for option two as we buy the pass for next 7 days and the days that
     came into under these 7 days are not count */

    // here we are taking i as k because we don't want change i directly as we are preserve i as reference
    // also this way is easy to understand
    let k = i;

    for (; k < days.length; k++) {
      if (days[k] >= days[i] + 7) break;
    }

    let optionTwo = costs[1] + helper(days, costs, k, array);

    // this below 'for' loop is for the third option
    /* here we are finding the next index for option three as we buy the pass for next 30 days and the days that
     came into under these 30 days are not count */

    for (; k < days.length; k++) {
      if (days[k] >= days[i] + 30) break;
    }

    let optionThree = costs[2] + helper(days, costs, k, array);

    /* it stores the minimum values from the three options for that particular index for
    future reference as cases repeats */
    array[i] = Math.min(optionOne, optionTwo, optionThree);

    // this returns the minimum value from the three options
    return Math.min(optionOne, optionTwo, optionThree);
  };

  return helper(days, costs, 0, array);
};
