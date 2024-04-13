function solution(arr) {
  if (arr.length === 1) return arr[0];
  arr.sort((a, b) => a - b);

  let answer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const maxValue = Math.max(answer, arr[i]);
    let minValue = Math.min(answer, arr[i]);
    let temp = minValue;

    if (Math.max(answer, arr[i]) % Math.min(answer, arr[i]) === 0) {
      answer = Math.max(answer, arr[i]);
      continue;
    }

    let j = 2;
    while (temp % maxValue !== 0) {
      temp = minValue * j;
      j++;
    }

    answer = temp;
  }

  return answer;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
