function solution(n) {
  let answer = 0;
  let i = 2,
    result = 0,
    arr = [0, 1];

  while (i <= n) {
    result = (arr[i - 1] + arr[i - 2]) % 1234567;
    arr.push(result);
    i++;
  }

  answer = arr[arr.length - 1];

  return answer;
}

console.log(solution(3));
console.log(solution(5));
console.log(solution(10000));
