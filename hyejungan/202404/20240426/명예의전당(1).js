/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/138477
 * @param {number} k 
 * @param {number[]} score 
 * @returns 매일 1명씩 출연하는 대회에서 명예의 전당에는 점수가 높은 순으로 k번째까지만 올라간다. 그리고 매일 명예의 전당에 오른 사람 중 가장 낮은 점수를 발표할때 그 점수들을 배열로 리턴
 */
function solution(k, score) {
  let stack = [];
  let result = [];

  for (let s of score) {
    stack.push(s);

    stack.sort((a, b) => b - a);

    if (stack.length > k) {
      result.push(stack[k - 1]);
    } else {
      result.push(stack[stack.length - 1]);
    }
  }
  return result;
}
