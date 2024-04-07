/**
https://school.programmers.co.kr/learn/courses/30/lessons/120889
 */

// 정답 처리된 코드
function solution(sides) {
  let maxNum = Math.max(...sides);
  let sum = sides.reduce((acc, curr) => curr + acc, 0) - maxNum;
  return maxNum < sum ? 1 : 2;
}

// 처음에 낸 오답 코드
// 오답 이유는 filter를 적용할 때 sides의 원소가 중복되어 나오는 경우를 고려하지 않았기 때문임.
function solution(sides) {
  let maxNum = Math.max(...sides);
  let sum = sides
    .filter((a) => a !== maxNum)
    .reduce((acc, curr) => curr + acc, 0);
  return maxNum < sum ? 1 : 2;
}
