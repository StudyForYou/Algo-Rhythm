// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  let el = Array(n + 1);

  // 첫번째 인덱스, 1칸 점프
  el[1] = 1;

  // 두 번째 인덱스, 1칸 점프 2번 or 2칸 점프 1번
  if (n >= 2) {
    el[2] = 2;
  }

  // i번째 도달 방법: (i-1)번째 도달 방법 + (i-2)번째 도달 방법
  // 1칸점프:(i-1)에서 i, 2칸점프: (i-2)에서 i으로
  for (let i = 3; i <= n; i++) {
    el[i] = (el[i - 1] + el[i - 2]) % 1234567;
  }

  return el[n];
}
