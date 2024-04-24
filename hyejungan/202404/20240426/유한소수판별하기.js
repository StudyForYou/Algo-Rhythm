/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120878
 * @param {number} a 분자 
 * @param {number} b 분모
 * @returns 유한소수인경우 1, 무한소수인 경우 2를 리턴(유한소수는 기약분수로 나타낸 후 분모의 소인수가 2 or 5인 경우이다)
 */
function solution(a, b) {
  let A = a;
  let B = b;

  for (let i = 2; i <= a; i++) {
    if (A % i === 0 && B % i === 0) {
      A /= i;
      B /= i;
      i--;
    }
  }

  while (B % 2 === 0) {
    B /= 2;
  }
  while (B % 5 === 0) {
    B /= 5;
  }

  return B === 1 ? 1 : 2;
}
