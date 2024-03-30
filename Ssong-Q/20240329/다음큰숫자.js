function solution(n) {
  let answer = 0,
    count = 0;
  const ORIGIN = n.toString(2);
  for (let c of ORIGIN) {
    if (c === "1") count++;
  }

  n++;

  while (true) {
    let countSecond = 0;
    const BI = n.toString(2);

    for (let c of BI) {
      if (c === "1") countSecond++;
    }

    if (count === countSecond) break;

    n++;
  }

  answer = n;

  return answer;
}

console.log(solution(78));
console.log(solution(15));
