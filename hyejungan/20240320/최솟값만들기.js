/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12941
 * @param {[num], [num]} A, B (배열길이 같음)
 * @returns 두 배열 숫자를 각각 하나씩 뽑아 곱한 합의 최솟값. 중복으로 사용불가
 */

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, cur, i) => {
    return acc + cur * B[i];
  }, 0);
}
