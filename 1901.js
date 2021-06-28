// 1901. Find a Peak Element II

var findPeakGrid = function (mat) {
  let result = 0;

  // by this for loop we traverse in every row
  for (let i = 0; i < mat.length; i++) {
    let left = 0;
    let right = mat[0].length - 1;
    // by using this while loop we are finding the peak element in a row
    // the nature of the row will be like [2,5,7] or [9,5,1] or [2,9,5]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      // this if condition works if the mid + 1 is out of range and then we break out of the loop
      /*
      we use break here as we know we enter in this if when mid + 1 is out of range and
      we are at the last element of the array that why we use break
      */
      if (mid + 1 > mat[0].length - 1) {
        left = mid;
        break;
      }

      if (mat[i][mid] > mat[i][mid + 1]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    /* after finding the peak element in the row now we have to compare it with
    the above row and below row element at the same index position */

    // here we are calculating the current element's top ans bottom element
    //if i - 1 is out of range then we use -1 for comparison
    //if i + 1 is out of range then we use -1 for comparison

    let top = i - 1 < 0 ? -1 : mat[i - 1][left];
    let bottom = i + 1 > mat.length - 1 ? -1 : mat[i + 1][left];

    // here we are comparing the top and bottom element with the current selected element
    // if the element found after satisfying th condition then we store the index in the result
    // this result gets updated if we get the new element which satisfies the conditions

    if (mat[i][left] > top && mat[i][left] > bottom) {
      result = [i, left];
    }
  }
  return result;
};

findPeakGrid([
  [1, 4],
  [3, 2],
]);
