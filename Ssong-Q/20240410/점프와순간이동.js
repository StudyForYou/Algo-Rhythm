function solution(n) {
  let ans = 0;

  while (n > 0) {
    if (n % 2 !== 0) {
      n -= 1;
      ans++;
    } else {
      n /= 2;
    }
  }

  return ans;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
