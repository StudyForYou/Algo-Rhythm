function solution(dots) {
  let answer = 0,
    length = [];
  dots.sort((a, b) => a[0] - b[0]);

  length.push(Math.abs(dots[0][1] - dots[1][1]));
  length.push(Math.abs(dots[1][0] - dots[2][0]));

  answer = length[0] * length[1];

  return answer;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
