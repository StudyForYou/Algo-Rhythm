/** 점프와 순간이동 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12980
 *
 */
function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n--;
      answer++;
    }
  }

  return answer;
}
