/**3진법 뒤집기 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/68935
 *
 *
 */
function solution(n) {
  const answer = n.toString(3).split("").reverse().join(""); // 10진수값.toString(n) === 10진수에서 n진수로 변환
  return parseInt(answer, 3); //parseInt(n진법으로 변환된 값 , n) === n 진수에서 10진수로 변경
}
