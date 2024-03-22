/**
https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(s) {
  let leftCount = 0;
  let rightCount = 0;

  for (const text of s) {
    if (text === "(") {
      leftCount++;
    } else if (text === ")") {
      rightCount++;
    }

    if (rightCount > leftCount) {
      return false;
    }
  }

  return leftCount === rightCount;
}
