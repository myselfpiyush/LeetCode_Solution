// 763. Partition Labels

var partitionLabels = function (s) {
  if (s == null || s.length === 0) return null;

  let result = [];

  let array = new Array(26);

  for (let i = 0; i < s.length; i++) {
    array[s.charCodeAt(i) - 97] = i;
  }
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, array[s.charCodeAt(i) - 97]);
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }

  return result;
};

partitionLabels("ababcbacadefegdehijhklij");
