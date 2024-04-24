// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// a: 마트에 주어야 하는 빈 병 수
// b: 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
// n: 가지고 있는 빈 병의 개수
// 가지고 있는 빈 병 n개를 마트에 가져다 주면 받을 수 있는 콜라의 병 수를 반환

function solution(a, b, n) {
  // 총 콜라 병 수
  let total = 0;

  // 가지고 있는 빈 병 수가 마트에 주어야 하는 빈 병 수보다 많거나 같으면 반복
  while (n >= a) {
    // 현재 가지고 있는 빈 병으로 받을 수 있는 콜라 병 수를 계산
    let bottles = Math.floor(n / a);
    // 총 콜라 병 수에 방금 계산한 병 수를 추가
    total += bottles * b;
    // 마트 가져다 주고 남는 빈 병 + 마시고 나서 생기는 빈 병
    n = (n % a) + bottles * b;
  }

  // 남은 빈병으로 맏을 수 있는 콜라병
  total += Math.floor(n / a) * b;

  return total;
}
