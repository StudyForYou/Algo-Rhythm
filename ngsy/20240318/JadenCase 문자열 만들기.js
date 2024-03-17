/**JadenCase 문자열 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12951
 *
 *
 */
function solution(s) {
  const str = s.split(" ").reduce((acc, cur) => {
    acc.push(
      cur.charAt(0).toUpperCase() + cur.toLowerCase().slice(1, cur.length)
    );
    return acc;
  }, []);

  return str.join(" ");
}
