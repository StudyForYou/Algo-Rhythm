// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  // 각 원소를 정렬
  sizes = sizes.map((size) => size.sort((a, b) => a - b));

  // 각 원소의 첫 번째 요소 중 가장 큰 값 찾기
  let maxFirst = Math.max(...sizes.map((size) => size[0]));

  // 각 원소의 두 번째 요소 중 가장 큰 값 찾기
  let maxSecond = Math.max(...sizes.map((size) => size[1]));

  // 두 값 곱하기
  return maxFirst * maxSecond;
}
