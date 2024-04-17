function solution(answers) {
  let answer = [],
    result1 = 0,
    result2 = 0,
    result3 = 0,
    maxNum = 0;

  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((_, idx) => {
    if (p1[idx % p1.length] === answers[idx]) result1++;
    if (p2[idx % p2.length] === answers[idx]) result2++;
    if (p3[idx % p3.length] === answers[idx]) result3++;
  });

  maxNum = Math.max(result1, result2, result3);

  result1 === maxNum && answer.push(1);
  result2 === maxNum && answer.push(2);
  result3 === maxNum && answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
