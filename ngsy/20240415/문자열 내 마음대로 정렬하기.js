/** 문자열 내 마음대로 정렬하기 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12915
 *
 */
function solution(strings, n) {
  strings.sort(
    (a, b) => a[n].charCodeAt() - b[n].charCodeAt() || a.localeCompare(b)
  );

  return strings;
}
