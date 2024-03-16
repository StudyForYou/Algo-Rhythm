/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12939
 * 문제 이름: 최댓값과 최솟값
 * 문제 풀이 포인트: Math.min, max
 */

function solution(s) {
  return `${Math.min(...s.split(" ").map(Number))} ${Math.max(
    ...s.split(" ").map(Number)
  )}`;
}
