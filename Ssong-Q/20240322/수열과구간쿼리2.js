function solution(arr, queries) {
  let answer = [];

  for (let i = 0; i < queries.length; i++) {
    const result = arr
      .slice(queries[i][0], queries[i][1] + 1)
      .filter((v) => v > queries[i][2]);

    answer.push(result.length ? Math.min(...result) : -1);
  }

  return answer;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
