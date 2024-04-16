/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120860
 * @param {number[][]} dots number의 이차배열
 * @returns 각 직사각형의 꼭지점 좌표일때 넓이를 구해라
 */
function solution(dots) {
  let x = [dots[0][0], 0]
  let y = [dots[0][1], 0]
  
  for(let i = 1; i < dots.length; i++) {
      if(dots[i][0] !== x[0]) x[1] = dots[i][0];
      if(dots[i][1] !== y[0]) y[1] = dots[i][1];
  }
  
  let width = Math.abs(x[0] - x[1])
  let length = Math.abs(y[0] - y[1])
  
  return width * length
} 