function solution(scoville, K) {
  let answer = 0;

  scoville.sort((a, b) => b - a);

  while (Math.min(...scoville) < K) {
    let newNum;
    newNum = Math.min(...scoville);
    scoville.pop();
    newNum += Math.min(...scoville) * 2;
    scoville.pop();
    scoville.push(newNum);

    if (scoville.length === 1 && scoville[0] < K) {
      answer = -1;
      break;
    }

    answer++;

    scoville.sort((a, b) => b - a);
  }

  return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
