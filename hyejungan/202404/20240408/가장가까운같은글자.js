/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/142086
 * @param {string} s
 * @returns string의 각 철자의 같은게 얼마나 앞에있는지 확인하고 없으면 -1을 출력
 */

function solution(s) {
  let stack = [];
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      stack.push(s[i]);
      result.push(-1);
    } else {
      let j = stack.indexOf(s[i]);
      result.push(i - j);
      stack.push(s[j]);
      stack[j] = "*";
    }
  }
  return result;
}
