function solution(n) {
  let answer = 0,
    p1 = 0,
    p2 = 0,
    sum = 1,
    arr = Array.from({ length: n }, (_, i) => i + 1);

  while (p1 < n || p2 < n) {
    if (sum < n) {
      p2++;
      sum += arr[p2];
    }
    if (sum > n) {
      sum -= arr[p1];
      p1++;
    }
    if (sum === n) {
      sum -= arr[p1];
      p1++;
      answer++;
    }
  }

  return answer;
}

console.log(solution(15));
