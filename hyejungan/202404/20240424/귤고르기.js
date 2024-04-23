/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/138476
 * @param {number} k 고르고 싶은 귤의 갯수
 * @param {number[]} tangerine 수확한 귤 크기를 담은 배열
 * @returns 수확한 귤에서 k를 고를 때, 크기가 서로 다른 종류를 최소한으로 뽑는 경우 return
 */
function solution(k, tangerine) {
  let stock = {};

  for (let t of tangerine) {
    if (!stock[t]) {
      stock[t] = 1;
    } else {
      stock[t] += 1;
    }
  }

  let sorting = Object.values(stock).sort((a, b) => b - a);
  let count = 0;

  while (k > 0) {
    k -= sorting.shift();
    count++;
  }

  return count;
}
