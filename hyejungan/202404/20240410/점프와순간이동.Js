/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12980
 * @param n 이동해야하는거리를 숫자로 입력
 * @returns 이동한 거리의 x2는 순간이동 가능, 건전지사용 0; => 배터리 소모량의 최소값 리턴
 */
function solution(n) {
  let count = 0;
  while (true) {
    if (n % 2 !== 0) {
      n -= 1;
      count += 1;
    } else {
      n /= 2;
    }
    if (n === 0) break;
  }
  return count;
}
