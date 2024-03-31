/**피보나치 수 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12945#qna
 *
 */
function solution(n) {
  const fibArr = [0, 1]; //피보나치 수는 F(0)일 땐 0, F(1)일 땐 1 을 출력함
  //2이상의 수 부터 입력되니 2부터 시작
  for (let i = 2; i <= n; i++) {
    //% 1234567로 나눈 값으로 넣지 않으면 테스트 케이스에서 사이즈 초과됨
    fibArr.push((fibArr[i - 1] + fibArr[i - 2]) % 1234567);
  }

  return fibArr[n];
}
