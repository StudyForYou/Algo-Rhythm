// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// 레벨: 2
// 난이도:

function solution(brown, yellow) {
  // 전체 블록의 수를 계산
  let sum = brown + yellow;

  // 가로 길이를 3부터, 최대치까지 반복
  for (let W = 3; W <= sum; W++) {
    // 전체 블록을 가로로 나누면 세로 길이 나옴.
    if (sum % W === 0) {
      let L = sum / W;

      // 갈색 블록의 수를 계산 (모서리?에 있는 애들은 -2씩 해줘야함)
      if (L + W - 2 + (L + W - 2) === brown) {
        // 계산 값이 brown하고 같으면 리턴
        return [Math.max(L, W), Math.min(L, W)];
      }
    }
  }
}
