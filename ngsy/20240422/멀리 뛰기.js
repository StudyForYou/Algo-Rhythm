/** 멀리 뛰기 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12914#
 *
 *
 */
function solution(n) {
  //dy n+1 size에 배열을 생성한다.
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  //dy 값을 그대로 넣게되면 infinity 가 되어 1234567을 나눈 나머지 값을 넣어준다.
  for (let i = 3; i <= n; i++) {
    dy[i] = (dy[i - 2] + dy[i - 1]) % 1234567;
  }
  const answer = dy[n];

  return answer;
}
