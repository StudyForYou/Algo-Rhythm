function solution(n, lost, reserve) {
  let answer = n - lost.length,
    temp = [];

  reserve.sort((a, b) => a - b);

  // 같은 것 제거
  for (let idx = 0; idx < reserve.length; idx++) {
    if (!lost.length) break;

    if (lost.includes(reserve[idx])) {
      // 같은 값일 때
      const targetIdx = lost.findIndex((val) => val === reserve[idx]);
      lost.splice(targetIdx, 1);
      temp.push(reserve[idx]);
      answer++;
    }
  }

  // 같은 것 제거한 것을 reserve에서 제거
  for (let idx = 0; idx < temp.length; idx++) {
    const targetIdx = reserve.findIndex((val) => val === temp[idx]);
    reserve.splice(targetIdx, 1);
  }

  // 나머지 reserve에서 아래, 위 숫자 처리
  for (let idx = 0; idx < reserve.length; idx++) {
    if (!lost.length) break;

    if (lost.includes(reserve[idx] - 1)) {
      // 작은 값일 때 (작은 값 우선)
      const targetIdx = lost.findIndex((val) => val === reserve[idx] - 1);
      lost.splice(targetIdx, 1);
      answer++;
      continue;
    }

    if (lost.includes(reserve[idx] + 1)) {
      // 큰 값일 때
      const targetIdx = lost.findIndex((val) => val === reserve[idx] + 1);
      lost.splice(targetIdx, 1);
      answer++;
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(5, [4, 5], [3, 4]));
console.log(solution(5, [3, 4], [4, 3]));
console.log(solution(5, [1, 3], [2, 5]));
console.log(solution(4, [1, 4], [2, 3]));
