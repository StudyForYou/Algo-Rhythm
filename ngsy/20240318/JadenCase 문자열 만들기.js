/**JadenCase 문자열 만들기 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12951
 *
 *
 */
function solution(s) {
  let str = s.split(" ").map((val) => {
    let temp = val.toLowerCase();
    if (0 * temp.charAt(0) !== 0)
      temp = temp.charAt(0).toUpperCase() + temp.slice(1, temp.length);
    return temp;
  });

  return str.join(" ");
}
