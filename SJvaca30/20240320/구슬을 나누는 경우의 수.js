/**
https://school.programmers.co.kr/learn/courses/30/lessons/120840
 */

// n! / (n-m)! * m!
// 이 코드를 그냥 그대로 코드로 옮겼습니다.

// 재귀함수를 사용하여 팩토리얼 함수 만듬.
function factorial(balls) {
  if (balls === 0) return 1;
  return balls * factorial(balls - 1);
}

// m ≤ n 조건 먼저 써놓고,
function solution(balls, share) {
  if (share > balls) return 0;
  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}
