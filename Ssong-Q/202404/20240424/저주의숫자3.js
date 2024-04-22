function solution(n) {
  let answer = 0,
    result = [],
    i = 1;

  while (result.length <= 100) {
    if (i % 3 === 0 || i.toString().includes("3")) {
      i++;
      continue;
    }

    result.push(i);
    i++;
  }

  answer = result[n - 1];

  return answer;
}

console.log(solution(15));
console.log(solution(40));
