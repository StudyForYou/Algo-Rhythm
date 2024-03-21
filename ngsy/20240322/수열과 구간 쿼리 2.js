/**수열과 구간 쿼리2 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/181923
 *
 * arr의 구간의 기준을 arr 배열의 인덱스로 생각해야하는것을 각 인덱스 요소들의 크기로 생각하여서 혼란이왔었음.
 */
function solution(arr, queries) {
  let answer = [];
  for (let el of queries) {
    [s, e, k] = el;
    let temp = arr.slice(s, e + 1).filter((val) => k < val);
    temp.length > 0 ? answer.push(Math.min(...temp)) : answer.push(-1);
  }
  return answer;
}
