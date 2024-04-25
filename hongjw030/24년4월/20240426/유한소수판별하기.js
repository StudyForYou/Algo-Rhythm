function solution(a, b) {
  const gcd = (a,b) => b ? gcd(b, a%b) : a;

  b = b/gcd(a,b);

  while (b%2 === 0) b = b/2
  while (b%5 === 0) b = b/5

  return b===1 ? 1:2;
}
