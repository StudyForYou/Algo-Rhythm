/** 예상 대진표 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12985
 *
 */
function solution(n, a, b) {
  let answer = 0;
  while (true) {
    //라운드 증가
    answer += 1;
    //이겼을때마다 참가번호 변경
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    //같은 번호이면 만나게 됨으로 종료
    if (a === b) break;
  }

  return answer;
}
