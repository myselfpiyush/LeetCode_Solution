// 733. Flood Fill

var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) return image;
  fillNew(image, sr, sc, newColor, image[sr][sc]);
  return image;
};

let fillNew = (image, sr, sc, newColor, color) => {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[0].length ||
    image[sr][sc] !== color
  ) {
    return;
  }
  image[sr][sc] = newColor;
  fillNew(image, sr - 1, sc, newColor, color);
  fillNew(image, sr + 1, sc, newColor, color);
  fillNew(image, sr, sc - 1, newColor, color);
  fillNew(image, sr, sc + 1, newColor, color);
};
