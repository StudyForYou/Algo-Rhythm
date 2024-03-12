/**
 * 조건 문자열
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/181934
 *
 * @param {*} ineq
 * @param {*} eq
 * @param {*} n
 * @param {*} m
 * @returns
 */
function solution(ineq, eq, n, m) {
  let answer = 0;

  if (ineq === ">") {
    if (eq === "=") return (answer = Number(n >= m));
    answer = Number(n > m);
  }

  if (ineq === "<") {
    if (eq === "=") return (answer = Number(m >= n));
    answer = Number(m > n);
  }

  return answer;
}
/**

*/
