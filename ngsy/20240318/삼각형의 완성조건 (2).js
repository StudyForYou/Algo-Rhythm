/**삼각형의 완성조건 (2) Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/120868
 * a: 가장 긴 변
 * a < ( b + c)
 */

function solution(sides) {
  const maxLine = Math.max(...sides);
  const minLine = Math.min(...sides);
  const sumLine = maxLine + minLine;
  let count = 0;

  // sides에 가장 긴 변이 있는 경우
  for (let i = 1; i <= maxLine; i++) {
    let sum = i + minLine;
    if (sum > maxLine) count += 1;
  }

  // sides에 가장 긴 변이 없는 경우
  for (let j = maxLine + 1; j < sumLine; j++) count += 1;

  return count;
}
