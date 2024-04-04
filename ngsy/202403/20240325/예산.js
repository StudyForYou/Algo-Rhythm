/**예산 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12982
 *
 *
 *
 *
 */
function solution(d, budget) {
  let sum = 0;
  const answer = d
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      sum += cur;
      if (sum <= budget) acc++;
      return acc;
    }, 0);
  return answer;
}
