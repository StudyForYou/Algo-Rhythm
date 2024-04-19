function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let answer = 0,
    a = 1,
    b = 2,
    temp = 0;

  for (let i = 3; i <= n; i++) {
    temp = (a % 1234567) + (b % 1234567);
    a = b;
    b = temp;
  }

  answer = b % 1234567;

  return answer;
}

console.log(solution(4));
console.log(solution(3));
console.log(solution(2000));
