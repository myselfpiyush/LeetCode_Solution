// 71. Simplify Path

var simplifyPath = function (path) {
  path = path.split("/");
  let N = path.length;
  let stack = [];

  for (let i = 0; i < N; i++) {
    if (path[i] == "." || path[i] == "") {
      continue;
    }
    if (path[i] == "..") {
      stack.pop();
    } else {
      stack.push(path[i]);
    }
  }

  return "/" + stack.join("/");
};

simplifyPath("/home//foo/");
