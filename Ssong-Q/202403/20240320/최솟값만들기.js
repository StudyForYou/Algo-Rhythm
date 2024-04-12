/**
 * 2가지 배열이 들어올 때, 각 배열의 숫자들을 곱한 값들을 다 더했을 때, 최솟값을 구해서 리턴하는 함수
 * @param {number[]} A
 * @param {number[]} B
 * @returns 곱한 값들을 다 더한 값 중 최솟값
 */

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  answer = A.reduce((acc, v, i) => acc + v * B[i], answer);

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
