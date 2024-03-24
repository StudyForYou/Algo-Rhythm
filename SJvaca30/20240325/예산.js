/**
https://school.programmers.co.kr/learn/courses/30/lessons/12982
 */

function solution(d, budget) {
  // 1. 부서 신청 금액 오름차순 정렬
  d.sort((a, b) => a - b);

  // 2. 지원된 부서 수 카운트
  let count = 0;

  // 3. 예산이 부족할 때까지 반복
  for (let i = 0; i < d.length; i++) {
    // 3.1. 예산 잔여 확인
    if (budget < d[i]) break;

    // 3.2. 예산 충분 시 지원 및 카운트 증가
    budget -= d[i];
    count++;
  }

  // 4. 지원된 부서 수 반환
  return count;
}
