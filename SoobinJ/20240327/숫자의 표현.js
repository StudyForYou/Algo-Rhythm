function solution(n) {
  var answer = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let k = i;
    let sum = 0;
    while (true) {
      sum += k;
      if (sum === n) {
        answer += 1;
        break;
      }
      if (sum > n) break;
      k++;
    }
  }
  return answer + 1;
}
