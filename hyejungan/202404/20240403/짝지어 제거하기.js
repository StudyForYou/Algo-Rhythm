/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12973
 * @param {string} s 알파벳 소문자로 이루어진 문자열
 * @returns 알파벳 2개 붙어있는 문자열을 제거하는 행위를 반복할때 기존 문자열 s가 모두 없어지면 1 아닐경우 0을 리턴
 */
function solution(s) {
  return s.split("").reduce((acc, cur) => {
    if (acc[acc.length - 1] !== cur) {
      acc.push(cur);
    } else {
      acc.pop();
    }
    return acc;
  }, []).length
    ? 0
    : 1;
}
