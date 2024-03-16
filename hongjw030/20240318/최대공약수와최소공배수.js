function solution(n, m) {
  if (n === m ) return [m, m];

  let max = Math.max(m, n);
  let min = Math.min(m, n);

  // 유클리드 호제법으로 gcd먼저 구함.
  while(max % min != 0){
    let temp = max % min;
    max = min;
    min = temp;
  }
  let gcd = min;

  // gcd를 구하면 lcm을 구함.
  let lcm = Math.floor(n * m / gcd);

  return [gcd, lcm];
}