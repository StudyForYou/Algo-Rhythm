function solution(picture, k) {
  let answer = [];

  for (let x of picture) {
    let temp = "";
    for (let y of x) {
      for (let i = 0; i < k; i++) temp += y;
    }
    for (let i = 0; i < k; i++) answer.push(temp);
  }

  return answer;
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);
