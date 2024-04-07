/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/86491
 * @param {number[][]} sizes
 * @returns 파라미터로 들어오는 size의 명함을 모두 넣을 수 있는 지갑 중 가장 작은 넓이
 */
function solution(sizes) {
  let result = 0;
  sizes
    .sort((a, b) => b.sort((c, d) => d - c)[0] - a.sort((c, d) => d - c)[0])
    .forEach((size) => {
      if (sizes[0][0] * size[1] > result) result = sizes[0][0] * size[1];
    });
  return result;
}
