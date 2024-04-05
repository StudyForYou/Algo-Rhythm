// https://school.programmers.co.kr/learn/courses/30/lessons/120922
// 레벨: 0
// 난이도: 1

function solution(M, N) {
  let tmp = [];
  // M, N 둘 다 1인 경우 예외처리
  M === 1 && N === 1 ? (answer = 0) : "";

  // 규칙 적용을 위해 정렬
  tmp = [M, N].sort((a, b) => a - b);

  // 규칙 적용
  // 규칙은 그냥 노가다로 찾았음
  return tmp[0] - 1 + (tmp[1] - 1) * tmp[0];
}

// 2: 1
// 3: 2 2

// 2: 1
// 4: 3 3

// 2: 1
// 5: 4 4

// 3: 2
// 3: 2 2 2

// 4: 3
// 7: 6 6 6 6
