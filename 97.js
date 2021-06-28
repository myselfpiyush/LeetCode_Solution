// 97. Interleaving String

var isInterleave = function (s1, s2, s3) {
  let map = {};
  let SEPARATOR = "+";

  let helper = (s1, s2, s3, map) => {
    // finished both strings, and s3 fully constructed
    if (s1.length === 0 && s2.length === 0 && s3.length === 0) {
      return true;
    }

    // has failed for this key before, with that length in s3 remaining
    if (map[s1 + SEPARATOR + s2] === true) {
      return false;
    }
    if (s1.length > 0 && s1.charAt(0) === s3.charAt(0)) {
      if (helper(s1.substring(1), s2, s3.substring(1), map)) {
        return true;
      }
    }

    if (s2.length > 0 && s2.charAt(0) === s3.charAt(0)) {
      if (helper(s1, s2.substring(1), s3.substring(1), map)) {
        return true;
      }
    }

    map[s1 + SEPARATOR + s2] = true; // mark this s1 + s2 as a failure at this s3 length
    // we put separator b/w s1 and s2 because keys will be unique

    return false;
  };
  return helper(s1, s2, s3, map);
};

isInterleave("aabcc", "dbbca", "aadbbcbcac");

// Time: O(N*M)
// Space: O(N*M)
