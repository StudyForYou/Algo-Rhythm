/**같은 숫자는 싫어 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 *
 *
 */
function solution(arr) {
  return arr.filter((val, idx) => arr[idx] !== arr[idx + 1]);
}
