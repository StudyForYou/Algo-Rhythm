function solution(n) {
  const arr = [0, 1];
  let sum = 1;
  let answer = 1;
  if (n <= 2) return answer;

  for (let i = 2; i <= Math.floor((n + 2) / 2); i++) {
    sum += i;
    arr.push(sum);
  }

  let start = 0;
  let end = 1;
  while (start !== end) {
    let total = arr[end] - arr[start];
    if (total < n) {
      end++;
      if (end >= arr.length) {
        break;
      }
    } else if (total > n) {
      start++;
    } else {
      answer++;
      start++;
    }
  }

  return answer;
}
