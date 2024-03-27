/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/147355
 * @param {string} t ex) "1235567"
 * @param {string} p ex) "23"
 * @returns T에서 p와 길이가 같은 부분문자열 중, P보다 작거나 같은 경우 갯수를 리턴
 */

function solution(t, p) {
  let result = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (+t.slice(i, i + p.length) <= +p) {
      result += 1;
    }
  }

  return result;
}
