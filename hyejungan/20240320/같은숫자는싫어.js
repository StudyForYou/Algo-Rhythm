/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * @param {[num]} arr
 * @returns 배열 내 연속으로 나오는 중복숫자 제외 후 출력
 * acc.at(-1) => 함수호출은 보다 시간이 더 걸림.(시간초과남)
 */

function solution(arr) {
  return arr.reduce((acc, cur) => {
    if (acc[acc.length - 1] !== cur) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
