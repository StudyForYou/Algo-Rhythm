/**삼총사 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * 중첩 for문 말고는 방법이 생각나지않았음
 */
function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        answer += number[i] + number[j] + number[k] === 0 ? 1 : 0;
      }
    }
  }

  return answer;
}
