function solution(brown, yellow) {
  let answer = [],
    sum = brown + yellow;

  for (let width = 3; width <= Math.ceil(sum / 3); width++) {
    if (sum % width !== 0) continue;

    const height = sum / width;

    const p1 = width * 2 + 2 * (height - 2);
    const p2 = (width - 2) * (height - 2);

    if (p1 === brown && p2 === yellow) {
      answer = [Math.max(width, height), Math.min(width, height)];
      break;
    }
  }

  return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
