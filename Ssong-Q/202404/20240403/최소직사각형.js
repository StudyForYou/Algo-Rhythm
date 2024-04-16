function solution(sizes) {
  let answer = 0,
    width = Number.MIN_SAFE_INTEGER,
    height = Number.MIN_SAFE_INTEGER,
    arr = [];

  for (let card of sizes) {
    const [x, y] = card;
    arr.push([Math.min(x, y), Math.max(x, y)]);
  }

  for (let card of arr) {
    const [x, y] = card;
    if (x > width) width = x;
    if (y > height) height = y;
  }

  answer = width * height;

  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
