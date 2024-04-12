/** 직사각형 넓이 구하기 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/120860
 *
 */
function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

  const width = x1 !== x2 ? x1 - x2 : x1 - x3;
  const height = y1 !== y2 ? y1 - y2 : y1 - y3;

  return Math.abs(width) * Math.abs(height);
}
