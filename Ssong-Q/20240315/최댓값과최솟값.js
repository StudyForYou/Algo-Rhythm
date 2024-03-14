/**
 * 숫자들이 저장된 문자열이 들어오면 최소값과 최대값을 문자열로 리턴하는 함수
 * @param {string} s 숫자들이 저장된 문자열
 * @returns "(최소값) (최대값)" 형태
 */

function solution(s) {
  const arr = s.split(" ");

  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
