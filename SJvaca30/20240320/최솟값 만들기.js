/**
https://school.programmers.co.kr/learn/courses/30/lessons/12941
 */

function solution(A, B) {
  let answer = 0;
  B.sort((a, b) => b - a);
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
