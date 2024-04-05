/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12940
 * @param {number} n
 * @param {number} m
 * @returns 두수의 최대공약수, 최소공배수 배열
 */
function solution(n, m) {
  //두 수의 약수 배열
  let nArr = [];
  let mArr = [];

  for (let i = 1; i <= n / i; i++) {
    if (n % i === 0) {
      let a = n / i;
      nArr.push(a);
      nArr.push(i);
    }
  }

  for (let j = 1; j <= m / j; j++) {
    if (m % j === 0) {
      let b = m / j;
      mArr.push(b);
      mArr.push(j);
    }
  }

  //두 수의 공통약수중 가장큰수 => 최대공약수
  let max = nArr.filter((n) => mArr.includes(n)).sort((a, b) => b - a)[0];
  // 두 수를 각각 최대공약수로 나눈 나머지와 최대공약수의 곱 => 최소공배수
  let min = (n / max) * (m / max) * max;

  return [max, min];
}
