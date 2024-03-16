function solution(n, m) {
  let gcd = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
  }

  return [gcd, (n * m) / gcd];
}
