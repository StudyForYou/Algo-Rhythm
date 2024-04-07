/**가장 가까운 같은 글자 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/142086
 *
 */
function solution(s) {
  let temp = [];

  var answer = s.split("").reduce((acc, cur, idx) => {
    if (!temp.includes(cur)) {
      temp.push(cur);
      acc.push(-1);
    } else {
      //가장 가까운 글자를 찾기 위해 slice
      let str = s.slice(0, idx);
      acc.push(idx - str.lastIndexOf(cur));
    }

    return acc;
  }, []);

  return answer;
}
