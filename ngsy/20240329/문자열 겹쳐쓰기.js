/**문자열 겹쳐쓰기 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/181943
 *
 *  테스트 6이 통과가 안되었음
 *  my_string.replace(my_string.slice(s,Number(overwrite_string.length+s)),overwrite_string);
 */
function solution(my_string, overwrite_string, s) {
  let num = 0;
  const answer = my_string.split("").reduce((acc, cur, idx) => {
    if (s <= idx && overwrite_string.length + s > idx) {
      acc += overwrite_string.charAt(num);
      num++;
    } else {
      acc += cur;
    }
    return acc;
  }, "");
  return answer;
}
