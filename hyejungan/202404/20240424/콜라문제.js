/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/132267
 * @param {number} a 빈병 a개를 주면 
 * @param {number} b 콜라 b개를 줌 
 * @param {number} n 가지고 있는 빈병 총 n개 일때, 
 * @returns 콜라 몇개를 받을 수 있을까
 */
function solution(a, b, n) {
  let result = 0;

  if (n < a) return 0;

  while (n >= a) {
    let div = Math.floor(n / a) * b;
    result += div;
    n = div + (n % a);
  }

  return result;
}
