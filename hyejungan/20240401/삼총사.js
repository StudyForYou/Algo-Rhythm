/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/131705
 * @param {[number]} 학생들의 정수번호 배열
 * return 세 학생의 번호를 합친 값이 0인 경우의 수를 출력
 */

function solution(number) {
  let result = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) result += 1;
      }
    }
  }
  return result;
}
