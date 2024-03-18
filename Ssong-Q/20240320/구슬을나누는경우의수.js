/**
 * balls 와 share의 input이 들어왔을 때 share 개의 구슬을 고르는 가능한 모든 경우의 수를 return하는 함수
 * @param {number} balls
 * @param {number} share
 * @returns 구슬을 고르는 모든 경우의 수
 */

function solution(balls, share) {
  let answer = 0,
    mom = 1,
    son = 1;

  for (let i = balls; i > balls - share; i--) son *= i;
  for (let i = share; i >= 1; i--) mom *= i;

  answer = son / mom;

  return answer;
}

console.log(solution(3, 2));
console.log(solution(5, 3));
