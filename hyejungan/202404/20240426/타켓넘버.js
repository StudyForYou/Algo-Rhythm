/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 * @param {number[]} numbers 
 * @param {number} target 
 * @returns numbers배열 수를 더하거나 빼서 target을 만들수 있는 경우의수 출력.
 */
function solution(numbers, target) {
  let count = 0;

  function DFS(sum, dep) {
    console.log(sum, dep);
    if (dep === numbers.length) {
      if (sum === target) {
        count++;
      }
      return;
    }

    DFS(sum + numbers[dep], dep + 1);
    DFS(sum - numbers[dep], dep + 1);
  }

  DFS(0, 0);

  return count;
}
