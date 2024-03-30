/**크기가 작은 부분문자열 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/147355
 *
 */
function solution(t, p) {
  const len = p.length;
  const temp = [];
  let num = "";

  for (let i in t) {
    for (let j = i; j < Number(i) + len; j++) {
      num += t[j];
      if (num.length == len) {
        temp.push(num);
        num = "";
      }
    }
  }

  let answer = temp.filter((val, index) => val <= p);

  return answer.length;
}
