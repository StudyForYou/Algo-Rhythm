function solution(n, a, b) {
  let answer = 1;

  while (true) {
    if (
      (a < b && a % 2 === 1 && a + 1 === b) ||
      (a > b && b % 2 === 1 && b + 1 === a)
    )
      break;

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

console.log(solution(8, 4, 7));
