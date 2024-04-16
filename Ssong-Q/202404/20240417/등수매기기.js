function solution(score) {
  let answer = [],
    avg = [];
  avg = score.map((val) => {
    return (val[0] + val[1]) / 2;
  });

  for (let i = 0; i < avg.length; i++) {
    let temp = 1;
    for (let j = 0; j < avg.length; j++) {
      if (j === i) continue;

      if (avg[i] < avg[j]) temp++;
    }
    answer.push(temp);
  }

  return answer;
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
