/**최대공약수와 최소공배수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12940
 *
 *
 */
function solution(n, m) {
  const maxSize = n > m ? m : n;
  let gcd = 0;

  //최대 공약수 구하기
  for (let i = 1; i <= maxSize; i++)
    if (n % i === 0 && m % i === 0 && gcd < i) gcd = i;

  //최소 공배수 구하기
  const lcm = (n * m) / gcd;

  return [gcd, lcm];
}
