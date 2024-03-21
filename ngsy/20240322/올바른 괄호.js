/**올바른 괄호 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909#
 *
 * 계속 테스트 케이스 5,11 번을 통과 못하는게 있어서 반례를 찾아서 해결함
 * "())((()))(()"
 */
function solution(s) {
  const arr = s.split("");
  //첫번째 인덱스 요소는 에 괄호가 닫혀있는 경우는 성립이 안된다. || 마지막 인덱스 요소에 괄호가 열려있는건 성립이안된다.
  if (arr[0] === ")" || arr[arr.length - 1] === "(") return false;

  const answer = arr.reduce((acc, cur, idx) => {
    acc = cur === "(" ? (acc += 1) : (acc -= 1);
    // 음수로 떨어지는 경우는 이미 괄호가 열리고 닫힌 상태에서 닫혀있는 괄호가 두번 연속으로 나왔을 경우
    if (acc < 0) return false;
    return acc;
  }, 0);

  return answer === 0 ? true : false;
}
