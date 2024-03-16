/**
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수
 * @param {number} n 숫자
 * @param {number} m 숫자
 * @returns 최대공약수와 최소공배수가 담긴 배열
 */

function solution(n, m) {
  let answer = [],
    gcd = 1,
    lcm;

  const s = Math.min(n, m);
  const b = Math.max(n, m);

  // 최대공약수
  for (let i = 2; i <= b; i++) {
    if (s % i === 0 && b % i === 0) gcd = i;
  }

  // 최소공배수
  let i = 1;
  while (true) {
    if ((b * i) % s === 0) {
      lcm = b * i;
      break;
    }
    i++;
  }

  answer.push(gcd);
  answer.push(lcm);

  return answer;
}

console.log(solution(3, 12));
console.log(solution(2, 5));
