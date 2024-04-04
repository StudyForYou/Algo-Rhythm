/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120922
 * @param {number} M, N
 * @returns 1 * 1 size로 자를때 최소 가위질 횟수 리턴
 */
function solution(M, N) {
  return (N - 1) * M + (M - 1);
}
