/**
https://school.programmers.co.kr/learn/courses/30/lessons/120868
 */

function solution(sides) {
  sides.sort((a, b) => a - b);
  let min = sides[1] - sides[0] + 1;
  let max = sides[1] + sides[0] - 1;
  return max - min + 1;
}
