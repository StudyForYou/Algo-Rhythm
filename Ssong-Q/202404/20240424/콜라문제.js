function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    let temp = n;
    // 몫
    n = Math.floor(n / a) * b;
    answer += n;
    // 나머지
    n += temp % a;
  }

  return answer;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
