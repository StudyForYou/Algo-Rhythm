/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12915
 * @param {string[]} strings 
 * @param {number} n 
 * @returns 단어를 n번째 철자를 기준으로 오름차순 정렬한다. n번째 철자가 같은경우 사전순으로 정렬한다.
 */
function solution(strings, n) {
  let sorting = strings.sort();
  return sorting.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}
