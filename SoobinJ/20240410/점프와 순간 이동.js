function solution(n) {
  let a = n;
  let answer = 1;

  while (a !== 1) {
    if (a % 2 !== 0) {
      answer++;
      a--;
    }

    a = a / 2;
  }

  return answer;
}
