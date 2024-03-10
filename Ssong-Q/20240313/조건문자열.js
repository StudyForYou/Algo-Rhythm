/**
 * 부등호 및 두 정수를 입력 받아 참, 거짓을 리턴하는 함수
 * @param {string} ineq ">" 또는 "<"
 * @param {string} eq "!" 또는 "="
 * @param {number} n 정수
 * @param {number} m 정수
 * @returns 참이면 1, 거짓이면 0을 리턴
 */

function solution(ineq, eq, n, m) {
  let answer = 1;

  if (ineq === ">" && eq === "!") {
    if (n <= m) {
      answer = 0;
    }
  } else if (ineq === ">" && eq === "=") {
    if (n < m) {
      answer = 0;
    }
  } else if (ineq === "<" && eq === "!") {
    if (n >= m) {
      answer = 0;
    }
  } else if (ineq === "<" && eq === "=") {
    if (n > m) {
      answer = 0;
    }
  }

  return answer;
}

console.log(solution("<", "=", 20, 50));
console.log(solution(">", "!", 41, 78));
