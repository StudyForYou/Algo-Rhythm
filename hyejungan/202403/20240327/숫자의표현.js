/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12924
 * @param {number} n  
 * @returns n을 연속하는 자연수를 더해서 나타낸 결과라고 할때 가능한 방법수를 리턴
 */
function solution(n) {
  let result = 1;

  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    let k = i;

    while (sum < n) {
      sum += k;
      k += 1;
    }
    if (sum === n) result += 1;
  }
  return result;
}
