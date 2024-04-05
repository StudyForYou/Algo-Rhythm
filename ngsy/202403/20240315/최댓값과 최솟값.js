/**최댓값과 최솟값 Lv.2
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/12939
 * @param {string} s ""1 2 3 4"
 * @returns
 */
function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}
