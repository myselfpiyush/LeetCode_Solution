// 524. Longest Word in Dictionary through Deleting

var findLongestWord = function (s, dictionary) {
  dictionary.sort((a, b) => {
    if (a.length === b.length) {
      return a.localCompare(b); // it compare both the strings on the basis of alphabetical order if length is same
    }
    return b.length - a.length;
  });

  for (let i = 0; i < dictionary.length; i++) {
    let dLeft = 0; //dictionary left
    let sLeft = 0;

    while (sLeft < s.length) {
      if (s[sLeft] === dictionary[i][dLeft]) {
        sLeft++;
        dLeft++;
      } else {
        sLeft++;
      }
    }

    if (dLeft === dictionary[i].length) {
      return dictionary[i];
    }
  }
  return "";
};

findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]);
