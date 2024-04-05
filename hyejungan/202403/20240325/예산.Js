/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * @param d => 각 부서 예산
 * @param budget => 전체예산
 * @returns 전체예산으로 맞출 수 있는 최대 부서
 */

function solution(d, budget) {
  d.sort((a, b) => b - a);
  let result = d.length;
  let hap = d.reduce((acc, cur) => acc + cur);

  while (true) {
    if (hap <= budget) {
      result = d.length;
      break;
    } else {
      result -= 1;
      hap -= d.shift();
    }
  }
  return result;
}
