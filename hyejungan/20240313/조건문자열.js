/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181934
 * 문제 이름: 조건문자열
 * 문제 풀이 포인트: 조건문 사용
 * 문자로 주어지니까 조건문 여러개 돌리는 것 말고는 방법이 생각이 안났음
 */


const ineq = "<";
const eq = "=";
const n = 20;
const m = 50;

function solution(ineq, eq, n, m) {
  if (eq === "=") {
    return ineq === ">" ? (n >= m ? 1 : 0) : n <= m ? 1 : 0;
  } else {
    return ineq === ">" ? (n > m ? 1 : 0) : n < m ? 1 : 0;
  }
}

solution(ineq, eq, n, m);
