function solution(k, tangerine) {
  let answer = 0,
    obj = new Map();

  tangerine.sort((a, b) => a - b);

  for (let i = 0; i < tangerine.length; i++) {
    obj.set(
      tangerine[i],
      obj.has(tangerine[i]) ? obj.get(tangerine[i]) + 1 : 1
    );
  }

  let arr = [...obj];
  arr.sort((a, b) => b[1] - a[1]);

  let i = 0;
  while (k > 0) {
    k -= arr[i][1];
    i++;
    answer++;
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
console.log(solution(9, [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 7, 7]));
