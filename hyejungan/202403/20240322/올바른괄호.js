/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * @param {string} s => '(,)'로만 이루어진 문자열
 * @returns => 괄호 열 닫이 제대로 짝지어 졌는지 true, false로 출력
 */
function solution(s) {
  let cnt = 0;
  for (g of s) {
    cnt += g === "(" ? 1 : -1;
    if (cnt < 0) return false;
  }
  return cnt === 0 ? true : false;
}
