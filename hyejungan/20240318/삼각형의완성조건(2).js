/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120868
 * 문제 이름 : 삼각형의 완성조건(2)
 * @param {[number, number]} sides
 * @returns 삼각형을 만들기 위한 조건이 가장긴변이 두 변의 길이의 합보다 작은경우일때,
 * 주어진 두변에 대해 나머지 선분 1개의 경우의 수를 구해라
 */

function solution(sides) {
  const [a, b] = sides.sort((a, b) => a - b);

  let count = 0;
  //i가 가장긴변일때,
  for (let i = b; i < a + b; i++) {
    count += 1;
  }

  //b가 가장긴변일때,
  for (let j = b - 1; j > b - a; j--) {
    count += 1;
  }

  return count;
}
