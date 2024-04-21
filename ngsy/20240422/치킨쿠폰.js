/** 치킨 쿠폰 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/120884
 *
 *
 */
function solution(chicken) {
  let answer = 0;
  let service = 0;
  while (chicken >= 10) {
    service = Math.floor(chicken / 10);
    answer += service;
    chicken = (chicken % 10) + service;
  }

  return answer;
}
