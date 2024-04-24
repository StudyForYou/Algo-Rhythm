/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/131701#qna
 * @param {number[]} elements 원형수열
 * @returns 연속하는 부분수열의 합을 배열로 만들때, 갯수
 */
function solution(elements) {
  let stack = [];

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let sum = elements.slice(j, j + i);

      if (j + i > elements.length) {
        sum = [...sum, ...elements.slice(0, j + i - elements.length)];
      }

      stack.push(sum.reduce((acc, cur) => acc + cur, 0));
    }
  }

  let newS = [...new Set(stack)];

  return newS.length;
}
