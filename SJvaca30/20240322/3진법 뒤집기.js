/**
https://school.programmers.co.kr/learn/courses/30/lessons/68935
 */

function solution(n) {
  let reversed = n
    .toString(3) // n을 3진법 문자열로 변환
    .split("") // 문자열을 배열로 변환
    .reverse() // 배열을 뒤집음
    .join(""); // 배열을 다시 문자열로 변환

  return parseInt(reversed, 3); // 문자열을 10진법 숫자로 변환
}
