// 프로그래머스 2레벨, 최댓값과 최솟값.

function solution(s) {
  const array = s.split(" ");
  array.sort((a, b) => a-b );
  return `${array[0]} ${array[array.length -1]}`;
}