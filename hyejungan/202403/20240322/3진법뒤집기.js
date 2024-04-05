/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/68935
 * @param {num} n => 10진법 수 
 * @returns 10진법 수 n을 3진법으로 변경후 앞뒤로 뒤집은 후 다시 10진수로 출력
 */

function solution(n) {
  let num = n.toString(3).split("").reverse().join("");
  return parseInt(num, 3);
}
