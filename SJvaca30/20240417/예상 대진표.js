// https://school.programmers.co.kr/learn/courses/30/lessons/12985
// 레벨: 2
// N: 8, A: 4, B: 7
// 12 3A 56 B8
// 1 A 5 B
// A B

function solution(N, A, B, round = 1) {
  if (Math.ceil(A / 2) === Math.ceil(B / 2)) {
    return round;
  } else {
    return solution(N, Math.ceil(A / 2), Math.ceil(B / 2), round + 1);
  }
}
