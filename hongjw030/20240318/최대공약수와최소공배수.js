function solution(n, m) {
  if (n === m ) return [m, m];

  let max = Math.max(m, n);
  let min = Math.min(m, n);

  let gcd = 1;
  for(let i = min; i > 0; i--){
    if (max % i === 0 && min % i === 0){
      gcd = i;
      break;
    }
  }
  
  let lcm = Math.floor(n * m / gcd);

  return [gcd, lcm];
}